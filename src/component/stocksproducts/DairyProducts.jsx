import React from "react";

import milka from "../../assets/milka.avif";
import milkb from "../../assets/milkb.avif";
import milkc from "../../assets/milkc.avif";
import milkd from "../../assets/milkd.avif";
import breada from "../../assets/breada.avif";
import breadb from "../../assets/breadb.avif";
import breadc from "../../assets/breadc.avif";
import breadd from "../../assets/breadd.avif";
import flakesa from "../../assets/flakesa.avif";
import flakesb from "../../assets/flakesb.avif";
import flakesc from "../../assets/flakesc.avif";
import flakesd from "../../assets/flakesd.avif";
import mueslia from "../../assets/mueslia.avif";
import mueslib from "../../assets/mueslib.avif";
import mueslic from "../../assets/mueslic.avif";
import mueslid from "../../assets/mueslid.avif";
import oatsa from "../../assets/oatsa.avif";
import oatsb from "../../assets/oatsb.avif";
import oatsc from "../../assets/oatsc.avif";
import oatsd from "../../assets/oatsd.avif";

function DairyProducts() {
  const card = [
    {
      image: milka,
      name: "Amul Gold Full Cream Milk",
      weight: "500 ml",
      price: "₹36",
    },
    {
      image: milkb,
      name: "Amul Taaza Toned Milk",
      weight: "500 ml",
      price: "₹30",
    },
    {
      image: milkc,
      name: "Amul Cow Milk",
      weight: "500 ml",
      price: "₹31",
    },
    {
      image: milkd,
      name: "Amul Moti Toned Milk (90 Days Shelf Life)",
      weight: "450 ml",
      price: "₹33",
    },
    {
      image: breada,
      name: "Family Makhan Malai Bread",
      weight: "450 g",
      price: "₹45",
    },
    {
      image: breadb,
      name: "Good Morning Malai Milk Bread",
      weight: "400 g",
      price: "₹40",
    },
    {
      image: breadc,
      name: "Brano Plus Milk Bread",
      weight: "270 g",
      price: "₹35",
    },
    {
      image: breadd,
      name: "The Health Factory Zero Maida Whole...",
      weight: "250 g",
      price: "₹55",
    },
    {
      image: flakesa,
      name: "Kellogg's Multigrain Chocos Variety Pack",
      weight: "7 pcs",
      price: "₹64",
      delprice: "₹70",
    },
    {
      image: flakesb,
      name: "Kwality Corn Flakes",
      weight: "500 g",
      price: "₹94",
      delprice: "₹240",
    },
    {
      image: flakesc,
      name: "Kellogg's Multigrain Chocos More",
      weight: "385 g",
      price: "₹203",
      delprice: "₹210",
    },
    {
      image: flakesd,
      name: "Kellogg's Double Chocolaty Fills...",
      weight: "250 g",
      price: "₹178",
      delprice: "₹195",
    },
    {
      image: mueslia,
      name: "True Elements Fruits, Nuts & Seeds...",
      weight: "1 kg",
      price: "₹445",
      delprice: "₹649",
    },
    {
      image: mueslib,
      name: "Kellogg's Fruit, Nut & Seeds Muesli",
      weight: "65 g",
      price: "₹30",
      delprice: "₹57",
    },
    {
      image: mueslic,
      name: "Kellogg's Muesli Fruits, Nut & Seeds",
      weight: "750 g",
      price: "₹347",
      delprice: "₹409",
    },
    {
      image: mueslid,
      name: "Kellogg's Muesli Fruit, Nut & Seeds",
      weight: "240 g",
      price: "₹158",
      delprice: "₹105",
    },
    {
      image: oatsa,
      name: "GOAT Life High Protein Overnight Instant...",
      weight: "75 g",
      price: "₹139",
    },
    {
      image: oatsb,
      name: "Quaker Rolled Instant Oats",
      weight: "400 g",
      price: "₹86",
    },
    {
      image: oatsc,
      name: "Saffola Classic-Masala Oats",
      weight: "38 g",
      price: "₹20",
    },
    {
      image: oatsd,
      name: "Saffola Classic-Masala Instant Oats",
      weight: "225 g",
      price: "₹100",
      delprice: "₹170",
    },
  ];

  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((dairy) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={dairy.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">13 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {dairy.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{dairy.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{dairy.price}</p>
                  <del className="text-gray-700">{dairy.delprice}</del>
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

export default DairyProducts;
