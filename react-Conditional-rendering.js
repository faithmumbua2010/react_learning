

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

