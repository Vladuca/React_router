import { Link, NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
}

export default Home;
