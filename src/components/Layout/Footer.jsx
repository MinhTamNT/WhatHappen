import React from "react";
import { SocialIcons } from "../../lib";

export const Footer = () => {
  return (
    <footer className="h-auto bg-white text-black flex flex-col p-8">
      <div className="w-full h-[1px] bg-[#f4f4f4] mb-8"></div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-[14px] font-bold leading-[2.14] text-[#111] mb-4">
            what happened
          </p>
          <p className="text-[14px] w-[234px]">
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
            영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
            이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-28 w-full">
          <div className="flex flex-col w-full md:w-1/4">
            <span className="text-[14px] font-semibold leading-[2.86] text-[#111] mb-4">
              about us
            </span>
            <p className="text-[14px] w-[82px]">
              회사 소개 인재 채용 상시 할인 혜택
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <span className="text-[14px] font-semibold leading-[2.86] text-[#111] mb-4">
              my order
            </span>
            <p className="text-[14px] w-[128px] h-[128px]">
              내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙 서류
              발급
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <span className="text-[14px] font-semibold leading-[2.86] text-[#111] mb-4">
              my account
            </span>
            <p className="text-[14px]">
              회원 정보 수정 회원 등급 마일리지 현황 쿠폰
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <span className="text-[14px] font-semibold leading-[2.86] text-[#111] mb-4">
              help
            </span>
            <p className="text-[14px]">
              1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의
              소리
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-20">
        <p className="text-[#a9a9a9] text-[14px] text-center md:text-left w-full md:w-1/2 mb-4 md:mb-0">
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
          사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
          이용약관 l 개인정보처리방침
        </p>
        <div className="flex justify-center space-x-4 mb-8 md:mb-0">
          {[SocialIcons[0], SocialIcons[2], SocialIcons[3]].map(
            ({ name, image }) => (
              <button
                key={name}
                className="w-12 h-12 p-2 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </button>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
