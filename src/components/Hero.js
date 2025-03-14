import Image from 'next/image'
import hero from '../../public/assets/hero.svg'
import React from 'react'
import { LuSearch } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="relative w-full h-[780px]">
            <Image
                src={hero}
                alt="Travel image"
                fill
                className="object-cover"
            />

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center mb-2.5 text-white'>
                <h2 className='text-5xl font-normal mb-4'>Explore the world with a smile</h2>
                <p className='mb-16 max-w-[682px] text-[16px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,</p>

                <div className="flex bg-white p-2 rounded-lg shadow-md w-full max-w-3xl">
                    <div className="relative flex-1">
                        <IoLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="City or Destination"
                            className="w-full p-2 pl-10 outline-none text-gray-700"
                        />
                    </div>
                    <input
                        type="date"
                        className="flex-1 p-2 outline-none text-gray-700 border-l"
                    />
                    <input
                        type="number"
                        placeholder="Person"
                        className="flex-1 p-2 outline-none text-gray-700 border-l"
                    />
                    <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        Find Trip Now
                        <LuSearch className='text-2xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
