import { datas } from "../../datas/data"
import { Header } from "../Header"
import './From.css'
import React , { useEffect , useState } from 'react';
import { Link } from "react-router-dom";

export const FirstMovie = () => {
    const style = {
        width: '100%',
        display: 'flex',
        flexDirection:"column",
        alignItems:"center"
    }
    const [ items , setItmes] = useState(datas)
    // console.log(items.map(item => item.name))
    return (
        <div style={style}>
            <Header/>
            <div>
                {items.map((item) => {
                    return(
                        <MoviesBigCart data={item}/>
                        )  
                })}
            </div>
        </div>
    )
}