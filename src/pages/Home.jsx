import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {

    return (

        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-4 sm:gap-2.5'>
                <h1 className='text-2xl sm:text-4xl mb-4 sm:mb-8 font-bold text-center'>Schedule Your Meeting Now</h1>

                <Link to="date" className='
            flex
            items-center
            justify-center
            border-none
            text-base sm:text-2xl
            px-4 sm:px-6
            py-3 sm:py-5
            bg-emerald-300
            text-white
            font-bold
            cursor-pointer
            rounded-md
            '>
                    New Meeting
                </Link>
            </div>
        </div>

    )
}

// onClick={() => setOpenModal(false)} 