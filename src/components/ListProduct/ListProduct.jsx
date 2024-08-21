import React from "react";
import { listProduct } from "../../lib";
import { images } from "../../assets/image";

export const ListProduct = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-4">
      {listProduct.map((product, index) => (
        <div key={index} className="flex flex-col  px-8 py-4 ">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mb-2"
          />
          <p className="text-lg font-bold mb-1">{product.name}</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-gray-700 text-base">{product.cost}</p>
            <div className="text-gray-500 text-base flex items-center">
              <img
                src={images.HeartIcon}
                alt="Heart Icon"
                className="w-4 h-4 mr-1"
              />
              {product.heart} hearts
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
