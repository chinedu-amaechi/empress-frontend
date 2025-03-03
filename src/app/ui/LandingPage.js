// src/app/ui/LandingPage.js

"use client";
import React from "react";
import Image from "next/image";
import ProductImg from "../../../public/product.png";
import ProfilePic from "../../../public/profile-pic.png";
import LandingBg from "../../../public/landing_page_bg.jpg";
import { FiTarget } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuWrench } from "react-icons/lu";
import { BiStore } from "react-icons/bi";
import { IoHammerOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function LandingPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: ProductImg,
      desc: "Elegant handcrafted bracelet.",
    },
    {
      id: 2,
      name: "Product 2",
      image: ProductImg,
      desc: "Elegant handcrafted bracelet.",
    },
    {
      id: 3,
      name: "Product 3",
      image: ProductImg,
      desc: "Elegant handcrafted bracelet.",
    },
    {
      id: 4,
      name: "Product 4",
      image: ProductImg,
      desc: "Elegant handcrafted bracelet.",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Introduction Container */}
      <div
        id="introduction"
        className="flex flex-col text-white text-xl bg-no-repeat bg-cover bg-center justify-start items-center w-dvh h-[91vh] bg-black/20 bg-blend-overlay"
        style={{
          backgroundImage: `url(${LandingBg.src})`,
        }}
      >
        <h1 className="mt-[150px] p-4 text-7xl font-bold tracking-widest">
          EMPRESS
        </h1>
        <p className="w-1/2 text-center">
          Welcome to Empress! Discover handcrafted bracelets that add timeless
          elegance to any look. Find your perfect piece today!
        </p>
        <Link
          href="/collections"
          className="group mt-[200px] px-6 py-3 bg-yellow-400 font-semibold text-gray-50 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center relative overflow-hidden z-40"
        >
          <div className="text-xl px-2 tracking-wider flex items-center transform transition-transform duration-300 ease-in-out group-hover:-translate-x-6 group-hover:scale-90">
            <p>Browse Collections</p>
          </div>
          <div className="flex items-center justify-center w-12 h-full absolute right-[0px] transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-white text-yellow-400">
            <FaArrowRight />
          </div>
        </Link>
      </div>

    {/* Products Container */}
    <div className="flex flex-col bg-white text-black text-xl w-dvh h-[85vh] p-8 mt-10">
      <div className="flex items-start justify-start text-5xl font-semibold">
        <h1>Products</h1>
      </div>
      <div className="flex justify-center items-center h-full"> {/* Center the content */}
        <div className="flex justify-center items-center gap-8 max-w-4xl"> {/* Center the text and image */}
          {/* Text Section */}
          <div className="flex flex-col justify-center items-start w-1/2 text-left"> {/* Keep text left-aligned */}
            <h1 className="py-2 text-2xl font-semibold">Aurelia</h1>
            <p className="font-semibold italic">Opal • Pearl • Jade Thread</p>
            <p>
              The bracelet's design highlights its opal accents, paired with delicate gold details and a lustrous pearl,
              creating a harmonious fusion of opulence and grace. Each strand of jade thread is meticulously knotted by hand,
              ensuring both durability and a perfect fit.
            </p>
            <div className="group flex justify-center items-center w-fit my-1">
              <Link
                href="/products"
                className="relative text-lg text-medium text-blue-500"
              >
                See More
                <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="">
            <Image
              src={ProductImg}
              alt="Product Image"
            />
          </div>
        </div>
      </div>
    </div>

      {/* About Us Container */}
<div className="flex flex-col bg-white text-black text-xl w-dvh h-[85vh] p-8">
  <div className="flex items-start justify-start text-5xl font-semibold my-10">
    <h1>About Us</h1>
  </div>
  <div className="grid grid-cols-3 gap-6"> {/* Grid layout for 3 columns */}
    {/* Row 1 */}
    <div className="flex flex-col justify-start items-start border border-black p-6">
      <div className="text-yellow-300 my-2">
        <FiTarget size={66} />
      </div>
      <p className="text-3xl font-semibold mt-1 text-blue-900">High Quality</p>
      <p className="py-2 text-blue-400">
        Emphasizing the use of premium materials and meticulous craftsmanship, aligning with the Empress ideals.
      </p>
    </div>
    <div className="flex flex-col justify-start items-start border border-black p-6">
      <div className="text-yellow-300 my-2">
        <CiFaceSmile size={65} />
      </div>
      <p className="text-3xl font-semibold mt-1 text-blue-900">Cost Friendly</p>
      <p className="py-2 text-blue-400">
        Highlighting affordability without compromising on quality, making luxury accessible.
      </p>
    </div>
    <div className="flex flex-col justify-start items-start border border-black p-6">
      <div className="text-yellow-300 my-2">
        <HiOutlineBolt size={65} />
      </div>
      <p className="text-3xl text-blue-900 font-semibold mt-1">Fast Delivery</p>
      <p className="py-2 text-blue-400">
        Focusing on customer convenience and the excitement of receiving a new piece.
      </p>
    </div>

    {/* Row 2 */}
    <div className="flex flex-col justify-start items-start border border-black p-6">
      <div className="text-yellow-300 my-2">
        <LuWrench size={65} />
      </div>
      <p className="text-3xl text-blue-900 font-semibold mt-1">Customizable</p>
      <p className="py-2 text-blue-400">
        Showcasing the ability to personalize bracelets, appealing to those who value individuality.
      </p>
    </div>
    <div className="flex flex-col justify-start items-start border border-black p-6">
      <div className="text-yellow-300 my-2">
        <BiStore size={65} />
      </div>
      <p className="text-3xl text-blue-900 font-semibold mt-1">In Store Feeling</p>
      <p className="py-2 text-blue-400">
        Reinforcing the premium customer experience, even for online shoppers.
      </p>
    </div>
    <div className="flex flex-col justify-start items-start border border-black p-6">
      <div className="text-yellow-300 my-2">
        <IoHammerOutline size={65} />
      </div>
      <p className="text-3xl text-blue-900 font-semibold mt-1">Design Your Own</p>
      <p className="py-2 text-blue-400">
        Encourages creativity and collaboration with artisans, offering a unique experience.
      </p>
    </div>
  </div>
