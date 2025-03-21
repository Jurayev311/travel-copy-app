import Image from 'next/image'
import React from 'react'
import profile from '../../public/assets/profile.svg'
import profile2 from '../../public/assets/profile2.svg'
import profile3 from '../../public/assets/profile3.svg'
import profile4 from '../../public/assets/profile4.svg'
import profile5 from '../../public/assets/profile5.svg'
import profile6 from '../../public/assets/profile6.svg'

const testimonials = [
    { img: profile, name: "Angelina Simple" },
    { img: profile2, name: "Viola Natalie" },
    { img: profile3, name: "Robert John K." },
    { img: profile4, name: "Anggi Nani" },
    { img: profile5, name: "Graham Suryo J" },
    { img: profile6, name: "Bagas G Natfi" }
];

const Testimonial = () => {
    return (
        <section className='mb-[99px]'>
            <div className='container mx-auto text-black px-4'>
                <div className='text-center'>
                    <h2 className='text-[#295943] text-[16px] font-bold mb-2'>Testimonial</h2>
                    <p className='text-[27.65px] text-[#000000] font-bold mb-[50px]'>What they say about us</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {testimonials.map((item, index) => (
                        <div key={index} className='hover:bg-[#43B97F] rounded hover:text-white duration-300 p-3'>
                            <div className='flex items-center gap-3 mb-[41px]'>
                                <Image alt='Testimonial profile' src={item.img} />
                                <h3 className='text-[23px] text-[#000000] font-bold'>{item.name}</h3>
                            </div>
                            <p className='text-[16px] font-normal text-[#3D3E48]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonial;

