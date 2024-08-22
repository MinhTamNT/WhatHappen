import React from "react";
import { videObject } from "../../assets/image";

export const Happen = () => {
  return (
    <div className="min-h-[1573px] h-auto w-full">
      <div className="max-w-6xl w-full mx-auto mt-10 md:mt-20 relative">
        <div className="text-center">
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold uppercase mb-4 sm:mb-6">
            What Happened
          </h1>
          <p className="text-[#110e03] mx-auto max-w-[665px] h-[52px] text-center mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos. Can be trimmed. Take the first
          </p>
          <button className=" h-[60px] w-[200px] border-[3px] border-[#333] text-[23px] font-semibold">See More</button>
          {/* Right Side Floating Images */}
          <div className="flex flex-col absolute right-0 top-0">
            <img
              src={videObject.VideoObject7}
              alt="Video Object 7"
              className="hidden lg:block w-auto"
            />
            <img
              src={videObject.VideoObject6}
              className="absolute left-[-17px] bottom-[-90px] hidden lg:block w-auto"
              alt="Video Object 6"
            />
          </div>

          <div className="relative z-30 h-full mt-36">
            <img
              src={videObject.Video}
              className="object-cover mx-auto h-[823px] w-auto"
              alt="Video"
            />
            <img
              src={videObject.VideoObject2}
              className="object-cover absolute left-1/2 h-[83px] w-auto"
              alt="Video"
            />
          </div>

          <div className="absolute flex flex-row bottom-[-250px] left-[-75px] mt-30 z-0 space-x-4">
            <img
              src={videObject.VideoObject3}
              className="object-cover h-[146px] hidden lg:block"
              alt="Video Object 3"
            />
            <img
              src={videObject.VideoObject1}
              className="object-cover mt-20 hidden lg:block"
              alt="Video Object 1"
            />
          </div>

          {/* Top Left Floating Image */}
          <div className="absolute top-0 left-[-700px] hidden lg:block">
            <img
              src={videObject.VideoObject4}
              className="object-cover mt-20"
              alt="Video Object 4"
            />
          </div>

          <div className="absolute md:flex right-[-500px] top-0 flex-col hidden lg:flex">
            <img
              src={videObject.VideoObject9}
              className="object-cover ml-40 mt-64 z-0 h-[315px]"
              alt="Video Object 9"
            />
            <img
              src={videObject.VideoObject8}
              className="object-cover h-[474px]  z-10"
              alt="Video Object 8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
