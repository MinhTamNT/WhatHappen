import { ErrorMessage, Field } from "formik";

export const InputField = ({ label, name, type = "text", placeholder }) => (
  <div className="mb-4 md:mb-6 lg:mb-8">
    <label htmlFor={name} className="block text-gray-700 mb-2 font-bold">
      {label}
    </label>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full h-[50px] px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 rounded-md"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
