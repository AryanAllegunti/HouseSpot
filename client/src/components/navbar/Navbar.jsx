import './Navbar.scss';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


function Navbar() {
  const [open, setOpen] = useState(false);
  
  const {currentUser} =useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>SiyasiEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
       {currentUser ? (
        <div className='user'>
        <img src={currentUser.avatar || "/noavatar.png"}
         alt="" />
         <span>{currentUser.username}</span>
         <Link to="/profile" className='profile'>
           <div className='notification'>3</div>
           <span>Profile</span>
         </Link>
        </div>
       ):(   //if it is not signed in then down wala or else upper wala 
        <>
         <Link to="/login">Sign in</Link>
         <Link to="/register" className="register">Sign up</Link>
        </>
       )}
        <div className="menuicon">
          <img src="./menu.png" alt="Menu" onClick={() => setOpen(prev => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
