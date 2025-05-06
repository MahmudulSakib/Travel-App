import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex justify-center items-center w-full flex-col pb-[100px]">
      <div className="rounded-3xl mx-auto max-w-[1400px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-[#141414] bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-[700] lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-[16px] font-[400] text-[#EEEEEE]">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="border-white bg-white px-8 py-3 text-[#585858]"
              width={40}
              heigth={80}
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="border-gray-20 bg-[#292C27] px-8 py-5 text-white"
              width={20}
              heigth={80}
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
