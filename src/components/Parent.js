import React,{useState} from "react";
import Child from "./Child";

const Parent = ()=>{
    let [cartitems,setCartitems] = useState([{item:"Item 1",price:"$10"},{item:"Item 2",price:"$20"},{item:"Item 3",price:"$30"}]);
    console.log(cartitems)
    let [ipdata,setIpdata]=useState({item:"",price:""});
    function submitfunc(e) {
        e.preventDefault();
        setCartitems([...cartitems,ipdata])
        setIpdata({item:"",price:""})
    }
    return(<div className="parent ">
    <h1>Parent Component</h1>
    <form onSubmit={submitfunc}>
        <label htmlFor="itemName">Item Name</label>
        <input type="text" value={ipdata.item} onChange={(e)=>{setIpdata({...ipdata,item:e.target.value})}}/>
        <label htmlFor="itemPrice">Item Price</label>
        <input type="number" value={ipdata.price} onChange={(e)=>{setIpdata({...ipdata,price:e.target.value})}}/>
        <button type="submit">Add Item</button>
    </form>
    <Child cartitems={cartitems} setCartitems={setCartitems}/>
    </div>)
}

export default Parent;