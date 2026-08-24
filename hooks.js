/*Hooks- built-in JS functions that  enable functional components to use state, lifecycle, and other React features without relying on class components.

-ALL hook names are prefixed with the word 'use'

rules: they can only be called inside react function components
     : can only be called at the top level of a component
     : cannot be conditional

*/

//State Hooks
// . useState   . useReducer
/* useState : used to declare state variables in functional components, 
allowing us to read and update the state within the component

useState accepts initial state and returns two values:
   .The current state
   .A function that updates the state
*/

import  {useState} from "react";

function App(){
    const[count, setCount] = useState(0);// count- our current state  setCount-function used to update our state
    // we set the initial state to 0
    const increment = ()=>setCount(count + 1);
    const decrement = ()=> setCount(count - 1);

    return(
        <>
        <h1>Count: {count} </h1>{/*display current count*/}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    );
}

// Read state
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);

//update state
/*To update our state, we use our state updater function.*/

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);

//example
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);

// better example
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);