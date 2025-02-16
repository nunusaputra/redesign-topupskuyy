import React, { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import img1 from "../assets/images/student-2.jpg";
import img2 from "../assets/images/student-3.jpg";
import img3 from "../assets/images/student-7.jpg";
import { dataBanner } from "../services";

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === dataBanner.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="lg:min-h-76 flex flex-col lg:flex-row gap-4">
        {/* Banner Image (Slideshow) */}
        <div className="lg:relative w-full h-full 2xl:w-[78%] lg:h-96 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {dataBanner.map((slide, index) => (
              <img
                key={index}
                src={slide.images}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-contain lg:min-w-full"
              />
            ))}
          </div>
        </div>

        {/* Card Reseller (Hanya muncul di ukuran lg) */}
        <div className="hidden 2xl:block 2xl:w-[22%] ">
          <div className="relative w-full h-87 bg-slate-600/30 backdrop-blur-md rounded-3xl p-6 overflow-hidden">
            {/* Lingkaran Blur */}
            <div className="absolute top-0 left-0 w-30 h-30 bg-blue-500/30 blur-xl rounded-full"></div>
            <div className="absolute top-10 right-5 w-32 h-32 bg-purple-500/30 blur-xl rounded-full"></div>
            <div className="absolute bottom-20 left-0 w-28 h-28 bg-purple-400/30 blur-xl rounded-full"></div>
            <div className="absolute bottom-5 right-5 w-30 h-30 bg-blue-400/30 blur-xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-full h-12 bg-[#596BEB]">
              <div className="flex justify-center items-center gap-2 py-3">
                <IoCallOutline className="text-white text-xl" />
                <p className="text-white text-sm">Hubungi sekarang juga!</p>
              </div>
            </div>

            {/* Konten Card */}
            <h2 className="relative text-white text-lg font-bold mb-1">
              topupskuy
            </h2>
            <p className="relative text-white text-sm mb-5">
              Ingin dapat harga lebih murah?
            </p>
            <h1 className="relative text-white text-3xl font-bold tracking-wide mb-7">
              JOIN <span className="block">RESELLER!</span>
            </h1>
            <div className="flex gap-x-2 mb-2">
              <img
                src={img1}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={img2}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white -ml-7"
              />
              <img
                src={img3}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white -ml-7"
              />
              <div className="w-10 h-10 bg-slate-600 rounded-full border-2 border-white flex items-center justify-center -ml-7">
                <p className="text-xs text-white">100+</p>
              </div>
            </div>
            <p className="text-[12px] text-white">
              Sudah lebih dari 100+ pengguna <span>bergabung bersama kami</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
