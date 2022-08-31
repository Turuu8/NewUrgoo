import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
import { BackButtonPage } from '../BackButton/BackButton';
import '../FirstMovie/BigCart/List.css'
import '../FirstMovie/From.css'
import '../Reserved/Body.css'
import { Header } from '../Header';

export const ScreenSelect = () => {
    const { userWantedMovie } = useContext(MoviesContext);

    const [ item , setItem ] = useState(``)

    const Seat = () => {
        for (let i = 0; i < 30; i++) {
            return(
                <div>hello</div>
            )
        }
    }

    return (
        <div>
            <Header/>
            <div className='movie-part'>
                <div className="border">
                    <img className='movieImg' src={userWantedMovie.image} alt="" />
                    <div className='reviem'>
                        <h1>{userWantedMovie.name}</h1>
                        <div> {Seat()}
                        </div>
                        <Link to='/movie/about/reserved'>
                            <BackButtonPage />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}