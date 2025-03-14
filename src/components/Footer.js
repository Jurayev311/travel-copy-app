import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#295943] text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold">travelaja</h2>
          <p className="mt-3 text-sm leading-6 max-w-[240px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, lectus magna fringilla urna, 
            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.
          </p>
          <h3 className="mt-12 font-bold">Ikuti Kami</h3>
          <div className="flex gap-3 mt-2 text-xl">
            <Link href="#"><FaInstagram className="hover:text-gray-300" /></Link>
            <Link href="#"><FaFacebookF className="hover:text-gray-300" /></Link>
            <Link href="#"><FaTwitter className="hover:text-gray-300" /></Link>
            <Link href="#"><FaDribbble className="hover:text-gray-300" /></Link>
            <Link href="#"><FaGithub className="hover:text-gray-300" /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/discover" className="hover:text-gray-300">Discover</Link></li>
            <li><Link href="/deals" className="hover:text-gray-300">Special Deals</Link></li>
            <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/community" className="hover:text-gray-300">Community</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">Blog & Articles</Link></li>
            <li><Link href="/terms" className="hover:text-gray-300">Term and Condition</Link></li>
            <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Address: Jl.Codelaras No.205A</li>
            <li>Kediri, Pare AG17</li>
            <li>Phone: 123 456 7890</li>
            <li>Email: <a href="mailto:myagungperdana@gmail.com" className="hover:text-gray-300">myagungperdana@gmail.com</a></li>
            <li>Maps: Kediri, East Java</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
