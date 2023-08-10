import React from "react";

const Child=({cartitems,setCartitems})=>{

    function removelogic(event,index) {
      let remitems = cartitems.filter((elem,ind)=>{console.log(elem,ind,index); return (ind!==index)})
      setCartitems(remitems)
      console.log("done",cartitems)
    }

    return(<div className="child ">
    <h2>Child Component</h2>
    <ul>
    {cartitems && cartitems.map((elementobj,index)=>{return(<li key={index}>{elementobj.item}-${elementobj.price} <button onClick={(e)=>{removelogic(e,index)}}>Remove</button></li>)})}
    </ul>
    </div>)
}

export default Child;