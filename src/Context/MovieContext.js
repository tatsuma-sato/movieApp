import React, { createContext, useState } from 'react'

export const MovieContext = createContext();

export const MovieState = ({children}) => {

  const [hiddenMenu, setHiddenMenu] = useState(true)

  return (
    <MovieContext.Provider value={{hiddenMenu, setHiddenMenu}} >
      {children}
    </MovieContext.Provider>

  );
}
