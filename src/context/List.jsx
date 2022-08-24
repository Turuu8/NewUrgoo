import { createContext , useContext } from "react";
import { datas } from "../datas/data";

const MoviesContext = createContext();

export const MovieProvider = ({children}) => {
    const newData = Array.from(datas);
    return (
        <MoviesContext.Provider value={{newData}}>
             {children}   
        </MoviesContext.Provider>
    )
}
export const useMoviesContext = () => useContext(MoviesContext)