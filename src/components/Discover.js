import Image from 'next/image'
import React from 'react'
import discover from '../../public/assets/discover1.svg'
import { IoNavigate } from "react-icons/io5";

const Discover = () => {
    return (
        <section className='mt-[90px] mb-[99px]'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='mb-2 text-[16px] font-bold text-[#295943]'>Top Destination</h2>
                    <p className='mb-[50px] text-[27.65px] font-bold text-[#3D3E48]'>Discover your love</p>
                </div>

                <div className='grid grid-cols-3 gap-5'>
                <div className='p-1.5 rounded-2xl shadow-lg'>
                    <div className='flex items-center justify-center'>
                        <Image alt='travel image' src={discover} width={360} height={227}/>
                    </div>
                    <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48]'>Taman Nasional Komodo</h2>
                    <div className='flex items-center justify-between mt-[22px] mb-5'>
                        <h3 className='text-[16px] font-bold text-[#295943]'>Rp. 7,5jt</h3>
                        <p><IoNavigate className='inline-block mr-1 text-[14px] font-normal' /> 7 days for trips</p>
                    </div>
                </div>
                <div className='p-1.5 rounded-2xl shadow-lg'>
                    <div className='flex items-center justify-center'>
                        <Image alt='travel image' src={discover} width={360} height={227}/>
                    </div>
                    <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48]'>Taman Nasional Komodo</h2>
                    <div className='flex items-center justify-between mt-[22px] mb-5'>
                        <h3 className='text-[16px] font-bold text-[#295943]'>Rp. 7,5jt</h3>
                        <p><IoNavigate className='inline-block mr-1 text-[14px] font-normal' /> 7 days for trips</p>
                    </div>
                </div>
                <div className='p-1.5 rounded-2xl shadow-lg'>
                    <div className='flex items-center justify-center'>
                        <Image alt='travel image' src={discover} width={360} height={227}/>
                    </div>
                    <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48]'>Taman Nasional Komodo</h2>
                    <div className='flex items-center justify-between mt-[22px] mb-5'>
                        <h3 className='text-[16px] font-bold text-[#295943]'>Rp. 7,5jt</h3>
                        <p><IoNavigate className='inline-block mr-1 text-[14px] font-normal' /> 7 days for trips</p>
                    </div>
                </div>
                <div className='p-1.5 rounded-2xl shadow-lg'>
                    <div className='flex items-center justify-center'>
                        <Image alt='travel image' src={discover} width={360} height={227}/>
                    </div>
                    <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48]'>Taman Nasional Komodo</h2>
                    <div className='flex items-center justify-between mt-[22px] mb-5'>
                        <h3 className='text-[16px] font-bold text-[#295943]'>Rp. 7,5jt</h3>
                        <p><IoNavigate className='inline-block mr-1 text-[14px] font-normal' /> 7 days for trips</p>
                    </div>
                </div>
                <div className='p-1.5 rounded-2xl shadow-lg'>
                    <div className='flex items-center justify-center'>
                        <Image alt='travel image' src={discover} width={360} height={227}/>
                    </div>
                    <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48]'>Taman Nasional Komodo</h2>
                    <div className='flex items-center justify-between mt-[22px] mb-5'>
                        <h3 className='text-[16px] font-bold text-[#295943]'>Rp. 7,5jt</h3>
                        <p><IoNavigate className='inline-block mr-1 text-[14px] font-normal' /> 7 days for trips</p>
                    </div>
                </div>
                <div className='p-1.5 rounded-2xl shadow-lg'>
                    <div className='flex items-center justify-center'>
                        <Image alt='travel image' src={discover} width={360} height={227}/>
                    </div>
                    <h2 className='mt-5 font-bold text-[19.2px] text-[#3D3E48]'>Taman Nasional Komodo</h2>
                    <div className='flex items-center justify-between mt-[22px] mb-5'>
                        <h3 className='text-[16px] font-bold text-[#295943]'>Rp. 7,5jt</h3>
                        <p><IoNavigate className='inline-block mr-1 text-[14px] font-normal' /> 7 days for trips</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Discover