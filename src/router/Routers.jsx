import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../layouts/Index";
import LandingPage from "../pages/LandingPage";
import OrderDetail from "../pages/OrderDetail";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route element={<Index />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/order/:id" element={<OrderDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
