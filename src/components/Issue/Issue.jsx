import React from "react";
import { ObjectPicture } from "../../assets/image";

export const Issue = () => {
  return (
    <div className="h-auto min-h-[1143px] bg-[#fccb05] flex flex-col">
      <div className="max-w-6xl w-full px-4 mx-auto mt-10 md:mt-20">
        <div className="text-center">
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold uppercase mb-4 sm:mb-6">
            Happened’s Issue
          </h1>
          <p className="text-[#110e03] text-center mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-0 gap-4 w-full h-auto mt-10 md:mt-20">
        {/* First Grid Item */}
        <div className="bg-[#f50] relative p-4 rounded-lg shadow-md w-full h-[250px] sm:h-[300px] md:h-[350px] flex flex-col justify-center items-center">
          <span className="uppercase font-extrabold text-[30px] sm:text-[40px] md:text-[55px] text-center mb-2">
            whpn issue
          </span>
          <img
            src={ObjectPicture.NewImages}
            className="object-cover h-[100px] sm:h-[120px] md:h-[148px]"
            alt="WHN Issue"
          />
          <img
            src={ObjectPicture.NewObject3Imag3}
            className="absolute right-[-20px] sm:right-[-40px] bottom-[-20px] sm:bottom-[-40px] h-[100px] sm:h-[120px] md:h-[150px] object-contain"
            alt="WHN Issue Object"
          />
        </div>
        {["B brand", "C brand", "D brand", "E brand"].map((brand, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="relative h-[40px] font-extrabold text-[20px] sm:text-[25px] md:text-[30px] p-2 flex items-center justify-center bg-black text-white w-full">
              <span className="uppercase text-center">{brand}</span>
              {index === 0 && (
                <img
                  src={ObjectPicture.NewObject4}
                  className="absolute top-[-10px] sm:top-[-20px] left-[-5px] h-[30px] sm:h-[40px] md:h-[50px]"
                  alt={`${brand} Object`}
                />
              )}
            </div>
            <img
              src={
                index === 0
                  ? ObjectPicture.CustomImage
                  : index === 1
                  ? ObjectPicture.NewObject3
                  : index === 2
                  ? ObjectPicture.NewImage4
                  : ObjectPicture.NewImage5
              }
              className="h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover"
              alt={`${brand} Image`}
            />
            {index === 2 && (
              <>
                <img
                  src={ObjectPicture.NewObject5}
                  className="object-cover absolute right-[260px] mt-[290px] "
                  alt="D brand Object"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
