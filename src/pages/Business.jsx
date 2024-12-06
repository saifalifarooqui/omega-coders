import React from 'react';
import '../App.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Navbar from '../components/Navbar';


const Business = () => {
    return (
        <div className="over-flow-hidden">
            <Navbar />
            <div className="businessdiv1 row">
                <div className="firstdiv col-6">
                    <div className="heading">
                        <h1 className='fontFantacy '>Get your demo</h1>
                        <h5>Tell us your needs and we'll start on a custom plan to drive results.</h5>
                    </div>
                    <div className="heading2 pt-5 ">
                        <h5 className='fw-bold'>With OmegaCoders as your learning partner, you can:</h5>

                        <div className='d-flex flex-row align-item-center'>
                            <IoIosCheckmarkCircleOutline className='colorGreen mt-3' /><p className='mt-3 ms-3'>Train your entire workforce with over 27,000+ courses in 15 languages.</p>
                        </div>
                        <div className='d-flex flex-row align-item-center'>
                            <IoIosCheckmarkCircleOutline className='colorGreen mt-3' /><p className='mt-3 ms-3'>Prep employees for over 200 industry-recognized certification exams.</p>
                        </div>
                        <div className='d-flex flex-row align-item-center'>
                            <IoIosCheckmarkCircleOutline className='colorGreen mt-3' /><p className='mt-3 ms-3'>Develop highly skilled tech teams in risk-free practice environments.</p>
                        </div>
                        <div className='d-flex flex-row align-item-center'>
                            <IoIosCheckmarkCircleOutline className='colorGreen mt-3' /><p className='mt-3 ms-3'>Identify emerging skills gaps, learning trends, and industry benchmarks.</p>
                        </div>
                        <div className='d-flex flex-row align-item-center'>
                            <IoIosCheckmarkCircleOutline className='colorGreen mt-3' /><p className='mt-3 ms-3'>Integrate content with your existing learning management system.</p>
                        </div>
                        <h5 className='fw-bold mt-4'>Trusted by over 10,000 companies and millions of lerners around the world.</h5>
                    </div>
                </div>
                <div className="seconddiv col-6">
                    <div className='insideSecondDiv'>
                        <div className='row hello'>

                            <input type="text" className='col-6 border shadow mt-5 width41 inputBox' placeholder='First Name' />
                            <input type="text" className='col-6 ms-3 shadow mt-5 border width41 inputBox' placeholder='Second Name' />
                            <input type="text" className='width88 shadow mt-3 border inputBox' placeholder='Work Email' />
                            <input type="number" className='width88 shadow mt-3 border inputBox' placeholder='Phone Number' />
                            <select className='col-6 width88 mt-3 shadow border inputBox'>
                                <option value="volvo">Where are you located</option>
                                <option value="saab">India</option>
                                <option value="audi">Iraq</option>
                                <option value="audi">Iran</option>
                                <option value="audi">Saudi Arabia</option>
                                <option value="opel">United State</option>
                                <option value="audi">United Kingdom</option>
                            </select>
                            <input type="text" className='width88 shadow mt-3 border inputBox' placeholder='Company Name' />
                            <select className='col-6 width41 mt-3 shadow border inputBox'>
                                <option value="volvo">Company Size</option>
                                <option value="audi">Contractor/Freelancer</option>
                                <option value="saab">1-99</option>
                                <option value="audi">100-200</option>
                                <option value="audi">200-500</option>
                                <option value="audi">500-1000</option>
                                <option value="opel">1000-5000</option>
                            </select>
                            <select className='col-6 width41 ms-3 mt-3 shadow border inputBox'>
                                <option value="volvo">Number of Learners</option>
                                <option value="saab">2000+</option>
                                <option value="audi">1500+</option>
                                <option value="audi">1000+</option>
                                <option value="audi">500+</option>
                                <option value="opel">100+</option>
                                <option value="audi">10+</option>
                            </select>
                            <input type="text" className='col-6 border shadow mt-3 width41 inputBox' placeholder='Job Title' />
                            <select className='col-6 width41 ms-3 mt-3 shadow border inputBox'>
                                <option value="volvo">Job Level</option>
                                <option value="saab">C-Level</option>
                                <option value="audi">VP</option>
                                <option value="audi">Manager</option>
                                <option value="audi">Director</option>
                                <option value="opel">SR</option>
                                <option value="audi">Individual Contributor</option>
                            </select>
                            <input type="text" className='width88 shadow mt-3 border inputBox' placeholder='Tell us more about yourself' />
                            <button className='btn btn-dark width88 shadow mt-3 border inputBox' >SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Business;