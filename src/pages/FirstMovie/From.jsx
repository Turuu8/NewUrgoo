import { datas } from "../../datas/data"
import { Header } from "../Header"
import './From.css'
import React , { useEffect , useState } from 'react';
import { Link } from "react-router-dom";
import { MoviesBigCart } from "../BigCart/List";
import MovieListProvider, { useMoviesListContext } from "../HomeBody/From";

export const FirstMovie = (props) => {
    const data = useMoviesListContext()
    console.log(data)
    const style = {
        width: '100%',
        display: 'flex',
        flexDirection:"column",
        alignItems:"center"
    }
    const [ items , setItmes] = useState(datas)
    return (
        <div style={style}>
             <MovieListProvider>
                <Header/>
                <MoviesBigCart/>
            </MovieListProvider>
        </div>
    )
}