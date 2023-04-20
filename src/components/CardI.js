import Moreinfoapi from "../CrdApi/Moreinfoapi"
import Card from "./Card"

const CardI=()=>{
  return(
    <>
    {Moreinfoapi.map((self)=>{
      return(
        <Card key={self.id}
        btn ={self.click}
        btnn="CLICK HERE"
        {...self} />
      )
    })}
      
    </>
  )
}

export default CardI;