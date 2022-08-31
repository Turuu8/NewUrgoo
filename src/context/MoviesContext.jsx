import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const MoviesContext=createContext();

export const MoviesContextProvider=({children})=>{
    const [userWantedMovie,setUserWantedMovie]=useState('');

    return(
        <MoviesContext.Provider value={{userWantedMovie,setUserWantedMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}