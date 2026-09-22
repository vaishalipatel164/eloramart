import React from "react";

import masalaa from "../../assets/masalaa.avif";
import masalab from "../../assets/masalab.avif";
import masalac from "../../assets/masalac.avif";
import masalad from "../../assets/masalad.avif";
import masalae from "../../assets/masalae.avif";
import masalaf from "../../assets/masalaf.avif";
import masalag from "../../assets/masalag.avif";
import masalah from "../../assets/masalah.avif";
import masalai from "../../assets/masalai.avif";
import masalaj from "../../assets/masalaj.avif";
import masalak from "../../assets/masalak.avif";
import masalal from "../../assets/masalal.avif";
import masalam from "../../assets/masalam.avif";
import masalan from "../../assets/masalan.avif";
import masalao from "../../assets/masalao.avif";
import masalap from "../../assets/masalap.avif";
import masalaq from "../../assets/masalaq.avif";
import masalar from "../../assets/masalar.avif";
import masalas from "../../assets/masalas.avif";
import masalat from "../../assets/masalat.avif";

function MasalaProduct() {
  const card = [
    {
      image: masalaa,
      name: "Orika Green Cardamom Powder",
      weight: "40 g",
      price: "₹266",
      delprice: "₹360",
    },
      {
      image: masalab,
      name: "Maggi Masala-ae-Magic Sabzi Masala",
      weight: "72 g",
      price: "₹60",
    },
      {
      image: masalac,
      name: "Catch Turmeric Powder/ haldi",
      weight: "100 g",
      price: "₹36",
      delprice: "₹43",
    },
      {
      image: masalad,
      name: "Orika Black Pepper Powder/ kali Mirch",
      weight: "100 g",
      price: "₹150",
      delprice: "₹215",
    },
      {
      image: masalae,
      name: "Catch Red Chilli Powder",
      weight: "100 g",
      price: "₹46",
      delprice: "₹68",
    },
      {
      image: masalaf,
      name: "Catch Coriander Powder/ Dhania",
      weight: "100 g",
      price: "₹38",
      delprice: "₹46",
    },
      {
      image: masalag,
      name: "Orika Southern Gun Powder (Podi Masala)",
      weight: "80 g",
      price: "₹118",
      delprice: "₹140",
    },
      {
      image: masalah,
      name: "Catch Compounded Hing Powder",
      weight: "25 g",
      price: "₹50",
      delprice: "₹74",
    },
      {
      image: masalai,
      name: "Everest Sambhar Masala",
      weight: "100 g",
      price: "₹95",
    },
      {
      image: masalaj,
      name: "Everest Kashmiri Red Chilli Powder",
      weight: "100 g",
      price: "₹132",
    },
      {
      image: masalak,
      name: "Orika Green Cardamom Whole",
      weight: "25 g",
      price: "₹179",
      delprice: "₹215",
    },
      {
      image: masalal,
      name: "Whole Farm Premium Cumin Seeds / Jeera...",
      weight: "100 g",
      price: "₹41",
      delprice: "₹125",
    },
      {
      image: masalam,
      name: "Whole Farm Premium Red Chilli Whole",
      weight: "100 g",
      price: "₹69",
      delprice: "₹75",
    },
      {
      image: masalan,
      name: "Whole Farm Premium Choti Elachi/ Green...",
      weight: "20 g",
      price: "₹181",
      delprice: "₹200",
    },
      {
      image: masalao,
      name: "Chukde Whole Garam Masala",
      weight: "100 g",
      price: "₹149",
      delprice: "₹200",
    },
      {
      image: masalap,
      name: "Fortune Premium Kachi Ghani Pure Mustard Oil",
      weight: "910 g",
      price: "₹191",
      delprice: "₹230",
    },
      {
      image: masalaq,
      name: "Fortune Soya Health- Refined Soyabean oil",
      weight: "1.001 kg",
      price: "₹180",
      delprice: "₹215",
    },
      {
      image: masalar,
      name: "Fortune Soya Health Refined Soyabean Oil",
      weight: "750 g",
      price: "₹149",
      delprice: "₹170",
    },
      {
      image: masalas,
      name: "Saloni Kachchi Ghani Mustard Oil",
      weight: "1 ltr",
      price: "₹193",
      delprice: "₹260",
    },
      {
      image: masalat,
      name: "Fortune Sunlite Refined Sunflower Oil (800 g)",
      weight: "800 g",
      price: "₹180",
      delprice: "₹205",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((masala) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={masala.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">10 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {masala.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{masala.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{masala.price}</p>
                  <del className="text-gray-700">{masala.delprice}</del>
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

export default MasalaProduct;
