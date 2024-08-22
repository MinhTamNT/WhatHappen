import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { SocialIcons } from "../../lib";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("유효하지 않은 이메일 주소입니다")
    .required("이메일을 입력해주세요"),
  password: Yup.string()
    .min(6, "비밀번호는 최소 6자 이상이어야 합니다")
    .required("비밀번호를 입력해주세요"),
});

export const Login = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mt-8 md:mt-16 lg:mt-24 mb-6 md:mb-8 lg:mb-12 text-center">
        Welcome
      </h1>

      <div className="w-full max-w-md h-[2px] bg-gray-900 mb-6 md:mb-8 lg:mb-10"></div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted successfully with values:", values);
        }}
      >
        {() => (
          <Form className="w-full max-w-md">
            <div className="mb-4 md:mb-6 lg:mb-8">
              <Field
                type="text"
                name="email"
                placeholder="아이디 (이메일)"
                className="w-full h-[50px] px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4 md:mb-6 lg:mb-8">
              <Field
                type="password"
                name="password"
                placeholder="비밀번호"
                className="w-full h-[50px] px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[50px] px-4 py-2 border border-gray-300 bg-blue-700 text-white text-lg font-semibold rounded-lg mb-8 md:mb-10 lg:mb-12 hover:bg-blue-800"
            >
              로그인하기
            </button>
            <div className="w-full text-center text-black font-medium text-base leading-6 tracking-normal mb-6">
              SNS 계정으로 로그인
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              {SocialIcons.map(({ name, image }) => (
                <button
                  key={name}
                  className="w-12 h-12 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
            <button className="w-full h-[50px] border text-center text-blue-700">
              계정이 없으신가요? 간편가입하기
            </button>
            <div className="flex items-center justify-between mt-8 text-blue-600">
              <p className="text-sm">아이디(이메일)찾기</p>
              <p className="text-sm">비밀번호 찾기</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
