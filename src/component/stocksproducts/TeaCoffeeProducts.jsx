import React from "react";

import teaa from "../../assets/teaa.avif"
import teab from "../../assets/teab.avif"
import teac from "../../assets/teac.avif"
import tead from "../../assets/tead.avif"
import teae from "../../assets/teae.avif"
import teaf from "../../assets/teaf.avif"
import teag from "../../assets/teag.avif"
import teah from "../../assets/teah.avif"
import teai from "../../assets/teai.avif"
import teaj from "../../assets/teaj.avif"
import teak from "../../assets/teak.avif"
import teal from "../../assets/teal.avif"
import team from "../../assets/team.avif"
import tean from "../../assets/tean.avif"
import teao from "../../assets/teao.avif"

function TeaCoffeeProducts() {
  const card = [
    {
      image: teaa,
      name: "Brooke Bond Red Label Tea- 250 g",
      weight: "250 g",
      price: "₹130",
    },
     {
      image: teab,
      name: "Brooke Bond Taaza Tea 250 g",
      weight: "250 g",
      price: "₹60",
    },
      {
      image: teac,
      name: "Tata Tea Premium Tea",
      weight: "250 g",
      price: "₹130",
    },
      {
      image: tead,
      name: "Tata Tea Agni Elaichi Tea",
      weight: "250 g",
      price: "₹75",
    },
      {
      image: teae,
      name: "Maharani Premium Tea",
      weight: "500 g",
      price: "₹230",
      delprice: "₹260",
    },
      {
      image: teaf,
      name: "Tata Tea Gold",
      weight: "250 g",
      price: "₹185",
    },
      {
      image: teag,
      name: "Sleepy Owl Assorted Instant Coffee",
      weight: "10 pcs",
      price: "₹99",
      delprice: "₹140",
    },
      {
      image: teah,
      name: "Nescafe Classic- 100% Pure Instant Coffee...",
      weight: "24 g",
      price: "₹124",
    },
      {
      image: teai,
      name: "Nescafe Classic- 100% Pure Instant Coffee...",
      weight: "45 g",
      price: "₹210",
      delprice: "₹235",
    },
      {
      image: teaj,
      name: "Sleepy Owl Xpresso Intense Java Instant...",
      weight: "30 pcs",
      price: "₹100",
      delprice: "₹150",
    },
      {
      image: teak,
      name: "Bevzilla Hazelnut Instant Coffee Powder...",
      weight: "75 g",
      price: "₹183",
      delprice: "₹199",
    },
      {
      image: teal,
      name: "Nescafe Classic Pure Instant Coffee",
      weight: "30 x 2.2 g",
      price: "₹135",
      delprice: "₹150",
    },
     {
      image: team,
      name: "Wagh Bakri Sudh Kahwa Green Tea",
      weight: "25 pcs",
      price: "₹149",
      delprice: "₹300",
    },
     {
      image: tean,
      name: "Lipton Honey Lemon Green Tea Bags",
      weight: "25 pcs",
      price: "₹190",
      delprice: "₹200",
    },
     {
      image: teao,
      name: "Girnar Detox Desi Kahwa",
      weight: "10 pcs",
      price: "₹100",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((teacoffee) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={teacoffee.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">10 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {teacoffee.name}
              </h2>
              <span className="text-gray-700 text-[14px]">
                {teacoffee.weight}
              </span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{teacoffee.price}</p>
                  <del className="text-gray-700">{teacoffee.delprice}</del>
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

export default TeaCoffeeProducts;
