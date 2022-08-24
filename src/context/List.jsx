import { createContext , useContext } from "react";
import { datas } from "../datas/data";

const MoviesContext = createContext();

export const MovieProvider = (props) => {
    const {children} = props;
    return datas.map((e ,i) => {
        return (
            <MoviesContext.Provider value={{e ,i}}>
             {children}   
            </MoviesContext.Provider>
        )
    })
}
export const useMoviesContext = () => useContext(MoviesContext)