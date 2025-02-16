import React from "react";
import { dataList } from "../services";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="flex flex-col gap-20 mb-[10rem]">
      {/* Games */}
      <div className="flex flex-col gap-5">
        <h1 className="text-xl sm:text-2xl text-white font-semibold mb-2">
          🎮 Games
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-10">
          {dataList
            .filter((types) => types.type === "Games")
            .map((item) => (
              <a href={`/order/${item.id}`} key={item.id}>
                <div className="relative mini-card w-40 h-56 sm:w-45 md:w-55 md:h-60 lg:w-full lg:h-64 rounded-lg overflow-hidden group hover:cursor-pointer">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xl"
                  />

                  {/* Overlay Blur */}
                  <div className="absolute bottom-0 w-full h-12 bg-white/10 backdrop-blur-2xl transition-all duration-300 will-change-transform opacity-100 group-hover:opacity-0 z-10">
                    <div className="flex justify-center items-center gap-2 py-3">
                      <p className="text-white mini-text text-sm sm:text-md md:text-lg font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>

                  {/* Konten Hover */}
                  <div className="absolute px-3 inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-30 h-30 rounded-full">
                      <img
                        src={logo}
                        alt=""
                        className="w-full object-cover mini-img"
                      />
                    </div>
                    <h1 className="text-xl mini-text-2 text-white text-center font-semibold">
                      {item.name}
                    </h1>
                    <p className="text-lg text-white mini-text-2">
                      {item.publisher}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>

      {/* Entertainment */}
      <div className="flex flex-col gap-5">
        <h1 className="text-sm sm:text-2xl text-white font-semibold mb-2">
          🎬 Entertainment
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-10">
          {dataList
            .filter((types) => types.type === "Entertainment")
            .map((item) => (
              <div
                className="relative w-40 h-56 sm:w-45 md:w-55 md:h-60 lg:w-full lg:h-64 rounded-lg overflow-hidden group hover:cursor-pointer"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xl"
                />

                {/* Overlay Blur */}
                <div className="absolute bottom-0 w-full h-12 bg-white/10 backdrop-blur-2xl transition-all duration-300 will-change-transform opacity-100 group-hover:opacity-0 z-10">
                  <div className="flex justify-center items-center gap-2 py-3">
                    <p className="text-white text-sm sm:text-md md:text-lg font-semibold">
                      {item.name}
                    </p>
                  </div>
                </div>

                {/* Konten Hover */}
                <div className="absolute px-3 inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-30 h-30 rounded-full">
                    <img src={logo} alt="" className="w-full object-cover" />
                  </div>
                  <h1 className="text-xl text-white text-center font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-lg text-white">{item.publisher}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
