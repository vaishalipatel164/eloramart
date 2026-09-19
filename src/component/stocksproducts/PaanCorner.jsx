import React from "react";

import cigarettea from "../../assets/cigarettea.avif";
import cigaretteb from "../../assets/cigaretteb.avif";
import cigarettec from "../../assets/cigarettec.avif";
import cigaretted from "../../assets/cigaretted.avif";
import cigarettee from "../../assets/cigarettee.avif";
import cigarettef from "../../assets/cigarettef.avif";
import cigara from "../../assets/cigara.avif";
import cigarb from "../../assets/cigarb.avif";
import cigarc from "../../assets/cigarc.avif";
import cigard from "../../assets/cigard.avif";
import paana from "../../assets/paana.avif";
import paanb from "../../assets/paanb.avif";
import paanc from "../../assets/paanc.avif";
import paand from "../../assets/paand.avif";
import rollinga from "../../assets/rollinga.avif";
import rollingb from "../../assets/rollingb.avif";
import rollingc from "../../assets/rollingc.avif";
import rollingd from "../../assets/rollingd.avif";
import nicotex from "../../assets/nicotex.avif";
import ryze from "../../assets/ryze.avif";

function PaanCorner() {
  const card = [
    {
      image: cigarettea,
      name: "Marlboro Advance Compact",
      weight: "10 pcs",
      price: "₹122",
    },
    {
      image: cigaretteb,
      name: "Classic Connect",
      weight: "20 pcs",
      price: "₹390",
    },
    {
      image: cigarettec,
      name: "Gold Flake Premium Filter",
      weight: "10 pcs",
      price: "₹125",
    },
    {
      image: cigaretted,
      name: "Marlboro Advance",
      weight: "10 pcs",
      price: "₹240",
    },
    {
      image: cigarettee,
      name: "Gold Flake Indie Mint",
      weight: "10 pcs",
      price: "₹125",
    },
    {
      image: cigarettef,
      name: "Classic Balanced Taste (milds)",
      weight: "20 pcs",
      price: "480",
    },
    {
      image: cigara,
      name: "Black n More Orange Mint Club",
      weight: "5 pcs",
      price: "₹280",
    },
    {
      image: cigarb,
      name: "Black n More Blueberry Club",
      weight: "5 pcs",
      price: "₹80",
    },
    {
      image: cigarc,
      name: "Black n More Strawberry Club",
      weight: "5 pcs",
      price: "₹280",
    },
    {
      image: cigard,
      name: "Black n More Watermelon Club",
      weight: "5 pcs",
      price: "₹280",
    },
    {
      image: paana,
      name: "Rajnigandha Pan Masala- 51 g",
      weight: "3 x 17 g",
      price: "₹210",
    },
    {
      image: paanb,
      name: "Rajnigandha Pan Masala- 100 g",
      weight: "100 g",
      price: "₹350",
    },
    {
      image: paanc,
      name: "Rajnigandha Pan Masala 51 g",
      weight: "13 x 2.2 g",
      price: "₹130",
    },
    {
      image: paand,
      name: "Rajnigandha Clove Flavoured Pan Masala",
      weight: "100 g",
      price: "₹350",
    },
    {
      image: rollinga,
      name: "Perfect Rolled Cones (Natural)- Bongchie",
      weight: "3 pcs",
      price: "₹45",
    },
    {
      image: rollingb,
      name: "Thins Pre-Rolled Rolling Paper- LIT",
      weight: "1 pack",
      price: "₹25",
    },
    {
      image: rollingc,
      name: "Ultimate Rolling Paper With Filter...",
      weight: "32 pcs",
      price: "₹90",
    },
    {
      image: rollingd,
      name: "Dollar Pre-rolled Rolling Paper...",
      weight: "3 pcs",
      price: "₹60",
    },
    {
      image: nicotex,
      name: "Nicotex 4 mg Mint Plus Suger Free Gum",
      weight: "30 pcs",
      price: "₹365",
      delprice: "₹368",
    },
    {
      image: ryze,
      name: "Ryze Royal Paan Flavoured Nicotine Gum",
      weight: "9 x 2 mg",
      price: "₹68",
      delprice: "₹80",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((paan) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={paan.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">13 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {paan.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{paan.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{paan.price}</p>
                  <del className="text-gray-700">{paan.delprice}</del>
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

export default PaanCorner;
