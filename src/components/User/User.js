import React from "react";
import Player from "./Player";
import "./user.css"
function User(props) {
  let a =0
  props.items && props.items.forEach(element => {
    a+=element.value
  });  
  return (
    <div className="UserDiv">
      <img
        src="https://w7.pngwing.com/pngs/196/33/png-transparent-lendup-russell-burch-ii-bancwest-investment-services-financial-advisor-payday-loan-anonymous-miscellaneous-angle-company.png"
        alt=""
        className="UserImg"
      />
      <h1>{props.name}</h1>
      {props.items&&
        props.items.map((i)=>(<Player item={i}/>))
        }
        
     {a>0 && <h1 style={{color:"red"}}>-{a}M€</h1>}
    </div>
  );
}

export default User;
