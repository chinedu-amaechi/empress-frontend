import Image from "next/image";
import ProductImg from "../../../public/product.png";
import ProductImg2 from "../../../public/product2.png";
import ProductImg3 from "../../../public/product3.png";
import ProductImg4 from "../../../public/product4.png";
import Link from "next/link";
import React from "react";

export default function Collections() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-5xl font-semibold text-center mb-12">The Collections</h1>

        {/* replace later with actual content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-semibold">Ethereal Collection</h1>
          <p className="text-gray-600">
            Whispers of grace and serenity with soft hues and luminous stones that reflect inner beauty.
          </p>
          <Link
                href="/products"
                className="relative text-lg text-medium text-blue-500 group"
              >
                See More
                <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
          <Image
            src={ProductImg}
          alt="Product Image"
          height={500}
          width={500}
          />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-semibold">Divine Collection</h1>
          <p className="text-gray-600">
          Talismanic pieces that channel strength, grounding, and spiritual balance.
          </p>
          <Link
                href="/products"
                className="relative text-lg text-medium text-blue-500 group"
              >
                See More
                <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
          <Image
            src={ProductImg2}
          alt="Product Image"
          height={500}
          width={500}
          />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-semibold">Heritage Collection</h1>
          <p className="text-gray-600">
          Rooted in East Asian symbolism with fiery reds, gold threads, and agates representing prosperity and longevity.
          </p>
          <Link
                href="/products"
                className="relative text-lg text-medium text-blue-500 group"
              >
                See More
                <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
          <Image
            src={ProductImg3}
          alt="Product Image"
          height={500}
          width={500}
          />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-semibold">Celestial Bloom Collection</h1>
          <p className="text-gray-600">
          Dreamlike pieces inspired by the cosmos and natural beauty.
          </p>
          <Link
                href="/products"
                className="relative text-lg text-medium text-blue-500 group"
              >
                See More
                <span className="absolute left-0 bottom-[2px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
          <Image
            src={ProductImg4}
          alt="Product Image"
          height={500}
          width={500}
          />
      </div>


    </div>
  );
}