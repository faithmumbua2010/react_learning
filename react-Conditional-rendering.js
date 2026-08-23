import { createRoot } from "react-dom/client";


//if Statement
function Goal(props){
    if(isGoal){
        return <MadeGoal/>
    }
    return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
    <Goal isGoal={false}/>
);

//Logical && Operator
function Car(props){
    return(
        <>
        {props.brand && <h1>My car is a {props.brand}!</h1>}
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <Car brand="Ford"/>
);