import React from "react";

const Child=({cartitems,setCartitems})=>{

    function removelogic(event) {
      
    }

    return(<div className="child ">
    <h2>Child Component</h2>
    <ul>
    {cartitems && cartitems.map((elementobj,index)=>{return(<li key={index}>{elementobj.item}-${elementobj.price} <button onClick={(e)=>{removelogic(e)}}>Remove</button></li>)})}
    </ul>
    </div>)
}

export default Child;