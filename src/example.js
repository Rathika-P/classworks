import React,{usestate} from 'react';
export default function Usestate()
{
    var[name,setname]=usestate("");
    const[data,setdata]=Usestate("")
    const submitdata=(e)=>
    {
        e.preventdefault();
        setdata(()=>{return name});
    }
    
    return(
        <form on submit={submitdata} id="myform">
        <p>My name is {name}</p>
        <input type="text" value={name} onChange={e=>setname(e.target.value)}/>
        <input type = 'submit' value= "submit"/><br></br>
        <h1>My name is {data}</h1>
        </form>
    )
}