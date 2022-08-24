import { datas } from "../../datas/data"
import { Header } from "../Header"
import './From.css'
import React , { useEffect , useState } from 'react';
import { Link } from "react-router-dom";
import { MoviesBigCart } from "../BigCart/From";

export const FirstMovie = (props) => {
    const style = {
        width: '100%',
        display: 'flex',
        flexDirection:"column",
        alignItems:"center"
    }
    // console.log("-------",   props.data)
    const [ items , setItmes] = useState(datas)
    return (
        <div style={style}>
            <Header/>
            <div className="movie-part"> 
                <MoviesBigCart data={props.data} />
            </div>
        </div>
    )
}