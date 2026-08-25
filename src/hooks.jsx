import {useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const UserContext = createContext();

function Component1(){
    const [user, setUser] = useState("LInus");

    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}


