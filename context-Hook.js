/* 
The useContext hook allows functional components to directly access values from the React Context API without prop drilling.

.Simplifies data sharing across the component tree.
.Eliminates the need to pass props manually through multiple levels.
.Makes context consumption cleaner and more readable.
*/

import { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const UserContext = createContext();
// Context provider
function Component1(){
    const [user, setUser] = useState("Linus");

    return(
     <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
     </UserContext.Provider>
// all components in this tree will have access to the user content
    );
}

//Use the useContext Hook