import React from 'react';
import '../App.css';
import { MdLanguage } from "react-icons/md";
import { GiAbstract061 } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  const handlePlans = () => {
    navigate('/plans')
  }
  const handleOmegacoders = () => {
    navigate('/');
  }
  const handleBusiness = () => {
    navigate('/business')
  }
  const handleDevelopement = () =>{
    navigate('/webDevelopement')
  }

  return (
    <nav className="navbar navbar-expand-lg shadow border-bottom" style={{ height: '10vh' }}>
      <div className="xyz" id="navbarSupportedContent">
        <ul className="d-flex justify-content-around align-items-center" style={{ width: '100vw', listStyle: 'none' }}>
          <li className='d-flex '>
            <div onClick={() => handleOmegacoders()} className='circle rotate-icon'><GiAbstract061 /></div>
            <div onClick={() => handleOmegacoders()} className='companyName'>MEGACODERS</div>
          </li>
          <li className="dropdown ">
            <button class="dropbtn">Categories</button>
            <div class="dropdown-content">
              <a onClick={() => handleDevelopement()}>Development</a>
              <a onClick={() => handleBusiness()}>Business</a>
              <a href="#">IT & Software</a>
              <a href="#">Office Productivity</a>
              <a href="#">Personal Development</a>
              <a href="#">Design</a>
              <a href="#">Marketing</a>
              <a href="#">Lifestyle</a>
              <a href="#">Music</a>
            </div>
          </li>
          <li className=''>
            <div className="divSearchBox  my-lg-0">
              {/* <CiSearch /> */}
              <input className="navSearchBox shadow-none border-0 form-control " type="search" placeholder="    Search " aria-label="Search" />
              <FaSearch className='search' />
            </div>
          </li>
          <li className="" onClick={() => handlePlans()}>
            Plans & Pricing
          </li>
          <li className="dropdown ">
            <button class="dropbtn">Business</button>
            <div class="dropdown-content">
              <p className='fontFantacy pt-2 ps-3 w-100'>Tell us about your requirement and we will provide you the Best Solution.</p>
              <button className='btn border bg-dark text-white mb-2 ms-3' onClick={() => handleBusiness()}>Try OC Business</button>
            </div>
          </li>
          <li className="dropdown ">
            <button class="dropbtn">Services</button>
            <div class="dropdown-content">
              <a href="#">Design</a>
              <a href="#">Marketing</a>
              <a href="#">Lifestyle</a>
              <a href="#">Music</a>
            </div>
          </li>
          <li className=''>
            <div className='d-flex flex-row'>
              <button onClick={() => handleLogin()} className=" navLoginBtn btn-outline-success" type="button">Login</button>
              <button className="navSignupBtn bg-color-white btn-outline-success" type="submit">Sign up</button>
              <button className="cartLogo" type="button">
                <FaShoppingCart className='fs-25 m-1' />
              </button>
              <button type="button">
                <MdLanguage className='fs-25 m-1 rotate-icon' />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;