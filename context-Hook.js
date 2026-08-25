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
import { useState, createContext, useContext } from "react";
function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

//Full Example
import { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const UserContent = createContext();

function Component1(){
    const [user, setUser]= useState("Linus");

    return(
        <UserContent.Provider value={user}>
            <h1>{` Hello ${user} ! `}</h1>
            <Component2 />
        </UserContent.Provider>
    );
}

function Component2(){
    return(
        <>
        <h1>Component 2</h1>
        <Component3 />
        </>
    );
}

function Component3(){
    const user =useContext(UserContext);

    return(
        <>
        <h1>Component 3</h1>
        <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Component1 />
)


const moods = {
    happy:'😄' ,
    sad:'😔'
}

const MoodContext = createContext(moods);

function App(props){
    return(
        <MoodContext.Provider></MoodContext.Provider>
    )
}