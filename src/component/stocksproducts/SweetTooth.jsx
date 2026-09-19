import React from "react";

import sweettootha from "../../assets/sweettootha.avif";
import sweettoothb from "../../assets/sweettoothb.avif";
import sweettoothc from "../../assets/sweettoothc.avif";
import sweettoothd from "../../assets/sweettoothd.avif";
import sweettoothe from "../../assets/sweettoothe.avif";
import sweettoothf from "../../assets/sweettoothf.avif";
import sweettoothg from "../../assets/sweettoothg.avif";
import sweettoothh from "../../assets/sweettoothh.avif";
import sweettoothi from "../../assets/sweettoothi.avif";
import sweettoothj from "../../assets/sweettoothj.avif";
import sweettoothk from "../../assets/sweettoothk.avif";
import sweettoothl from "../../assets/sweettoothl.avif";
import sweettoothm from "../../assets/sweettoothm.avif";
import sweettoothn from "../../assets/sweettoothn.avif";
import sweettootho from "../../assets/sweettootho.avif";
import sweettoothp from "../../assets/sweettoothp.avif";
import sweettoothq from "../../assets/sweettoothq.avif";
import sweettoothr from "../../assets/sweettoothr.avif";

function SweetTooth() {
  const card = [
    {
      image: sweettootha,
      name: "Nestle KitKat 4 Fingers Choco Coated Wafer...",
      weight: "38.5 g",
      price: "₹30",
    },
     {
      image: sweettoothb,
      name: "Amul Dark Chocolate Bar",
      weight: "35 g",
      price: "₹45",
    },
     {
      image: sweettoothc,
      name: "Cadbury Dairy Milk Milkinis Milk Chocolate",
      weight: "34 g",
      price: "₹36",
    },
     {
      image: sweettoothd,
      name: "Nestle Munch Max Choco Coated Crunch...",
      weight: "38.5 g",
      price: "₹20",
    },
     {
      image: sweettoothe,
      name: "Amul Sugar Dark Chocolate Bar",
      weight: "35 g",
      price: "₹45",
    },
     {
      image: sweettoothf,
      name: "Cadbury Dairy Milk Silk Oreo Milk Chocolate...",
      weight: "58.5 g",
      price: "₹100",
    },
     {
      image: sweettoothg,
      name: "Cadbury Gems Duo Chocolate Pack",
      weight: "24.97 g",
      price: "₹20",
    },
     {
      image: sweettoothh,
      name: "Kinder Joy Pink 20g",
      weight: "20 g",
      price: "₹50",
    },
     {
      image: sweettoothi,
      name: "Kinder Joy Blue 20g",
      weight: "20 g",
      price: "₹50",
    },
     {
      image: sweettoothj,
      name: "Cadbury Dairy Milk Crispello Milk...",
      weight: "35 g",
      price: "₹40",
    },
     {
      image: sweettoothk,
      name: "Cadbury Celebrations Assorted Chocolate...",
      weight: "51.2 g",
      price: "₹50",
    },
     {
      image: sweettoothl,
      name: "Ferrero Rocher Chocolate Gift Pack (...",
      weight: "50 g",
      price: "₹179",
    },
     {
      image: sweettoothm,
      name: "Ferrero Rocher Moments Chocolate...",
      weight: "89.6 g",
      price: "₹255",
      delprice: "₹269",
    },
     {
      image: sweettoothn,
      name: "Ferrero Rocher Chocolate Gift Pack (...",
      weight: "300 g",
      price: "₹770",
      delprice: "₹879",
    },
     {
      image: sweettootho,
      name: "Havmor Slice Cassata Ice Cream",
      weight: "2 x 150 ml",
      price: "₹129",
      delprice: "₹130",
    },
     {
      image: sweettoothp,
      name: "Vadilal Chocolate Chips Ice Cream Cake",
      weight: "500 ml",
      price: "₹279",
      delprice: "₹300",
    },
     {
      image: sweettoothq,
      name: "Vadilal Matka Kulfi",
      weight: "3 x 100 ml",
      price: "₹166",
      delprice: "₹180",
    },
     {
      image: sweettoothr,
      name: "Kwality Wall's Cornetto Double Chocolate...",
      weight: "105 ml",
      price: "₹40",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((sweettooth) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={sweettooth.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">12 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {sweettooth.name}
              </h2>
              <span className="text-gray-700 text-[14px]">
                {sweettooth.weight}
              </span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{sweettooth.price}</p>
                  <del className="text-gray-700">{sweettooth.delprice}</del>
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

export default SweetTooth;
