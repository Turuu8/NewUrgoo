import { useState } from "react"
import { Link , Routes , Route } from "react-router-dom"
import { FirstMovie } from "../../FirstMovie/From"
import './List.css'

export const MoviesCart = (props) => {
    // console.log("------",props.data)
    return (
        <div className="cartCss">
            {/* <noscript>{<FirstMovie data={props} />}</noscript> */}
            <img src={props.data.image} alt="" />
            <h2>{props.data.name}</h2>
        </div>

    )
}