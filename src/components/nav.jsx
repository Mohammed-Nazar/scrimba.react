import logo from "./gg.png";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <a href=""><div>
        <img src={logo} width="40px" alt="hhh"/>
          <h1><span className="brandName">M</span>N<span className="brandName">M</span></h1>
        </div></a>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
    </ul>
      </nav>
    </>
  );
}

export default Nav;
