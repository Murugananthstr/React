import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <Link to="/signout" className="nav-link">
        Log Out
      </Link>
      <Link to="/Signup" className="nav-link">
        Sign Up
      </Link>
      <Link to="/Signin" className="nav-link">
        Sign In
      </Link>
      <Link to="/Blogs" className="nav-link">
        Blog
      </Link>
    </>
  );
};

export default NavItems;
