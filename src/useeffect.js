import React,{useEffect,useState} from 'react'
export default function UseStateEx()
{
    const[Count,setCount]=useStateEx(0)
    useEffect(()=>{
        document.title=`count ${count}`
    })
    return(
        <>
        <p>The count is{Count}</p>
        <button onClick={()=>{setCouny(Count+1)}}>click me</button>
        </>
    )

}