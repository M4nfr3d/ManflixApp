import React, { useContext, useState } from "react";

const userLoginContext = React.createContext();
const userToogleContext = React.createContext();

export function useLoginContext() {
    return useContext(userLoginContext);
}
export function useLoginToogleContext() {
    return useContext(userToogleContext);
}

export function LoginProvider(props) {
    const [user,setUser] = useState(false)

    const cambiaLogin = () => {
        user?setUser(false):setUser(true)
    }

    return (
        <userLoginContext.Provider value={user}>
            <userToogleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToogleContext.Provider>
        </userLoginContext.Provider>
    )

}