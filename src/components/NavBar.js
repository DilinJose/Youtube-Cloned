import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <nav class="navbar navbar-light bg-light mb-3">
        <Link className="nav-text" to={"/"}>
          Youtube
        </Link>
      </nav>
    </div>
  );
};
export default NavBar;
