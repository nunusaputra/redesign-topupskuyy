import React from "react";
import SideContent from "../components/SideContent";
import DetailContent from "../components/DetailContent";

const OrderDetail = () => {
  return (
    <section className="w-full mx-auto lg:flex lg:gap-10">
      <SideContent />
      <DetailContent />
    </section>
  );
};

export default OrderDetail;
