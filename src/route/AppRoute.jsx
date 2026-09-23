import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../widgets/navbar/Navbar";
import Home from "../pages/Home";
import Productimage from "../component/productimage/Productimage";
import HealthImage from "../component/productimage/HealthImage";
import HomeCare from "../component/home/HomeCare";
import PetCareImage from "../component/productimage/PetCareImage";
import BabyCareImage from "../component/productimage/BabyCareImage";
import PaanCorner from "../component/stocksproducts/PaanCorner";
import DairyProducts from "../component/stocksproducts/DairyProducts";
import JuiceProducts from "../component/stocksproducts/JuiceProducts";
import SnacksProducts from "../component/stocksproducts/SnacksProducts";
import BreakfastFood from "../component/stocksproducts/BreakfastFood";
import SweetTooth from "../component/stocksproducts/SweetTooth";
import TeaCoffeeProducts from "../component/stocksproducts/TeaCoffeeProducts";
import AttaRiceProduct from "../component/stocksproducts/AttaRiceProduct";
import MasalaProduct from "../component/stocksproducts/MasalaProduct";
import SaucesProduct from "../component/stocksproducts/SaucesProduct";
import NonVegProduct from "../component/stocksproducts/NonVegProduct";
import CleaningProduct from "../component/stocksproducts/CleaningProduct";

function AppRoute() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/productimage" element={<Productimage />} />
           <Route path="/" element={<HomeCare />} />
           <Route path="/healthimage" element={<HealthImage />} />
           <Route path="/petcareimage" element={<PetCareImage />} />
           <Route path="/babycareimage" element={<BabyCareImage />} />
           <Route path="/paancorner" element={<PaanCorner />} />
           <Route path="/dairyproducts" element={<DairyProducts />} />
           <Route path="/juiceproducts" element={<JuiceProducts />} />
           <Route path="/snackproducts" element={<SnacksProducts />} />
           <Route path="/breakfastfood" element={<BreakfastFood />} />
           <Route path="/sweettooth" element={<SweetTooth />} />
           <Route path="/teacoffeeproduct" element={<TeaCoffeeProducts />} />
           <Route path="/attariceproduct" element={<AttaRiceProduct />} />
           <Route path="/masalaproduct" element={<MasalaProduct />} />
           <Route path="/saucesproduct" element={<SaucesProduct />} />
           <Route path="/nonvegproduct" element={<NonVegProduct />} />
           <Route path="/cleaningproduct" element={<CleaningProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoute;