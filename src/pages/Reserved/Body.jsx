import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Header } from "../Header"
import '../FirstMovie/BigCart/List.css'
import '../FirstMovie/From.css'
import './Body.css'
import { BackButtonPage } from "../BackButton/BackButton";
import { Link } from "react-router-dom";


export const Reserved = () => {
    const { userWantedMovie } = useContext(MoviesContext);

    const [adultNumber, adultSetNumber] = useState(0)
    const [childrenNumber, childrenSetNumber] = useState(0)

    const AdultMinus = () => (adultNumber <= 0) ? alert("hun bhgui") : adultSetNumber((adultNumber) => adultNumber - 1)
    const AdultAdd = () => adultSetNumber((adultNumber) => adultNumber + 1)

    const ChildrenMinus = () => (childrenNumber <= 0) ? alert("hun bhgui") : childrenSetNumber((childrenNumber) => childrenNumber - 1)
    const ChildrenAdd = () => childrenSetNumber((childrenNumber) => childrenNumber + 1)
    
    const style = {
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    }
    return (
        <div style={style}>
            <Header />
            <div className="movie-part">
                <div className="border">
                    <img className='movieImg' src={userWantedMovie.image} alt="" />
                    <div className='reviem'>
                        <h1>{userWantedMovie.name}</h1>
                        <br />
                        <br />
                        <span className="alert">Хүний тоогоо сонгонуу</span>
                        <br />
                        <br />

                        <div className="adultEntry">
                            <h2>Adult:</h2>
                            <h4>9000 ₮</h4>
                            <div className="personNumber">
                                <button onClick={() => AdultMinus()} >-</button>
                                <div>{adultNumber}</div>
                                <button onClick={() => AdultAdd()}>+</button>
                            </div>
                        </div>

                        <div className="childrenEntry">
                            <h2>Children:</h2>
                            <h4>7000 ₮</h4>
                            <div className="personNumber">
                                <button onClick={() => ChildrenMinus()}>-</button>
                                <div>{childrenNumber}</div>
                                <button onClick={() => ChildrenAdd()}>+</button>
                            </div>
                        </div>

                        <div><span>Нийт дүн:{childrenNumber + adultNumber}</span></div>
                        <Link to='/'>
                            <BackButtonPage />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}