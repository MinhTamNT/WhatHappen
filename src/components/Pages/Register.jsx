import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputField } from "../InputField/InputField";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("유효하지 않은 이메일 주소입니다")
    .required("이메일을 입력해주세요"),
  password: Yup.string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
    .max(12, "비밀번호는 최대 12자까지 가능합니다")
    .required("비밀번호를 입력해주세요"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인을 입력해주세요"),
  address: Yup.string().required("주소를 입력해주세요"),
  additionalAddress: Yup.string(),
  contact: Yup.string(),
  terms: Yup.bool().oneOf(
    [true],
    "이용약관 및 개인정보 처리 방침에 동의해야 합니다."
  ),
  adsConsent: Yup.bool(),
});

export const Register = () => {
  const [checkboxChecked, setCheckboxChecked] = useState({
    terms: false,
    adsConsent: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxChecked((prev) => ({
      ...prev,
      terms: name === "terms" ? !prev.terms : false,
      adsConsent: name === "adsConsent" ? !prev.adsConsent : false,
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-8 lg:p-12 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mt-8 md:mt-16 lg:mt-24 mb-6 md:mb-8 lg:mb-12 text-center">
        JOIN US
      </h1>

      <div className="w-full max-w-md h-[2px] bg-gray-900 mb-6 md:mb-8 lg:mb-10"></div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
          address: "",
          additionalAddress: "",
          contact: "",
          terms: false,
          adsConsent: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted successfully with values:", values);
        }}
      >
        {() => (
          <Form className="w-full max-w-md space-y-4">
            <InputField
              label="아이디(이메일) *"
              name="email"
              placeholder="아이디 (이메일)"
            />

            <InputField
              label="비밀번호 *"
              name="password"
              type="password"
              placeholder="비밀번호"
            />

            <InputField
              label="비밀번호 확인 *"
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
            />

            <div className="relative mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 mb-2 font-bold"
              >
                주소 *
              </label>
              <Field
                type="text"
                name="address"
                className="w-full h-[50px] pl-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 rounded-md"
              />
              <button
                type="button"
                className="absolute right-2 top-14 transform -translate-y-1/2 text-[#659bf5]"
              >
                검색
              </button>
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <InputField name="additionalAddress" placeholder="추가 주소" />

            <InputField label="연락처" name="contact" placeholder="연락처" />

            <div className="w-full my-6 border-t border-gray-300"></div>

            <div className="flex items-center md:justify-end mb-4 md:text-sm text-[12px] ">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="hidden peer"
                checked={checkboxChecked.terms}
                onChange={() => handleCheckboxChange("terms")}
              />
              <label
                htmlFor="terms"
                className="flex items-center cursor-pointer text-sm text-gray-700 font-bold"
              >
                <span
                  className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 relative ${
                    checkboxChecked.terms ? "bg-[#333]" : "border-gray-400"
                  }`}
                ></span>
                <span className="text-blue-600">이용약관</span> 및
                <span className="text-blue-600">개인정보 처리 방침</span>에
                동의합니다. (필수)
              </label>
            </div>
            <div className="flex justify-end">
              <ErrorMessage
                name="terms"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex items-center md:justify-end mb-4">
              <input
                type="checkbox"
                id="adsConsent"
                name="adsConsent"
                className="hidden peer"
                checked={checkboxChecked.adsConsent}
                onChange={() => handleCheckboxChange("adsConsent")}
              />
              <label
                htmlFor="adsConsent"
                className="flex items-center cursor-pointer text-sm text-gray-700 font-bold"
              >
                <span
                  className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 relative ${
                    checkboxChecked.adsConsent
                      ? "bg-[#333] w-5 h-5"
                      : "border-gray-400"
                  }`}
                ></span>
                <span className="font-bold text-sm">
                  광고 및 메일 수신에 동의합니다. (선택)
                </span>
              </label>
              <ErrorMessage
                name="adsConsent"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="w-full mt-6">
              <button
                type="submit"
                className="w-full h-[50px] px-4 py-2 border border-gray-300 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition"
              >
                가입하기
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
