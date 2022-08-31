import { useState } from "react"
import { Link, Routes, Route } from "react-router-dom"
import { FirstMovie } from "../../FirstMovie/From"
import './List.css'
import { MoviesContext } from "../../../context/MoviesContext";
import { MoviesBigCart } from "../../FirstMovie/BigCart/List"
import { useContext } from "react"
export const MoviesCart = (props) => {
    const { setUserWantedMovie } = useContext(MoviesContext);
    return (
        <div className="cartCss">
            <img onClick={() => setUserWantedMovie(props.data)} src={props.data.image} alt="" />
            <h2>{props.data.name}</h2>
        </div>

    )
}