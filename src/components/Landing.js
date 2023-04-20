import Cardm from './Cardm';
import First from "../images/First.jpg";
const Landing=()=>{
    return(
        <>
            <div className="">
      
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={First} className="d-block w-100" alt="..." height="500" />
      <div className="centered">
      <h1>Hi I am Arbaaz </h1>
        <p className="center">Learn With Me</p>
        <a href="#cd"><button className="btn btn-primary cnt" >Start Learning</button></a>
      </div>
    </div>
  
  </div>
      <Cardm/>
</div>
      </div>
        </>
    )

}

export default Landing;

