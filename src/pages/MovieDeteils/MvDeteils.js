/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from "react";
import './MvDeteils.css';
import { useParams } from "react-router-dom";

const MovieDeteils = () =>{
    const [currentMovieDeteils, setMovie] =useState()
    const {id} =useParams()
    useEffect(() =>{
        getData()
        window.scrollTo(0,0)
    },[])

    const getData= () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data =>setMovie(data))
        .then(data =>console.log(data))
            
       
    }
    return(
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDeteils ? currentMovieDeteils.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDeteils ? currentMovieDeteils.poster_path : ""}`} />
                           
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{currentMovieDeteils ? currentMovieDeteils.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDeteils ? currentMovieDeteils.tagline : ""}</div>
                            <div className="movie__rating">
                                {currentMovieDeteils ? currentMovieDeteils.vote_average: ""} <i class="fas fa-star" />
                                <span className="movie__voteCount">{currentMovieDeteils ? "(" + currentMovieDeteils.vote_count + ") votes" : ""}</span>
                            </div>  
                            <div className="movie__runtime">{currentMovieDeteils ? currentMovieDeteils.runtime + " mins" : ""}
                            <span>Language:</span>
                                {
                                    currentMovieDeteils && currentMovieDeteils.spoken_languages

                                    ? 
                                    currentMovieDeteils.spoken_languages.map(spoken_languages => (
                                        <>
                                        <span className="langu" spoken_languages={spoken_languages.english_name}>{spoken_languages.name}</span>
                                        </>
                                    )) 
                                    : 
                                    ""
                                }
                            </div>
                            <div className="movie__releaseDate">{currentMovieDeteils ? "Release date: " + currentMovieDeteils.release_date : ""}</div>
                            <div className="movie__revenue">{currentMovieDeteils ? "Revenue: " + currentMovieDeteils.revenue : ""}
                            <div className="movie__releaseDate">{currentMovieDeteils ? "Popularity: " + currentMovieDeteils.popularity:""}</div>
                            </div>
                           
                         
                            <div className="movie__genres">
                                {
                                    currentMovieDeteils && currentMovieDeteils.genres
                                    ? 
                                    currentMovieDeteils.genres.map(genre => (
                                        <>
                                        <span className="movie__genre" ids={genre.ids}>{genre.name}</span>
                                        </>
                                    )) 
                                    : 
                                    ""
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{currentMovieDeteils ? currentMovieDeteils.overview : ""}</div>
                        </div>
                        
                    </div>
                </div>
                <div className="ProductionHeading">Production companies</div>
                <div className="movie__production">
                   { 
                        currentMovieDeteils && currentMovieDeteils.production_companies && currentMovieDeteils.production_companies.map(company => (
                            <>
                                {
                                    company.logo_path 
                                    && 
                                    <span className="productionCompanyImage">
                                        <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                        <span>{company.name}</span>
                                    </span>
                                }
                            </>
                        ))
                    }
                </div>
                <div className="ProductionHeading">Production Country</div>
                <div className="movie__production">
                    {
                        currentMovieDeteils && currentMovieDeteils.production_countries
                        && currentMovieDeteils.production_countries
                        .map(country => (
                            <>
                                {
                                    // country.iso_3166_1
                                    // && 
                                    <span className="productionCountry">
                                        <span>{country.name}</span>
                                    </span>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        )
}

export default MovieDeteils