import React ,{useState} from "react";
const CounterComponent=()=>{
    const [count,setCount]= useState(12)
    
    return (
    <div>
        <p>Count Component--->{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    )
}
export default CounterComponent