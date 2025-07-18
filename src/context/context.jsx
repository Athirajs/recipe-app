import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function  GlobalState({ children }) {
    const [searchParams, setSearchParams] = useState("")
    return (
        <GlobalContext.Provider value={{ searchParams, setSearchParams }}>{children}</GlobalContext.Provider>
    )
}

