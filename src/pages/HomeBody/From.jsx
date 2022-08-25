import { Link } from 'react-router-dom'
import { useMoviesContext } from '../../context/List'
import { FirstMovie } from '../FirstMovie/From'
import './From.css'
import { MoviesCart } from './MoviesCart/List'
import { createContext , useContext } from "react";

const MovieListContext = createContext();

export const HomePageBody = () => {
    const data = useMoviesContext()
    const movies = data.newData;
    // const MovieListProvider = ({children}) => {
    //     const Click = () =>{

    //     }
    //     return (
    //         <MovieListContext.Provider value={{e}}>
    //                 {children}   
    //         </MovieListContext.Provider>
    //     )
    // }
    const Click = (event)  => {
        movies.map((e , i) => {  
            if(event===i){
                const MovieListProvider = ({children}) => {
                return (
                    <MovieListContext.Provider value={{e}}>
                            {children}   
                    </MovieListContext.Provider>
                )
            }
        }
    })
    }
    return (
        <div className="movies">
            <h3>Кино Жагсаалт</h3>
                <span className='cartPart'> 
                {
                    movies.map((e , i) => {
                        return(
                            <div key={i}>
                                <Link to='/movie/about'>
                                    <button type='click' onClick={()=> Click(i)}>
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
export default MovieListProvider;
export const useMoviesListContext = () => useContext(MovieListContext)
