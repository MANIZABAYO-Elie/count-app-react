import React, {useState} from "react";

const Counter = ()=>{
const [count,SetCount] = useState(0)

const decrementCount = ()=>{
    SetCount(count-1)
}
const incrementCount = ()=>{
    SetCount(count+1)
}
const resetCount = ()=>{
    SetCount(0)
}




return(
    <div>
        <h1>The value is:{count}</h1><br></br>
        <button onClick={decrementCount}>Drecrease</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>Increase</button>

    </div>
    
);



}
export default Counter