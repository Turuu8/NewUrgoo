import { Link } from 'react-router-dom'
import './From.css'
import { MoviesCart } from './MoviesCart/List';
import { datas } from '../../datas/data';

export const HomePageBody = () => {
    return (
        <div className="movies">
            <h3>Кино Жагсаалт</h3>
            <span className='cartPart'>
                {
                    datas.map((e, i) => {
                        return (
                            <div key={i}>
                                <Link to='/movie/about'>
                                    <button className='jumpMovie' type='click'>
                                        <MoviesCart data={e} key={i} />
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
