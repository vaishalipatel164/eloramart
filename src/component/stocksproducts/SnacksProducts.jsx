import React from "react";

import chipsa from "../../assets/chipsa.avif";
import chipsb from "../../assets/chipsb.avif";
import chipsc from "../../assets/chipsc.avif";
import chipsd from "../../assets/chipsd.avif";
import chipse from "../../assets/chipse.avif";
import chipsf from "../../assets/chipsf.avif";
import ruska from "../../assets/ruska.avif";
import ruskb from "../../assets/ruskb.avif";
import ruskc from "../../assets/ruskc.avif";
import ruskd from "../../assets/ruskd.avif";
import energya from "../../assets/energya.avif";
import energyb from "../../assets/energyb.avif";
import energyc from "../../assets/energyc.avif";
import energyd from "../../assets/energyd.avif";
import snacksa from "../../assets/snacksa.avif";
import snacksb from "../../assets/snacksb.avif";
import snacksc from "../../assets/snacksc.avif";
import snacksd from "../../assets/snacksd.avif";
import snackse from "../../assets/snackse.avif";
import snacksf from "../../assets/snacksf.avif";
import snacksg from "../../assets/snacksg.avif";
import snacksh from "../../assets/snacksh.avif";
import snacksi from "../../assets/snacksi.avif";

function SnacksProducts() {
  const card = [
    {
      image: chipsa,
      name: "Bingo Mad Angles Achaari Masti...",
      weight: "60 g",
      price: "₹19",
      delprice: "₹20",
    },
    {
      image: chipsb,
      name: "Lay's India's Magic Masala Potato...",
      weight: "58 g",
      price: "₹25",
    },
    {
      image: chipsc,
      name: "Uncle Chipps Spicy Treat Potato Chips",
      weight: "53 g",
      price: "₹20",
    },
    {
      image: chipsd,
      name: "Kurkure Masala Munch Crisps",
      weight: "75 g",
      price: "₹20",
    },
    {
      image: chipse,
      name: "Beyond Snack Vibe Long Banana Chips...",
      weight: "50 g",
      price: "₹39",
      delprice: "₹50",
    },
    {
      image: chipsf,
      name: "Bingo Tedhe Medhe Masala Tadka Crisps",
      weight: "75 g",
      price: "₹16",
      delprice: "₹20",
    },
    {
      image: ruska,
      name: "Britannia Toastea Premium Bake Rusk...",
      weight: "250 g",
      price: "₹42",
      delprice: "₹50",
    },
    {
      image: ruskb,
      name: "Parle Real Elaichi Premium Rusk",
      weight: "291.2 g",
      price: "₹54",
      delprice: "₹60",
    },
    {
      image: ruskc,
      name: "Britannia Treat Strewbarry Flavoured...",
      weight: "55 g",
      price: "₹27",
      delprice: "₹50",
    },
    {
      image: ruskd,
      name: "Britannia Toastea Premium Bake Rusk...",
      weight: "1 kg",
      price: "₹167",
      delprice: "₹250",
    },
    {
      image: energya,
      name: "Green Protein Crave Assorted Mini Protein...",
      weight: "20 x 16 g",
      price: "₹1,197",
      delprice: "₹1,379",
    },
    {
      image: energyb,
      name: "RiteBite Max Protein Daily Choco Almond...",
      weight: "50 g",
      price: "₹80",
    },
    {
      image: energyc,
      name: "Yoga Bar Chocolate Chumk Nut Multigrain...",
      weight: "35 g",
      price: "₹48",
      delprice: "₹50",
    },
    {
      image: energyd,
      name: "SuperYou Chocolate Water Protein Bar",
      weight: "40 g",
      price: "₹58",
      delprice: "₹60",
    },
    {
      image: snacksa,
      name: "Sunfeast Dark Fantasy Choco Fill Cookies",
      weight: "69 g",
      price: "₹39",
      delprice: "₹40",
    },
    {
      image: snacksb,
      name: "Hide & Seek Chocolate Chip Cookies",
      weight: "200 g",
      price: "₹48",
      delprice: "₹60",
    },
    {
      image: snacksc,
      name: "Britannia Good Day Butter Cookies",
      weight: "248 g",
      price: "₹38",
      delprice: "₹40",
    },
    {
      image: snacksd,
      name: "Britannia Treat Jim Jam Sandwich Creme...",
      weight: "500 g",
      price: "₹97",
      delprice: "₹110",
    },
    {
      image: snackse,
      name: "Sunfeast Bourbon Dark Fantasy Biscuit",
      weight: "99 g",
      price: "₹15",
      delprice: "₹30",
    },
    {
      image: snacksf,
      name: "Sunfeast Dark Fantasy Choco Fill Cookies",
      weight: "69 g",
      price: "₹39",
      delprice: "₹40",
    },
    {
      image: snacksg,
      name: "Parle-G Glucose Biscuit",
      weight: "250 g",
      price: "₹30",
    },
    {
      image: snacksh,
      name: "Britannia Marie Gold Marie Biscuits",
      weight: "208 g",
      price: "₹38",
      delprice: "₹40",
    },
    {
      image: snacksi,
      name: "Britannia Milk Bikis-Biscuit",
      weight: "190.5 g",
      price: "₹30",
    },
  ];

  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((snacks) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={snacks.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">13 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {snacks.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{snacks.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{snacks.price}</p>
                  <del className="text-gray-700">{snacks.delprice}</del>
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

export default SnacksProducts;
