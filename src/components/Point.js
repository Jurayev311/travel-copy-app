"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import travel1 from "../../public/assets/travel1.png";
import travel2 from "../../public/assets/travel2.png";
import travel3 from "../../public/assets/travel3.png";

const Point = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  //sahifa 40% ko'ringanda countUp ishlashi uchun yozilgan kod
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-[99px] flex flex-wrap items-center justify-center p-10 text-[#3D3E48]"
    >
      <div className="container mx-auto flex items-center justify-center flex-wrap gap-[30px] max-w-6xl">
        <div className="relative flex items-center justify-center w-[350px] h-[448px]">
          <div className="absolute top-0 left-[-195px] w-[250px] h-[448px] rounded-[95px] overflow-hidden shadow-md transition-transform duration-300 ease-in-out group">
            <Image
              src={travel1}
              alt="mountains"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-white duration-300"
            />
          </div>

          <div className="absolute bottom-0 left-[30px] w-[180px] h-[332px] rounded-[95px] overflow-hidden shadow-lg transition-transform duration-300 ease-in-out group">
            <Image
              src={travel2}
              alt="water"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-white duration-300"
            />
          </div>

          <div className="absolute top-[-30px] right-0 w-[200px] h-[311px] rounded-[95px] overflow-hidden shadow-lg transition-transform duration-300 ease-in-out group">
            <Image
              src={travel3}
              alt="bridge"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-white duration-300"
            />
          </div>
        </div>

        <div className="max-w-md">
          <h3 className="text-[#295943] font-semibold">Travelers Point</h3>
          <h2 className="text-3xl font-bold my-3">
            We help to find your dream place
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            rhoncus dolor purus non enim praesent elementum facilisis.
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-left">
            <div>
              <h2 className="text-[#295943] text-2xl font-bold">
                {inView && <CountUp start={0} end={100} duration={3} />}+
              </h2>
              <p className="text-gray-500">Holiday Package</p>
            </div>
            <div>
              <h4 className="text-[#295943] text-2xl font-bold">
                {inView && <CountUp start={0} end={172} duration={3} />}
              </h4>
              <p className="text-gray-500">Hotels</p>
            </div>
            <div>
              <h4 className="text-[#295943] text-2xl font-bold">
                {inView && <CountUp start={0} end={68} duration={3} />}
              </h4>
              <p className="text-gray-500">Elite Transportation</p>
            </div>
            <div>
              <h4 className="text-[#295943] text-2xl font-bold">
                {inView && <CountUp start={0} end={32} duration={3} />}M+
              </h4>
              <p className="text-gray-500">we help to find your dream place</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Point;
