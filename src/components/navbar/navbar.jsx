import "./navbar.css"

function Navbar(){
return (
    <div className="header">
     
<nav className="navbar navbar-expand-lg navbar-light" style={{background: "#9381FF"}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/">ऋग्वेदः</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a href="/" className="nav-link css-button" h>
	      <span class="css-button-icon"><i class="fa fa-home"></i></span>
	      <span class="css-button-text">HOME</span>
        <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link css-button" h>
	      <span class="css-button-icon"><i class="fa fa-address-card"></i></span>
	      <span class="css-button-text">About US</span>
        </a>
      </li>
      
      <li className="nav-item">
      <a href="/contents" className="nav-link css-button" h>
	      <span class="css-button-icon"><i class="fa fa-headphones"></i></span>
	      <span class="css-button-text">Listen to Veda</span>
        </a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
     
    </div>
);
}

export default Navbar;