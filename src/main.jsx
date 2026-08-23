import { createRoot } from 'react-dom/client'

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return (
    <>
      <h1>Goal!</h1>
      <p>Good job</p>
    </>
  );
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={true} />
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
    <Car brand="Toyota"/>
);
