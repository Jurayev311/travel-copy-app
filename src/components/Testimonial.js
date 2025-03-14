import Image from 'next/image'
import React from 'react'
import profile from '../../public/assets/profile.svg'

const Testimonial = () => {
    return (
        <section className='mb-[99px]'>
            <div className='container mx-auto text-black'>
                <div className='text-center'>
                    <h2 className='text-[#295943] text-[16px] font-bold mb-2'>Testimonial</h2>
                    <p className='text-[27.65px] text-[#000000] font-bold mb-[50px]'>What they say about us</p>
                </div>

                <div className='grid grid-cols-3 gap-5'>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Angelina Simple</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Angelina Simple</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Angelina Simple</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Angelina Simple</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Angelina Simple</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Angelina Simple</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonial