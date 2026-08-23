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
