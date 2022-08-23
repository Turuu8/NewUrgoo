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
                        
                        return(
                            <MoviesCart data={e} key={i}/>
                        )
                    })
                }
                </span>
        </div>
    )
}