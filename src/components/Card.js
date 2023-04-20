import React from "react";
import { Link } from "react-router-dom"
const Card=(props)=>{
    let {course,text,btn,btnn}=props;
    
    return(
        <>
       <div id="cd" className="cad card2 " >
  <div className="cont">
    <h5 className="card-title mb-2">{course}</h5>
    <p className="card-text">{text}</p>
    
    <button className="btn btn-dark">
    <Link className="nav-link text-white" to={btn}>{btnn}</Link></button>
    
   
  </div>
</div>

        </>
    )
}
export default Card;