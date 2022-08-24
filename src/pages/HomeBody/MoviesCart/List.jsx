import { Link , Routes , Route } from "react-router-dom"
import { FirstMovie } from "../../FirstMovie/From"
import './List.css'

export const MoviesCart = (props) => {
    return (
            <div className="cartCss">
                <img src={props.data.image} alt="" />
                <h2>{props.data.name}</h2>
            </div>
    )
}