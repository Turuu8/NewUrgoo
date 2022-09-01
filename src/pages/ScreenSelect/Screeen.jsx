import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
import { BackButtonPage } from '../BackButton/BackButton';
import '../FirstMovie/BigCart/List.css'
import '../FirstMovie/From.css'
import '../Reserved/Body.css'
import { Header } from '../Header';
// import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// end bn shuu

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const ScreenSelect = () => {

    const { userWantedMovie } = useContext(MoviesContext);

    const [ item , setItem ] = useState('10:00')
    const [ time , setTime ] = useState()
    const [ timefour , setTimefour ] = useState('16:30')

    const Time = () => {
        setTime("12:30")
        console.log(time)
        const two = document.getElementById('time')
        two.style.display = "none"
        return (
            <div>{time}</div>
        )
    }
    const Time10 = () => {

    }

    return (
        <div>
            <Header/>
            <div className='movie-part'>
                <div className="border">
                    <img className='movieImg' src={userWantedMovie.image} alt="" />
                    <div className='reviem'>
                        <h1>{userWantedMovie.name}</h1>
                        <div id='time'>
                            <button  onClick={() => Time10()}>{item}</button>
                            <button onClick={() => Time()}>dsfsd</button>
                            <button>{timefour}</button>
                        </div>
                        <div>{time}</div>
                        <input type="text" />
                        <input type="text" />
                        <Link to='/movie/about/reserved'>
                            <BackButtonPage />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}