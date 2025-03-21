import Image from "next/image";
import React from "react";
import info from "../../public/assets/info1.svg"
import info2 from "../../public/assets/info2.svg"
import info3 from "../../public/assets/info3.svg"
import info4 from "../../public/assets/info4.svg"
const DiscoverInfo = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Image
          src={info}
          alt="Beach"
          width={900}
          height={400}
          className="rounded-lg w-full object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">Memorable Festivals On Bali Beach</h2>
        <p className="text-gray-600">📍 Bali, Indonesia</p>
        <p className="text-gray-700 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.
        </p>
        <p className="text-gray-700 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. 
        </p>

        {/* Qo'shimcha tasvirlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Image
            src={info2}
            alt="Mountain"
            width={400}
            height={300}
            className="rounded-lg w-full object-cover"
          />
          <Image
            src={info3}
            alt="Lake"
            width={400}
            height={300}
            className="rounded-lg w-full object-cover"
          />
        </div>

        <p className="text-gray-700 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.
        </p>
      </div>

      {/* O'ng tarafdagi manzillar ro‘yxati */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Other Destinations</h3>
          <a href="#" className="text-green-600 text-sm">See all</a>
        </div>

        {/* Kartalar responsiv qilib joylashishiga e'tibor berildi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-6">
          {[...Array(4)].map((_, i) => (
            <DestinationCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Destination Card
const DestinationCard = () => {
  return (
    <div className="relative w-full max-w-md rounded-lg overflow-hidden mb-5">
      <div className="relative w-full h-60">
        <Image
          src={info4}
          alt="Destination"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          <div>
            <h4 className="font-semibold text-lg mb-2 leading-9">
              Wakatobi Beach Is A Paradise For Coral Reefs In Indonesia
            </h4>
            <p className="text-sm opacity-90">Yogyakarta, Indonesia</p>
          </div>
          <button className="bg-[#43B97F] text-white text-sm px-4 py-2 rounded-md self-start">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverInfo;
