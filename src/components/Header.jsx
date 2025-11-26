import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/"}>Home</NavLink>
    </>
  );
}

export default Header;
