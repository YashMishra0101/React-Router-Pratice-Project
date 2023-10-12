import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';


function NavBar({ login, isLogin }) {

  const logOutHandler=()=>{
    isLogin(false)
    toast.success('LogOut Successfully', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }
  
  
  return (
    <div>
      <nav>
        <ul className="flex justify-around bg-black text-white mt-6 mb-7">
          <li>
            <Link to="/">
              <img src={Logo} />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>

          <li>
            {!login && (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </li>

          <li>
            {!login && (
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            )}
          </li>

          <li>
            {login && (
              <Link to="/login" onClick={logOutHandler}>
                <button>LogOut</button>
              </Link>
            )}
          </li>

          <li>
            {login && (
              <Link to="/dashboard">
                <button>DashBoard</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
