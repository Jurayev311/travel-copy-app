import React from 'react'
import heroImage from '../../public/assets/banner-dsco.svg'
import Image from 'next/image'

const DiscoverPage = () => {
    return (
        <>
            <section className="w-full overflow-x-hidden">
                <div className="w-full h-[250px] md:h-[320px] relative">
                    <Image
                        alt="travel image"
                        src={heroImage}
                        className="w-full h-full object-cover"
                    />
                    <div className='absolute bottom-8 left-8 w-full'>
                        <div className="max-w-screen-xl mx-auto px-4">
                            <h2 className="text-white text-4xl md:text-6xl font-bold">Discover</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 w-full overflow-x-hidden">
                <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
                    
                    <div className="md:w-2/3">
                        <p className="hidden md:block text-[100px] font-bold leading-none float-left mr-3">D</p>
                        <p className="text-base md:text-lg text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                            vel fringilla est ullamcorper eget nulla facilisi.
                        </p>
                        <p className="mt-4 text-base md:text-lg text-center md:text-left">
                            Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio
                            facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci
                            dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et
                            odio pellentesque diam volutpat commodo sed egestas egestas fringilla fau.
                        </p>
                    </div>

                    <div className="md:w-1/3 w-full overflow-hidden">
                        <iframe
                            className="w-full h-[250px] md:h-[300px] rounded-lg shadow-lg max-w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.721923417694!2d69.24122267650279!3d41.311151971290265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b847d95f15f%3A0x69c429efef6a3e3c!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1643116178265!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </section>
        </>
    )
}

export default DiscoverPage
