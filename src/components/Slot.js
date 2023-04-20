import React from "react";

const Slot=(props)=>{
    return (
        <>
               <div className="card">
  <img src={props.img} alt={props.alt}></img>
  <div className="container">
    <h3><b>{props.ott}</b></h3> 
    <h3 className="card_title">{props.title}</h3>
    <a href={props.link} target="_blank" without rel="noreferrer">
            <button className="btn">Watch Now</button>
            </a>
    </div>
  
</div>
        </>
    )
}
export default Slot;