</div>

      {/* Reviews Container */}
<div className="flex flex-col bg-white text-black text-xl w-dvh h-[95vh] p-8">
  <div className="flex items-start justify-start text-5xl font-semibold my-10">
    <h1>What Our Customers Say</h1>
  </div>
  <div className="flex flex-col w-full justify-center items-center cursor-pointer">
    {/* Top 4 Comments */}
    <div className="grid grid-cols-4 gap-6 w-full"> {/* Grid layout for 4 columns */}
      <div className="bg-gray-200 p-6 flex flex-col justify-between"> {/* Flex column to align content to bottom */}
        <div className="text-2xl font-semibold">
          <p>"I absolutely adore my Empress bracelet! It's now my favourite piece."</p>
        </div>
        <div className="flex p-4 items-center mt-auto"> {/* Align to bottom */}
          <div className="px-3">
            <Image
              src={ProfilePic}
              height={50}
              width={50}
              alt="User Profile Pic"
              className="rounded-full border-2 border-black" // Circular image with black border
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600">Sophia L.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 flex flex-col justify-between">
        <div className="text-2xl font-semibold">
          <p>"I bought the Empress bracelet as a gift for my wife, and she hasn’t taken it off since! The quality is outstanding, and it looks even more beautiful in person than online."</p>
        </div>
        <div className="flex p-4 items-center mt-auto">
          <div className="px-3">
            <Image
              src={ProfilePic}
              height={50}
              width={50}
              alt="User Profile Pic"
              className="rounded-full border-2 border-black"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600">James T.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 flex flex-col justify-between">
        <div className="text-2xl font-semibold">
          <p>"I’ve never been more impressed with a piece of jewelry."</p>
        </div>
        <div className="flex p-4 items-center mt-auto">
          <div className="px-3">
            <Image
              src={ProfilePic}
              height={50}
              width={50}
              alt="User Profile Pic"
              className="rounded-full border-2 border-black"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600">Emma R.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 flex flex-col justify-between">
        <div className="text-2xl font-semibold">
          <p>"The bracelet I ordered is elegant and well-made, and the customization process was so easy."</p>
        </div>
        <div className="flex p-4 items-center mt-auto">
          <div className="px-3">
            <Image
              src={ProfilePic}
              height={50}
              width={50}
              alt="User Profile Pic"
              className="rounded-full border-2 border-black"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600">Michael P.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom 2 Comments */}
    <div className="grid grid-cols-2 gap-6 w-full mt-6"> {/* Reduced gap between rows */}
      <div className="bg-gray-200 p-6 flex flex-col justify-between">
        <div className="text-2xl font-semibold">
          <p>"I’ve been searching for a high-quality bracelet that doesn’t break the bank, and Empress delivered! The design is chic, and it’s surprisingly lightweight and comfortable to wear."</p>
        </div>
        <div className="flex p-4 items-center mt-auto">
          <div className="px-3">
            <Image
              src={ProfilePic}
              height={50}
              width={50}
              alt="User Profile Pic"
              className="rounded-full border-2 border-black"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600">Olivia M.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 flex flex-col justify-between">
        <div className="text-2xl font-semibold">
          <p>"Empress exceeded my expectations. The bracelet I designed for my sister was stunning, and she was thrilled with it. The process was seamless, and the final product was exactly what I envisioned. It’s rare to find a brand that combines quality, affordability, and excellent service like this. 10/10!"</p>
        </div>
        <div className="flex p-4 items-center mt-auto">
          <div className="px-3">
            <Image
              src={ProfilePic}
              height={50}
              width={50}
              alt="User Profile Pic"
              className="rounded-full border-2 border-black"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-600">Daniel K.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  );
}
