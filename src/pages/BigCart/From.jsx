import { Link } from 'react-router-dom'
import './From.css'
export const MoviesBigCart = (props) => {
    // console.log("-------" , props.data)
    const Reserved = () => {
        <Link to='/01'>{<h1>jww;p</h1>}</Link>
    }
    return (
        <div className="border">
             <h1>{props.data.name}</h1>
                <img src={props.data.image} alt="" />
                <p>{props.data.event}</p>
            <button onChange={Reserved()} >zahilah</button>
        </div>
    )
}