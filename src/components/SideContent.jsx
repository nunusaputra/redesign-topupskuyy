import React, { useEffect, useState } from "react";
import ml from "../assets/images/ml.jpeg";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { dataList } from "../services";

const SideContent = () => {
  const { id } = useParams();
  const data = dataList.find((item) => item.id === parseInt(id));

  return (
    <div className="w-full min-h-16 bg-slate-600/30 backdrop-blur-xl border-2 border-slate-700 shadow-black rounded-lg flex flex-col gap-5 lg:w-[35%] lg:h-screen lg:overflow-auto lg:sticky lg:top-20 p-4">
      {/* Image Content */}
      <div className="w-full min-h-30 px-4 py-2 flex flex-col 2xl:flex-row items-center gap-2 bg-[#121c32] rounded-lg shadow-lg">
        <div className="w-45 md:w-50 lg:w-35 h-30 sm:h-20 rounded-lg overflow-hidden">
          <img src={data.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-65 h-20 rounded-lg overflow-hidden flex flex-col justify-center items-center 2xl:justify-start 2xl:items-start gap-2 px-2 2xl:bg-slate-600/40 backdrop-blur-2xl">
          <h1 className="text-md text-white font-bold tracking-wide">
            {data.name}
          </h1>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-600/30 backdrop-blur-xl border-1 border-slate-600">
              <BsFillShieldLockFill className="text-sm text-orange-500" />
              <h1 className="text-white text-xs">Secure</h1>
            </div>
            <div className="flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-600/30 backdrop-blur-xl border-1 border-slate-600">
              <AiFillThunderbolt className="text-sm text-orange-500" />
              <h1 className="text-white text-xs">Instant</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Description Content */}
      <div className="w-full min-h-30 px-4 py-6 flex flex-col gap-2 bg-[#121c32] rounded-lg shadow-lg">
        <div className="w-full h-8 bg-slate-600/30 backdrop-blur-xl shadow-black rounded-lg px-3 py-1">
          <h1 className="text-white text-sm font-semibold">CARA TOP UP</h1>
        </div>
        <div className="text-white px-4 text-sm">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Masukkan User ID Kamu</li>
            <li>Pilih produk yang kamu inginkan</li>
            <li>Selesaikan pembayaran</li>
            <li>Top up produk akan ditambahkan ke akun Free Fire kamu </li>
          </ol>
        </div>
        <div className="mt-5">
          <div className="w-full h-8 bg-slate-600/30 backdrop-blur-xl shadow-black rounded-lg px-3 py-1">
            <h1 className="text-white text-sm font-semibold">
              INFORMASI PENTING!
            </h1>
          </div>
          <div className="text-white px-4 text-sm mt-2">
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Pastikan akun sudah sesuai aplikasi di device masing-masing
              </li>
              <li>Proses Topup selama 0-20 Menit</li>
              <li>Input no whatsapp jangan ada spasi</li>
            </ol>
          </div>
        </div>
        <div className="mt-5">
          <div className="w-full h-8 bg-slate-600/30 backdrop-blur-xl shadow-black rounded-lg px-3 py-1">
            <h1 className="text-white text-sm font-semibold">NOTE</h1>
          </div>
          <div className="text-white px-4 text-sm mt-2">
            Pembelian weekly maksimal 10x atau 70 hari (lebih dari itu weekly
            tidak masuk atau hangus)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
