import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {

  const {user,logOut}=useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(result=>{ })
    .catch(error=>console.error(error));
  }

  return (
      <div className="navbar bg-primary text-neutral-content flex justify-between ">

        <div>
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        </div>

        <div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>

        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>

        {/* <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link> */}

        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        </div>

       <div>
       {
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        }

        { user?
          <div className="mx-4 flex ">
            <img className="w-10 h-10 rounded-3xl my-1" src={user.photoURL} alt="" />
            <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Sign Out</button>
          </div>:
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        }
       </div>
    </div>
  );
};

export default Header;
