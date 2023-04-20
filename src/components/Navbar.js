import { Link } from "react-router-dom"

const Navbar=()=>{

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand nav text-white ">
        <div className="container-fluid">
                  <Link className="navbar-brand mx-2 text-white " to="/">Coding</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item it">
                <Link className="nav-link margin ps-4 text-white hvr" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-4 text-white hvr " to="/">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-4 text-white hvr " to="/Moreinfo">More Info</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-4 text-white hvr " to="/">Contact Us</Link>
              </li>
            </ul>           
          </div>
        </div>
      </nav>
    {/* //   <h1>hello</h1> */}
    {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link className="navbar-brand mx-2 text-white " to="/">Coding</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Navbar;