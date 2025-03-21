import Image from 'next/image'
import React from 'react'
import { IoNavigate } from "react-icons/io5";

const destinations = [
    { img: '/assets/discover1.svg', title: 'Taman Nasional Komodo', price: 'Rp. 7,5jt', days: '7 days for trips' },
    { img: '/assets/discover2.svg', title: 'Bali Island', price: 'Rp. 6,2jt', days: '5 days for trips' },
    { img: '/assets/discover3.svg', title: 'Raja Ampat', price: 'Rp. 8,1jt', days: '10 days for trips' },
    { img: '/assets/discover4.svg', title: 'Mount Bromo', price: 'Rp. 5,5jt', days: '3 days for trips' },
    { img: '/assets/discover5.svg', title: 'Labuan Bajo', price: 'Rp. 9jt', days: '6 days for trips' },
    { img: '/assets/discover6.svg', title: 'Yogyakarta', price: 'Rp. 4,7jt', days: '4 days for trips' },
];

const Destination = () => {
    return (
        <section className='mt-[90px] mb-[99px] px-4'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='mb-2 text-[16px] font-bold text-[#295943]'>Top Destination</h2>
                    <p className='mb-[50px] text-[27.65px] font-bold text-[#3D3E48]'>Discover your love</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {destinations.map((item, index) => (
                        <div 
                            key={index} 
                            className='p-2 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white'
                        >
                            <div className='w-full overflow-hidden rounded-2xl'>
                                <Image 
                                    alt={item.title} 
                                    src={item.img} 
                                    width={360} 
                                    height={227} 
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>

                            <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48] hover:text-[#1e8449] transition-colors duration-300'>
                                {item.title}
                            </h2>

                            <div className='flex items-center justify-between mt-[22px] mb-5'>
                                <h3 className='text-[16px] font-bold text-[#295943] hover:text-[#1e8449] transition-colors duration-300'>
                                    {item.price}
                                </h3>
                                <p className="flex items-center text-gray-600">
                                    <IoNavigate className='mr-1 text-[14px]' /> {item.days}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Destination;
