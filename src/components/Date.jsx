import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPoo, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import fibery from '../images/fibery.jpeg';
import { useState } from "react";
import Meeting from './Meeting';
import { Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';


export const Date = ({ open, onClose }) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className=' fixed bg-gray-200 grid place-items-center backdrop-blur-sm top-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto  '>

            <Link to="/" >
                <button className='fixed top-2 right-2 mr-10 '>
                    X
                </button>
            </Link>

            <div className='relative container m-auto px-6'>
                <div className='m-auto md:w-9/12 snap-y '>
                    <div className="p-8 md:p-8">
                        <div className='rounded-xl bg-white dark:bg-gray-800  flex items-center justify-center '>
                            <div className=' md:h-screen md:flex relative rounded-sm  '>

                                <div className='md:w-1/3 bg-white sm:border-r-2 md:border-r-2 ' >
                                    <div className='flex items-center justify-center '>
                                        <img src={fibery} alt='fibery logo' className='px-2 py-2' />
                                    </div>

                                    <hr />

                                    <div className='px-8 py-8'>
                                        <h1 className='text-4xl font-bold'>Fibery Demo</h1>

                                        <div className='my-5'>
                                            <FontAwesomeIcon icon={faClock} />
                                            <span className='ml-2'>45 min</span>
                                        </div>

                                        <p className='font-medium'>Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us  or not <span><FontAwesomeIcon icon={faPoo} /></span> </p>

                                    </div>
                                </div >
                                <div className=' w-2/3 bg-white'>
                                    <div className='flex flex-col items-start justify-center'>
                                        <h1 className='text-xl font-bold ml-8 md:mt-8 md:ml-5'>Select a Date & Time</h1>
                                        <div className='flex items-center justify-center mt-3  md:ml-2 md:mr-2 md:mt-1'>
                                            <Meeting className='w-1/2' />
                                        </div>


                                        <div className='flex flex-col  mb-5'>
                                            <h1 className='text-lg font-bold  md:ml-5'>Time Zone</h1>

                                            <div className='flex items-center justify-center py-3 mb-8'>
                                                <div>
                                                    <FontAwesomeIcon className="mx-5" icon={faEarthAmericas} />
                                                </div>
                                                <div>
                                                    <span>UK, Ireland, Lisbon Time (16:50)</span>
                                                    <select name="option" >
                                                        <option >option1</option>
                                                        <option >option2</option>
                                                        <option>option3</option>
                                                        <option >option4</option>

                                                    </select>
                                                </div>
                                                <div className='mx-10 mb-5 '>

                                                    <Link to="/Details" className='bg-teal-400 text-white border-none px-3 py-3 mr-8 font-bold absolute bottom-8 right-0 w-42 rounded' onClick={() => setOpenModal(true)} >Next</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >



    )
}
