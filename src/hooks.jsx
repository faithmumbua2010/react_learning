import {createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const UserContext = createContext(null);


function Dashboard() {
  return <Greeting />;
}

function Greeting() {
  const user = useContext(UserContext);
  return <p>Hello, {user.name}</p>;
}

function App(){
    const user = { name: 'Faith'};

    return(
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    );
}

createRoot(document.getElementById('root')).render(
    <App />
)

