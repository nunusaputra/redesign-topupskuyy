import React, { useEffect, useState } from "react";
import { dataList } from "../services";
import Marquee from "react-fast-marquee";
import ml from "../assets/images/ml.jpeg";
import valo from "../assets/images/valo.jpeg";
import gensin from "../assets/images/gensin.jpeg";
import { RiDiscountPercentFill } from "react-icons/ri";

const Promo = () => {
  const calculateTime = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);

    const difference = midnight - now;

    return {
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [today, setToday] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Promo Content */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <RiDiscountPercentFill className="text-xl sm:text-2xl text-amber-300" />
          <h1 className="text-md sm:text-xl text-white font-semibold">
            PROMO EKSLUSIF
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 2xl:gap-15">
          {/* Card 1 */}
          <div className="xl:w-85 2xl:w-92 px-4 py-2 min-h-30 flex flex-col bg-slate-600/30 backdrop-blur-md rounded-xl">
            <div className="w-full h-20 bg-slate-600/30 backdrop-blur-md rounded-t-xl flex p-2 gap-2 mr-4">
              <div className="w-[50%] rounded-lg overflow-hidden">
                <img src={ml} alt="" className="w-full h-16 object-cover" />
              </div>
              <div className="w-70 bg-slate-800/20 backdrop-blur-md p-2 flex flex-col gap-1 rounded-lg">
                <h1 className="text-white text-sm font-semibold">
                  Weekly Diamond Pass
                </h1>
                <p className="text-white text-xs">Weekly Diamond Pass</p>
              </div>
            </div>
            <div className="w-full h-10 bg-red-50 rounded-b-xl px-2 py-4 flex justify-between items-center">
              <div className="px-6 text-xs font-semibold text-white py-1 bg-amber-700 rounded-full">
                {today.hours}:{today.minutes}:{today.seconds}
              </div>
              <div className="text-sm font-semibold text-green-600">-30%</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="xl:w-85 2xl:w-92 px-4 py-2 min-h-30 flex flex-col bg-slate-600/30 backdrop-blur-md rounded-xl">
            <div className="w-full h-20 bg-slate-600/30 backdrop-blur-md rounded-t-xl flex p-2 gap-2 mr-4">
              <div className="w-[50%] rounded-lg overflow-hidden">
                <img src={valo} alt="" className="w-full h-16 object-cover" />
              </div>
              <div className="w-70 bg-slate-800/20 backdrop-blur-md p-2 flex flex-col gap-1 rounded-lg">
                <h1 className="text-white text-sm font-semibold">
                  Weekly Valorant Point
                </h1>
                <p className="text-white text-xs">Free 10k Valorant Point</p>
              </div>
            </div>
            <div className="w-full h-10 bg-red-50 rounded-b-xl px-2 py-4 flex justify-between items-center">
              <div className="px-6 text-xs font-semibold text-white py-1 bg-amber-700 rounded-full">
                {today.hours}:{today.minutes}:{today.seconds}
              </div>
              <div className="text-sm font-semibold text-green-600">-30%</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="xl:w-85 2xl:w-92 px-4 py-2 min-h-30 flex flex-col bg-slate-600/30 backdrop-blur-md rounded-xl">
            <div className="w-full h-20 bg-slate-600/30 backdrop-blur-md rounded-t-xl flex p-2 gap-2 mr-4">
              <div className="w-[50%] rounded-lg overflow-hidden">
                <img src={gensin} alt="" className="w-full h-16 object-cover" />
              </div>
              <div className="w-70 bg-slate-800/20 backdrop-blur-md p-2 flex flex-col gap-1 rounded-lg">
                <h1 className="text-white text-sm font-semibold">
                  Weekly Genesis Crystals
                </h1>
                <p className="text-white text-xs">Free 5k Genesis Crystals </p>
              </div>
            </div>
            <div className="w-full h-10 bg-red-50 rounded-b-xl px-2 py-4 flex justify-between items-center">
              <div className="px-6 text-xs font-semibold text-white py-1 bg-amber-700 rounded-full">
                {today.hours}:{today.minutes}:{today.seconds}
              </div>
              <div className="text-sm font-semibold text-green-600">-30%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Content */}
      <div className="w-full flex flex-wrap justify-between items-center gap-2">
        <Marquee autoFill pauseOnHover className="">
          {dataList.map((item) => (
            <div
              className="w-70 min-h-20 bg-slate-600/30 backdrop-blur-md rounded-lg flex p-2 gap-2 mr-4"
              key={item.id}
            >
              <div className="w-[50%] rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-16 object-cover"
                />
              </div>
              <div className="w-70 bg-slate-800/20 backdrop-blur-md p-2 flex flex-col gap-1 rounded-lg">
                <h1 className="text-white text-sm font-semibold">
                  {item.topup_package}
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-white text-sm line-through">
                    Rp. {item.price.toLocaleString()}
                  </p>
                  <p className="text-white text-sm">
                    Rp. {(item.price * 0.3).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Promo;
