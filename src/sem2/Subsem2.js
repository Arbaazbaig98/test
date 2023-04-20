
import Sem2api from "../CrdApi/Sem2api"
import React from "react"
import Card from "../components/Card"
const Subsem2=()=>{

  return(
    <>
    <div className="space"></div>
    {Sem2api.map((self)=>{
      return(
        <Card key={self.id} 
        btn ={self.click}
        btnn="Learn Here"
        {...self} />
      )
    })}
      
    </>
  )
}

export default Subsem2;