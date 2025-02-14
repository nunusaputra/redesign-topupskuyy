import React from "react";
import img1 from "../assets/images/student-2.jpg";
import img2 from "../assets/images/student-3.jpg";
import img3 from "../assets/images/student-7.jpg";
import { dataList } from "../services";

const Popular = () => {
  return (
    <section className="">
      <h1 className="text-xl sm:text-2xl text-white font-semibold mb-2">
        🔥Popular
      </h1>
      <div className="flex flex-wrap gap-5 lg:gap-2 xl:gap-3 justify-between items-center">
        {dataList
          .filter((rank) => rank.count_buy >= 3000)
          .map((item) => (
            <div
              className="relative w-96 h-52 sm:w-72 md:w-84 lg:w-78 xl:w-86 2xl:w-96 sm:h-45 bg-red-200 overflow-hidden rounded-lg group hover:cursor-pointer"
              key={item.id}
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xl"
              />

              {/* Konten Tengah */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-md">{item.name}</h1>
                <h1 className="text-white text-3xl font-bold tracking-wider">
                  {item.item_name}
                </h1>

                {/* Avatar Container */}
                <div className="flex items-center justify-center gap-x-2">
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
                    <p className="text-xs text-white">
                      {item.count_buy >= 1000
                        ? Math.floor(item.count_buy / 1000) + "k"
                        : item.count_buy}
                      +
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white">
                  penjualan {item.count_buy}+
                </p>
              </div>
              <div className="absolute top-0 -left-1 w-15 h-15 group-hover:blur-xl transition-all duration-300">
                <img
                  src={item.ranking}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Popular;
