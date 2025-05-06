import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="absolute right-0 top-0 h-screen w-screen bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-28 xl:-top-60" />
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] lg:top-[-37px]"
        />
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%] xl:text-[64px] xl:leadin-[120%]">
          Honey Shine Camp Area
        </h1>
        <p className="text-[16px] font-[400] mt-6 text-gray-500 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We canhelp you on an
          adventure around the world in jus one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-[#021639]">
            198k
            <span className="text-[16px] font-[400] lg:text-[20px] lg:font-[400] ml-1">
              Execellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="border-green-50 bg-green-500 px-8 py-5 text-white"
            heigth={24}
            width={24}
          />
          <Button
            type="button"
            title="How We Work?"
            variant="border-white bg-white px-8 py-3 text-gray-90"
            icon="/play.svg"
            heigth={24}
            width={24}
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex h-[180px] w-[300px] flex-col gap-8 rounded-3xl bg-[#292C27] px-7 py-5">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-gray-500">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-[16px] font-[700] text-white">Aguas Calientes</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-gray-200">
                Distance
              </p>
              <p className="text-[20px] font-[700] text-white">173.28 miles</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-gray-200">
                Elevation
              </p>
              <p className="text-[20px] font-[700] text-white">2.040 Km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
