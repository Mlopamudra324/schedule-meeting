import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faUserLarge, faVideo, faEarthAsia, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Confirmation = () => {
    return (
        <div className="fixed bg-gray-200 grid place-items-center backdrop-blur-sm top-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto">
            <Link to="/" >
                <button className='fixed top-2 right-2 mr-10 '>
                    X
                </button>
            </Link>
            <div className="relative container m-auto px-3">
                <div className="m-auto md:w-10/12 ">
                    <div className="p-2 md:p-8">
                        <div className="md:pr-4 md:w-max rounded-lg bg-white  shadow-xl  flex items-center justify-center mr-5 ml-3 mb-5">
                            <div className='flex items-cente justify-center h-full' >
                                <div >
                                    <div className='flex items-center justify-center '>
                                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww" alt="user" className='h-24 w-24 rounded-full object-cover mt-5 mb-6' />
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faCircleCheck} />

                                        <h1 className='text-3xl ml-3 mt-2 md:text-3xl font-bold tracking-wide md:ml-3'>You are scheduled</h1>
                                    </div>

                                    <span className='text-lg font-normal flex items-center justify-center ml-5 mr-2'>A calender invitation has been sent to your email address.</span>

                                    <div className='w-10/12 border-2 rounded-lg px-3 pt-2 mt-2 mb-5 ml-8 md:px-6 md:pt-5 md:mt-1 md:mb-7 md:ml-12'>
                                        <h1 className='text-2xl font-bold'>Fibery Demo</h1>

                                        <div className='my-2'>
                                            <FontAwesomeIcon icon={faUserLarge} className='text-slate-400' />
                                            <span className='text-slate-400 text-lg font-bold ml-2'> Polina Zenevich</span>
                                        </div>
                                        <div className='my-2'>
                                            <FontAwesomeIcon icon={faCalendar} className='text-slate-400' />
                                            <span className='text-slate-400 text-lg font-bold ml-2'>12:00 - 12.45, Thursday, November 30, 2023</span>
                                        </div>

                                        <div className='my-2'>
                                            <FontAwesomeIcon icon={faEarthAsia} className='text-slate-400' />
                                            <span className='text-slate-400 text-lg font-bold ml-2'>UK, Ireland, Lisbon Time</span>
                                        </div>
                                        <div className='my-2'>
                                            <FontAwesomeIcon icon={faVideo} className='text-slate-400' />
                                            <span className='text-slate-400 text-lg font-bold ml-2'> Web conferencing details to follow.</span>
                                        </div>

                                    </div>

                                    <hr />

                                    <div className=' mt-2 ml-5 md:mt-5 md:ml-8'>
                                        <h3 className='font-bold text-lg  md:mb-3 md:ml-5'>Schedule your own meetings with Calendly for free</h3>

                                        <span className='text-slate-500 text-lg font-medium md:ml-5'>Eliminate the back-and-forth emails for finding time</span>

                                        <div className=' mt-2 md:mt-3'>
                                            <button className='border-2 w-64 rounded-s-full rounded-e-full border-slate-500 px-2 py-2 mr-5 mb-3 md:px-3 md:py-3 md:mr-8 font-bold  bottom-5 right-0 w-42 text-slate-500 '>

                                                Sign up with Google
                                            </button>

                                            <button className='border-2 w-64 rounded-s-full rounded-e-full border-slate-500 px-3 py-3 mr-8 font-bold  bottom-5 right-0 w-42  text-slate-500'>

                                                Sign up with Microsoft
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center mt-4 mb-2 '>
                                        <h1 className='text-teal-400'>Sign up with work email</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

