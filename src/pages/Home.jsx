import React from 'react';
import '../App.css';
import { GiAbstract061 } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Home = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handlePlans = () => {
        navigate('/plans')
    }
    const handleSubscription = () => {
        navigate('/payment')
    }
    const handleDevelopement = () => {
        navigate('/webDevelopement')
    }
    const handleBusiness = () => {
        navigate('/business')
    }
    return (
        <div className="over-flow-hidden">
            <Navbar />
            <div className="div1 flex-column">
                <div className="bg-div position-relative">
                    <img className='homeImage w-100' src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="404 IMAGE NOT FOUND">
                    </img>
                    <div className='textImg bg-white position-absolute left-0 text-dark'>
                        <p className='font-Size fontFantacy'>Skills that helps you to be Perfect</p>
                        <p className='fontMonospace'>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
                        <div className='d-flex justify-content-end'>
                            <button  onClick={() => handlePlans()} type="button" className='btn btn-dark startsubscription w-50'>View Plans {`~`}</button>
                        </div>
                    </div>
                </div>
            <div className="headingHome bg-grey">
                <h3 className='font-Size fontFantacy ps-5 pt-4'>Can you imagine ? <br/> All the skills you need in one place ! </h3>
                <p className='fontMonospace ps-5'>OMEGACODERS make it possible for you. Now you can learn new skills at one platform </p>
            </div>
            </div>
        </div>
    )
};
export default Home;