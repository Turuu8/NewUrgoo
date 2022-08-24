import { Link } from 'react-router-dom'
import { datas } from '../../datas/data'
import './From.css'
import { MoviesCart } from './MoviesCart/List'

export const HomePageBody = () => {
    return (
        <div className="movies">
            <h3>Кино Жагсаалт</h3>
                <span className='cartPart'> 
                {
                    datas.map((e , i) => {
                        // console.log("=======",e)
                        return(
                            <div key={i}>
                                <button>
                                    <MoviesCart data={e} key={i}/>
                                </button>
                                <Link to = '/movies/about'>
                                </Link>
                            </div>
                        )
                    })
                }
                </span>
        </div>
    )
}