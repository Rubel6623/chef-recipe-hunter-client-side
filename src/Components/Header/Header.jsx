import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

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

        {user ? (
          <div className="mx-4 flex ">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-toggle="tooltip"
              data-te-placement="top"
              data-te-ripple-init
              data-te-ripple-color="light"
              title={user.displayName}
            >
              <img
                className="w-10 h-10 rounded-3xl"
                src={user.photoURL}
                alt=""
              />
            </button>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost normal-case text-xl"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
