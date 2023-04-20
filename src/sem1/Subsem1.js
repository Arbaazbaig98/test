
import Sem1api from "../CrdApi/Sem1api"
import React from "react"
import Card from "../components/Card"
const Subsem1=()=>{

  return(
    <>
    <div className="space"></div>
    {Sem1api.map((self)=>{
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

export default Subsem1;