//They are written in camelCase and the event handlers are written inside curly braces
//Example 

function Football(){ //the function component starts with uppercase
 const shoot= ()=>{
    alert("Great shot!");
 }

 return(
   <button onClick={shoot}>Take the shot!</button>
 )
// createRoot(document.getElementById('root)).render(<Football/>);
}


//Passing Arguements
//To pass an arguement to an event handler , use arrow functions

function Football(){
    const shoot= (a)=>{// (a) is the parameter of the arrow function meaning the function takes one input(a)

    }
}