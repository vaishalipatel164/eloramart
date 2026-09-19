import React from "react";

import fastfooda from "../../assets/fastfooda.avif";
import fastfoodb from "../../assets/fastfoodb.avif";
import fastfoodc from "../../assets/fastfoodc.avif";
import fastfoodd from "../../assets/fastfoodd.avif";
import fastfoode from "../../assets/fastfoode.avif";
import fastfoodf from "../../assets/fastfoodf.avif";
import fastfoodg from "../../assets/fastfoodg.avif";
import fastfoodh from "../../assets/fastfoodh.avif";
import fastfoodi from "../../assets/fastfoodi.avif";
import fastfoodj from "../../assets/fastfoodj.avif";
import fastfoodk from "../../assets/fastfoodk.avif";
import fastfoodl from "../../assets/fastfoodl.avif";
import fastfoodm from "../../assets/fastfoodm.avif";

function BreakfastFood() {
  const card = [
    {
      image: fastfooda,
      name: "Cheffin Khow Suey Flavoured Instant...",
      weight: "310 g",
      price: "₹198",
      delprice: "₹249",
    },
    {
      image: fastfoodb,
      name: "Maggi Double Masala Instant Noodles",
      weight: "95 g",
      price: "₹20",
    },
    {
      image: fastfoodc,
      name: "Maggi Nutrilicious Veg Atta Noodles Made...",
      weight: "290",
      price: "₹106",
      delprice: "₹116",
    },
    {
      image: fastfoodd,
      name: "Maggi 2- Minute Instant Noodles Made...",
      weight: "840 g",
      price: "₹162",
      delprice: "₹180",
    },
    {
      image: fastfoode,
      name: "Maggi Masala Cuppa Noodles",
      weight: "70.5 g",
      price: "₹55",
    },
      {
      image: fastfoodf,
      name: "Cheffin Pad Thai Flavoured Instant...",
      weight: "190 g",
      price: "₹147",
      delprice: "₹199",
    },
      {
      image: fastfoodg,
      name: "Yippee Magic Masala Instant Noodles With...",
      weight: "290.4 g",
      price: "₹52",
      delprice: "₹60",
    },
      {
      image: fastfoodh,
      name: "Maggi Pazzta Cheese Macaroni Instant Pasta",
      weight: "75 g",
      price: "₹35",
    },
      {
      image: fastfoodi,
      name: "Maggi Pazzta Masala Penne Instant Pasta",
      weight: "69.5 g",
      price: "₹35",
    },
      {
      image: fastfoodj,
      name: "Disano Elbow Pasta (100% Durum Wheat)",
      weight: "500 g",
      price: "₹79",
      delprice: "₹175",
    },
      {
      image: fastfoodk,
      name: "Ching's Secret Mix Veg Soup",
      weight: "55 g",
      price: "₹45",
      delprice: "₹60",
    },
      {
      image: fastfoodl,
      name: "Knorr Hot & Soup Vegetable Soup With...",
      weight: "41 g",
      price: "₹61",
      delprice: "₹64",
    },
      {
      image: fastfoodm,
      name: "Knorr Classic Sweet Corn Vegetable Soup...",
      weight: "42 g",
      price: "₹61",
      delprice: "₹64",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((fastfood) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={fastfood.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">13 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {fastfood.name}
              </h2>
              <span className="text-gray-700 text-[14px]">
                {fastfood.weight}
              </span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{fastfood.price}</p>
                  <del className="text-gray-700">{fastfood.delprice}</del>
                </div>
                <div>
                  <button className="border w-20 h-10 rounded text-green-700 bg-green-50 font-semibold">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default BreakfastFood;
