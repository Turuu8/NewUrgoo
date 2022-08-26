import './List.css'
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
export const MoviesBigCart = () => {
    const {userWantedMovie}=useContext(MoviesContext);
    console.log("MoviesBigCartDataIRlee",userWantedMovie)

    return (
        <div className="border">
            <img src={userWantedMovie.image} alt="" />
            <h1>{userWantedMovie.name}</h1>
        </div>
    )
}