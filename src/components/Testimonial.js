import Image from 'next/image'
import React from 'react'
import profile from '../../public/assets/profile.svg'
import profile2 from '../../public/assets/profile2.svg'
import profile3 from '../../public/assets/profile3.svg'
import profile4 from '../../public/assets/profile4.svg'
import profile5 from '../../public/assets/profile5.svg'
import profile6 from '../../public/assets/profile6.svg'

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
                            <Image alt='Testimonial profile' src={profile2} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Viola Natalie</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile3} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Robert John K.</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile4} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Anggi Nani</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile5} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Graham Suryo J</h3>
                        </div>
                        <p id='Testimonialp' className='text-[16px] font-normal text-[#3D3E48]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                    </div>
                    <div className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                        <div className='flex items-center gap-3 mb-[41px]'>
                            <Image alt='Testimonial profile' src={profile6} />
                            <h3 id='Testimonialh' className='text-[23px] text-[#000000] font-bold'>Bagas G Natfi</h3>
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