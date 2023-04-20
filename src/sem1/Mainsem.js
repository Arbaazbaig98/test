
import SylS1 from "../CrdApi/SylS1"
import React from "react"
import Card from "../components/Card"
const Mainsem=()=>{

  return(
    <>
    <div className="space"></div>
    {SylS1.map((self)=>{
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

export default Mainsem;