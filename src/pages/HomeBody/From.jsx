import { Link } from 'react-router-dom'
import { FirstMovie } from '../FirstMovie/From'
import './From.css'
import { MoviesCart } from './MoviesCart/List';
import { datas } from '../../datas/data';
import { MoviesContext } from '../../context/MoviesContext';
import { useContext } from 'react';

export const HomePageBody = () => {
    const {userWantedMovie,setUserWantedMovie}=useContext(MoviesContext);
    console.log("userWantedMovie --------",userWantedMovie)
    return (
        <div className="movies">
            <h3>Кино Жагсаалт</h3>
                <span className='cartPart'> 
                {
                    datas.map((e , i) => {
                        return(
                            <div key={i}>
                                <Link to='/movie/about'>
                                    <button type='click'>
                                        <MoviesCart data={e} key={i}/>
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                }
                </span>
        </div>
    )
}
