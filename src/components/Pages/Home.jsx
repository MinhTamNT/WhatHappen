import React from "react";
import { images } from "../../assets/image";
import { bestProduct } from "../../lib";
import { ListProduct } from "../ListProduct/ListProduct";
import { BrandStory } from "../BrandStory/BrandStory";

export const Home = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={images.Banner}
          className="object-cover w-full h-auto"
          alt="Banner"
        />
      </div>

      <div className="relative w-full">
        <img
          src={images.Introduce}
          className="object-cover w-full h-[300px] sm:h-[450px] md:h-[567px]"
          alt="Introduction"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 text-white">
          <div className="max-w-[90%] sm:max-w-[669px] ">
            <span className="block text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-extrabold leading-tight sm:leading-snug md:leading-[1.3] lg:leading-[1.2] tracking-wide sm:tracking-[2px] md:tracking-[3px] lg:tracking-[5px]">
              What Happened!
            </span>
            <span className="block mt-6 sm:mt-6 lg:mt-8 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-normal leading-relaxed">
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos. Can be trimmed. Take the first
              step to your brand's success. How to create mobile-optimized
              videos in minutes.
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <img
          src={images.BesBg}
          className="object-cover w-full h-[1073px]"
          alt="Background"
        />
        <div className="absolute top-16 inset-0 flex flex-col items-center px-4">
          <h1 className="w-full max-w-[463px] text-center uppercase text-[30px] sm:text-[40px] md:text-[50px] font-bold leading-[1.2] tracking-[5px] text-[#f96400] mb-6 sm:mb-10">
            Best Product
          </h1>
          <p className="w-full max-w-[665px] text-center text-[14px] sm:text-[16px] md:text-[20px] leading-6 text-[#f96400] mb-8 sm:mb-12">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos. Can be trimmed. Take the first
            step to your brand's success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 px-4 sm:px-6 md:px-10">
            {bestProduct.map((product) => (
              <div
                key={product.name}
                className="flex flex-col items-center relative"
              >
                <img
                  src={product.image}
                  className="object-cover w-full h-[200px] sm:h-[250px] md:w-[523px] md:h-[310px] lg:h-[514px]"
                  alt={product.name}
                />
                <div className="w-full max-w-[369px] h-[70px] p-2 border-[3px] border-[#020001] bg-white absolute bottom-[-40px] flex items-center justify-between px-2 py-3">
                  <p className="w-full max-w-[188px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-extrabold text-[#222]">
                    How to create mobile-optimized
                  </p>
                  <img
                    src={images.GoIcon}
                    className="h-[50px] sm:h-[55px] md:h-[63px] w-auto"
                    alt="Go Icon"
                  />
                </div>
                <div>
                  <img
                    src={product.production}
                    className="absolute top-[-30px] left-[-10px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ListProduct />
      <BrandStory />
    </>
  );
};
