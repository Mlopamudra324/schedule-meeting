import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPoo, faCalendar, faEarthAsia, faCarrot, faChildren, faPeopleGroup, faMountain, faBowlFood, faFaceSmile, faPalette, faLaptop, faBomb, faQuestion, faBook, faGem, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import fibery from '../images/fibery.jpeg';

import { Link } from "react-router-dom";


export const Details = () => {

    const [checked, setChecked] = useState([]);

    const [formValues, setFormValues] = useState({
        name: "",
        email: ""
    });
    const [records, setRecords] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        setRecords([...records, formValues]);
        setFormValues({
            name: "",
            email: ""
        });
    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const [, setOpenModal] = useState(false)

    return (
        <div className=' fixed bg-gray-200 grid place-items-center backdrop-blur-sm top-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto '>
            <Link to="/" >
                <button className='fixed top-2 right-2 mr-10 '>
                    X
                </button>
            </Link>
            <div className='relative container m-auto px-6'>
                <div className='m-auto md:w-9/12 snap-y'>
                    <div className="p-8 md:p-8">
                        <div className='rounded-lg bg-white  flex items-center justify-center  '>
                            <div className='md:flex relative rounded-sm '>

                                <div className=' sm:1/3 md:w-1/3 bg-white sm:border-r-2  md:border-r-2 ' >

                                    <div className='w-full md:flex md:items-center md:justify-center md:top-0  '>
                                        <Link to="/date" >
                                            <button className='rounded-full border-2 w-7 h-7 sm:ml-7'>
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                            </button>
                                        </Link>

                                        <img src={fibery} alt='fibery logo' className='flex md:px-2 md:py-2' />
                                    </div>
                                    <hr />

                                    <div className='px-8 py-5'>

                                        <h1 className='text-4xl font-bold'>Fibery Demo</h1>

                                        <div className='my-5'>
                                            <FontAwesomeIcon icon={faClock} />
                                            <span className='ml-2'>45 min</span>
                                        </div>
                                        <div className='my-5'>
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <span className='ml-2'>12:00 - 12.45, Thursday, November 30, 2023</span>
                                        </div>
                                        <div className='my-5'>
                                            <FontAwesomeIcon icon={faEarthAsia} />
                                            <span className='ml-2'>UK, Ireland, Lisbon Time</span>
                                        </div>


                                        <p className='font-medium'>Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us  or not <span><FontAwesomeIcon icon={faPoo} /></span> </p>

                                    </div>
                                </div >
                                <div className='w-2/3 bg-white ml-7'>
                                    <h1 className='text-2xl font-bold my-2 ml-2'>Enter Details</h1>

                                    <div className='ml-2' >
                                        <h3 className='font-bold mb-2'>Name <span>*</span></h3>

                                        <input
                                            value={formValues.name}
                                            onChange={(e) =>
                                                setFormValues({ ...formValues, name: e.target.value })
                                            }
                                            className='w-3/4 box-border border-2 border-slate-400 rounded h-8 mb-2'
                                        />

                                    </div>
                                    <div className='ml-2'>
                                        <h3 className='font-bold mb-2'>Email <span>*</span></h3>

                                        <input
                                            value={formValues.email}
                                            onChange={(e) =>
                                                setFormValues({ ...formValues, email: e.target.value })
                                            }
                                            className='w-3/4 box-border border-2 border-slate-400 rounded h-8 mb-2'

                                        />
                                    </div>

                                    <div className='ml-4 mt-2 ml=2'>
                                        <button className='w-32 h-10 border-4 border-cyan-400 rounded-s-full rounded-e-full ' type='submit' onSubmit={(e) => handleSubmit(e)}>Add Guests</button>
                                    </div>

                                    <div className='mt-2 ml-4'>
                                        <h3 className='font-bold'>I want Fibery to work for: <span>*</span></h3>

                                        <div>
                                            <ul>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faCarrot} className='mr-2' />
                                                        <span className='font-medium'>Myself</span>
                                                    </label>
                                                </li>

                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faChildren} className='mr-2' />
                                                        <span className='font-medium'>0-10 people</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faChildren} className='mr-2' />
                                                        <span className='font-medium'>10-50 people</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faPeopleGroup} className='mr-2' />
                                                        <span className='font-medium'>50+ people</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='mt-4 ml-4'>
                                        <h3 className='font-bold'>You are more about <span>*</span></h3>

                                        <div>
                                            <ul>
                                                <li className='mb-1'>
                                                    < label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faMountain} className='mr-2' />
                                                        <span className='font-medium'>Leadership</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faBowlFood} className='mr-2' />
                                                        <span className='font-medium'>Consulting</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faFaceSmile} className='mr-2' />
                                                        <span className='font-medium'>Product Management</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faPalette} className='mr-2' />
                                                        <span className='font-medium'>Design</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faLaptop} className='mr-2' />
                                                        <span className='font-medium'>Engineering</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faBomb} className='mr-2' />
                                                        <span className='font-medium'>Sales</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faBowlFood} className='mr-2' />
                                                        <span className='font-medium'>Marketing</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faGem} className='mr-2' />
                                                        <span className='font-medium'>Human Resources</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faBook} className='mr-2' />
                                                        <span className='font-medium'>Education</span>
                                                    </label>
                                                </li>
                                                <li className='mb-1'>
                                                    <label className='text-lg'>
                                                        <input type='checkbox' onChange={handleCheck} className='w-4 h-4 mr-2' />
                                                        <FontAwesomeIcon icon={faQuestion} className='mr-2' />
                                                        <span className='font-medium'>Something else</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='mt-3 ml-4 mb-7'>
                                        <div>
                                            <h3 className='font-bold mb-2'>Please, share anything that will help prepare for our meeting</h3>
                                            <textarea rows="3" cols="50" className='border-2 rounded-lg border-slate-400' />
                                        </div>

                                        <div>
                                            <h3 className='font-bold'>Please, share with us the name of your fibery workspace (if any)</h3>
                                            <input type="text" className='w-3/4 box-border border-2 border-slate-400 rounded h-9 mb-5' />
                                        </div>
                                        <div>

                                            <Link to="/confirmation" className='bg-cyan-600 px-3 py-3 mr-8 font-medium     right-0 w-42 rounded-s-full rounded-e-full text-white text-base' onClick={() => setOpenModal(true)} >Schedule Event</Link>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>


    )
}
