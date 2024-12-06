import React from 'react';
import { GiAbstract061 } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { IoMdContacts, IoIosContact } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Navbar from '../components/Navbar';


const Plans = () => {
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
    const handleBusiness = () => {
        navigate('/business')
    }
    const handleDevelopement = () => {
        navigate('/webDevelopement')
    }
    return (
        <div className="over-flow-hidden">
            <Navbar />
            <div className='xxyyzz'>
                <div className='plansHeading bg-white'>
                    <h1 className='ud-heading-serif-xxxl ud-text-responsive plan-comparison-header_main-title__Dz_2s'>Choose a suitable plan for your success !</h1>
                    <h6>Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.</h6>
                </div>
                <div className='mainDiv row bg-white'>
                    <div className='plansDivFirst  col-4 plansDiv shadow'>
                        <div className='inside1 shadow'>
                            <h3 className='fontFantacy'>Personal Plan</h3>
                            <h6 className='fontMonospace'>For you</h6>
                            <div className='people'>
                                <IoIosContact /><h6 className="mb-0 ms-1">Individual</h6>
                            </div>
                        </div>
                        <div className='inside2 shadow'>
                            <h6 className='fontFantacy'>Starting at INR 500/- per month</h6>
                            <h6 className='fontMonospace'>Billed monthly or annually. Cancel anytime.</h6>
                            <button onClick={() => handleSubscription()} className=" startsubscription bg-color-black" type="button">Start subscription {`>`}  </button>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Access to 12,000+ top courses</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Goal-focused recommendations</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> AI-powered coding exercises</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Certification prep</h6>
                        </div>
                    </div>  <div className='plansDivFirst col-4 plansDiv shadow marginLeft-15 marginRight-15'>
                        <div className='inside1'>
                            <h3 className='fontFantacy'>Team Plan</h3>
                            <h6 className='fontMonospace'>For your team</h6>
                            <div className='people'>
                                <IoMdContacts /><h6 className="mb-0 ms-1">2 to 20 people</h6>
                            </div>
                        </div>
                        <div className='inside2 shadow'>
                            <h6 className='fontFantacy'>INR 1200/- a month per user</h6>
                            <h6 className='fontMonospace'>Billed annually. Cancel anytime.</h6>
                            <button onClick={() => handleSubscription()} className=" startsubscription bg-color-black" type="button">Start subscription {`>`}  </button>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Access to 12,000+ top courses</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Goal-focused recommendations</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> AI-powered coding exercises</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Certification prep</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' />
                                Analytics and adoption reports</h6>
                        </div>

                    </div>
                    <div className='plansDivFirst bg-color-black col-4 plansDiv shadow'>
                        <div className='inside1'>
                            <h3 className='fontFantacy'>Organisational Plan</h3>
                            <h6 className='fontMonospace'>For your whole Organisation</h6>
                            <div className='people'>
                                <IoMdContacts /><h6 className="mb-0 ms-1">More than 20 people</h6>
                            </div>
                        </div>
                        <div className='inside2 shadow bg-white'>
                            <h6 className='fontFantacy'>Contact sales  for pricing</h6>
                            <h6 className='fontMonospace'>Billed annually. Cancel anytime.</h6>
                            <button onClick={() => handleSubscription()} className=" startsubscription bg-color-black" type="button">Start Subscription {`>`}  </button>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Certification prep</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Customizable content</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> AI-powered coding exercises</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Goal-focused recommendations</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Access to 12,000+ top courses</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Advanced analytics and insights</h6>
                            <h6><IoIosCheckmarkCircleOutline className='colorGreen' /> Dedicated customer success team </h6>
                        </div>
                    </div>
                </div>
                <div className='plansPageEnd bg-color-black border-1px pt-3 font-Size d-flex4'>
                    <p>Brilliant students choose OmegaCoders to built in-demand career skills.</p>
                </div>
                <div className='plansPageEnd bg-color-black height padding-right padding-top row d-flex4'>
                    <p className='col-4'>OmegaCoders Business<br />Teach on OmeraCoders <br />Get the app <br />About us <br />Contact us</p>
                    <p className='col-4'>Careers <br />Blog <br />Help and Support <br />Affilliate <br />Investors</p>
                    <p className='col-4'>Terms <br />Privacy policy <br />Cookie settings<br />Accessibility statements</p>
                </div>
                <div className='plansPageEnd bg-color-black d-flex justify-content-start align-item-center flex-row font-Size pb-3'>
                    <Link to="/login" className='xyz1 circle rotate-icon'><GiAbstract061 /></Link>
                    <Link to="/login" className='text-decoration-none color-white'>MEGACODERS</Link>
                </div>
            </div>
        </div>
    )
}
export default Plans;