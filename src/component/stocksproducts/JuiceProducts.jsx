import React from "react";

import softdrinka from "../../assets/softdrinka.avif";
import softdrinkb from "../../assets/softdrinkb.avif";
import softdrinkc from "../../assets/softdrinkc.avif";
import softdrinkd from "../../assets/softdrinkd.avif";
import softdrinke from "../../assets/softdrinke.avif";
import fruitjuicea from "../../assets/fruitjuicea.avif";
import fruitjuiceb from "../../assets/fruitjuiceb.avif";
import fruitjuicec from "../../assets/fruitjuicec.avif";
import fruitjuiced from "../../assets/fruitjuiced.avif";
import fruitjuicee from "../../assets/fruitjuicee.avif";

function JuiceProducts() {
  const card = [
    {
      image: softdrinka,
      name: "Thums Up Soft Drink Drink",
      weight: "750 ml",
      price: "₹38",
      delprice: "₹40",
    },
    {
      image: softdrinkb,
      name: "Sprite Lime Flavored Soft Drink",
      weight: "750 ml",
      price: "₹38",
      delprice: "₹40",
    },
    {
      image: softdrinkc,
      name: "Coca-Cola Soft Drink",
      weight: "750 ml",
      price: "₹38",
      delprice: "₹40",
    },
    {
      image: softdrinkd,
      name: "Coca-Cola Soft Drink",
      weight: "180 ml",
      price: "₹30",
    },
    {
      image: softdrinke,
      name: "Coca-Cola Soft Drink",
      weight: "300 ml",
      price: "₹40",
    },
    {
      image: fruitjuicea,
      name: "Maaza Mango Drink 600 ml",
      weight: "600 ml",
      price: "₹34",
      delprice: "₹35",
    },
    {
      image: fruitjuicee,
      name: "Paper Boat Jamun, Fruit Juice (Zero...",
      weight: "200 ml",
      price: "₹55",
    },
    {
      image: fruitjuicec,
      name: "7UP Nimbooz with Lemon Juice",
      weight: "350 ml",
      price: "₹25",
    },
    {
      image: fruitjuiced,
      name: "Paper Boat Nata De Coca Lychee Juice",
      weight: "250 ml",
      price: "₹40",
    },
    {
      image: fruitjuiceb,
      name: "Maaza Mango Drink",
      weight: "1.75 ltr",
      price: "₹79",
      delprice: "₹99",
    },
  ];

  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((juice) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={juice.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold text-yellow-900">
                13 MINS
              </p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {juice.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{juice.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{juice.price}</p>
                  <del className="text-gray-700">{juice.delprice}</del>
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

export default JuiceProducts;
