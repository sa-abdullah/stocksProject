import { useContext, createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    return (
        <GlobalContext.Provider value={{user, setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)

