import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { GiAbstract061 } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { FaSearch, FaShoppingCart, FaGooglePay, FaApplePay, FaAmazonPay } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";


const Payment = () => {
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
    return (
        <div className="over-flow-hidden">
            <Navbar />
            <div className='div1Payment bg-grey'>
                <div className='paymentForm bg-white border-grey shadow '>
                    <h4 className='margin-left-37 fontFantacy pt-4'>Payment Information</h4>
                    <div className='d-flex align-item-center justify-content-center pt-3'>
                        <p className='circle text-dark ps-4 fon'><CiCreditCard1 /></p>
                        <p className='circle ps-5 text-dark'><FaGooglePay /></p>
                        <p className='circle ps-5 text-dark'><FaApplePay /></p>
                    </div>
                    <div className='d-flex align-item-center justify-content-center pt-3 '>
                        <div >
                            <label className='ps-2 fontMonospace'>Enter your name</label>
                            <input type="text" className="form-control " placeholder="Alexender Rayback" />
                        </div>
                        <div className='ps-5'>
                            <label className='ps-2 fontMonospace'>Card Number</label>
                            <input type="number" className="form-control" placeholder="1124 2254 2565 3356" />
                        </div>
                    </div>
                    <div className='d-flex align-item-center justify-content-center pt-4 '>
                        <div >
                            <label className='ps-2 fontMonospace'>Expire Date</label>
                            <input type="number" className="form-control " placeholder="23/12/2000" />
                        </div>
                        <div className='ps-5'>
                            <label className='ps-2 fontMonospace'>CVV</label>
                            <input type="cvv" className="form-control" placeholder="300" />
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-dark w-25 mt-5 margin-left-37">Pay</button>
                </div>
            </div>
        </div>
    )
}
export default Payment;