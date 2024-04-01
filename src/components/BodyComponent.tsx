import React from 'react'
import Image from "next/image";
import bannerImage from "../assets/images/image-1.png";
import { FaArrowRight } from "react-icons/fa";

const BodyComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white md:p-32">
        <div className="md:w-1/2">
          <p className="mt-4 mb-2 ml-2 text-gray-500 text-center md:text-left text-xs">
            A B O U T — P E R S O N A L
          </p>
          <h1 className="text-gray-800 text-2xl md:text-6xl font-semibold text-center md:text-left">
            <span className="font-light text-2xl md:text-6xl">¡Hello! </span>I’m
            Angela Smith
          </h1>
          <p className="mt-4 m-4 md:mt-4 md:ml-0 md:mr-16 md:mb-8 text-gray-700 text-base md:text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="hidden md:flex bg-black text-white py-3 px-5 md:py-5 md:px-7 rounded-xl items-center mt-4 text-sm">
            Get Started <FaArrowRight className="ml-2 bounce-right" />
          </button>
        </div>
        <div className="md:w-1/2 w-full p-4 relative">
          <Image
            src={bannerImage}
            alt="image"
            layout="responsive"
            objectFit="cover"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <button className="md:hidden bg-black text-white py-3 px-5 md:py-5 md:px-7 rounded-xl flex items-center mt-4 text-sm w-11/12 justify-center">
          Get Started <FaArrowRight className="ml-2 bounce-right" />
        </button>
      </div>
  )
}

export default BodyComponent