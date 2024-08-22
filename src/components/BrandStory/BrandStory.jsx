import React from "react";
import { ObjectPicture } from "../../assets/image";

export const BrandStory = () => {
  return (
    <div className="relative bg-[#0565bb] h-[937px] w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="absolute z-0 top-[19%] left-4 md:left-8">
        <img
          src={ObjectPicture.Object1}
          alt="Object 1"
          className="object-contain h-[50px] md:h-[120px] lg:h-[150px]"
        />
      </div>
      <div className="absolute right-[10%] top-3">
        <img
          src={ObjectPicture.Object2}
          alt="Object 2"
          className="object-contain h-[50px] md:h-[120px] lg:h-[150px]"
        />
        <img
          src={ObjectPicture.Object3}
          alt="Object 3"
          className="object-cover absolute md:top-14 md:left-24 h-[60px] md:h-[90px] lg:h-[120px]"
        />
      </div>
      <div className="relative flex flex-col top-1/2 items-end justify-end w-full mt-8 md:mt-0">
        <img
          src={ObjectPicture.Object5}
          alt="Object 5"
          className="object-contain absolute top-[80px] right-[-70px] z-10 w-[100px] md:w-[150px] lg:w-[200px] mb-2"
        />
        <img
          src={ObjectPicture.Object4}
          alt="Object 4"
          className="object-contain absolute z-0 top-[-150px] right-[-10%] md:w-[120px] lg:w-[180px]"
        />
      </div>
      <div className="absolute bottom-3/4 top-[75%] left-4 md:left-0 flex items-center space-x-4">
        <img
          src={ObjectPicture.Object6}
          className="object-cover w-[100px] md:w-[120px] lg:w-[140px]"
          alt="Object 6"
        />
        <img
          src={ObjectPicture.Object7}
          className="object-cover w-[100px] md:w-[120px] lg:w-[140px]"
          alt="Object 7"
        />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcd32a] mb-6 leading-tight tracking-wide">
          Brand Story
        </h1>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-[#fcd32a] leading-relaxed max-w-3xl">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </span>

        <div className="relative z-50 mt-8 lg:mt-16 w-full">
          <img
            src={ObjectPicture.Window}
            alt="Window"
            className="object-contain z-50 mx-auto h-[250px] md:h-[300px] lg:h-[400px] max-w-full"
          />
          <div className="absolute top-[40%] md:top-[50%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 max-w-xs lg:max-w-md">
            <h2 className="md:text-lg text-left lg:text-2xl font-semibold text-gray-800">
              What Happened’s Brand story
            </h2>
            <p className="text-gray-700 text-left text-[10px] lg:text-lg md:mt-2">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </p>
            <button className="flex justify-center items-center w-full md:h-[50px] mt-4 uppercase text-[16px] md:text-[18px] p-2 border-[3px] text-center font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
