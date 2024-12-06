import React from 'react';
import '../App.css'
import { GiAbstract061, GiAbstract013 } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navbar from '../components/Navbar';


const Login = ({ login }) => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/Home')
  }

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
  const handleDevelopement = () => {
    navigate('/webDevelopement')
  }
  return (
    <div className="over-flow-hidden">
      <Navbar />
      <div className="businessdiv1 row">
        <div className="firstdiv d-flex4 col-6">
          <GiAbstract061 className='loginBigOmega rotate-icon' />
        </div>
        <div className="seconddiv col-6 pt-5">
          <div className='insideSecondDiv mt-4'>
            <div className='row hello'>
              <div className='d-flex4'>
                <h1 className='fontFantacy mt-4'>Login to continue <br /> your learning journey</h1>
              </div>
              <input type="text" className='width88 shadow mt-3 border inputBox' placeholder='Work Email' />
              <div className='d-flex4'>
                <p className='fontFantacy mt-4'>OR</p>
              </div>
              <input type="number" className='width88 shadow mt-2 border inputBox' placeholder='Phone Number' />
              <button className='btn btn-dark width88 shadow mt-5 border inputBox' >SUBMIT</button>
              <div className='d-flex4 mt-4'>
                <button className="kuchbhi border00 bg-white" type="button">
                  <FcGoogle className='fs-2' />
                </button>
                <button className="kuchbhi border00 bg-white ms-4 me-4" type="button">
                  <FaFacebook className='fs-2' />
                </button>
                <button className="kuchbhi border00 bg-white" type="button">
                  <FaApple className='fs-2' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
