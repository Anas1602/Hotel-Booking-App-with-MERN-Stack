import React from "react";

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`flex flex-col justify-center mb-10 ${
        align === "left" ? "items-start text-left" : "items-center text-center"
      }`}>
      <h1
        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-4 ${
          font || "font-playfair"
        }`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-600 max-w-2xl">{subTitle}</p>
    </div>
  );
};

export default Title;
