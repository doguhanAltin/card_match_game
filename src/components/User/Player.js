import React from 'react';
import "./user.css"
function Player(props) {
  return <>
  <div className='PlayerDiv'>
      <img src={props.item.imgUrl} alt="" className='PlayerImg'/>
      <span className='PlayerName'>{props.item.name}</span>
      <span className='PlayerValue'>{props.item.value}M€</span>
  </div>
   <hr />
   </> 
}

export default Player;
