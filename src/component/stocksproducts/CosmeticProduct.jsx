import React from "react";

import personalcarea from "../../assets/personalcarea.avif";
import personalcareb from "../../assets/personalcareb.avif";
import personalcarec from "../../assets/personalcarec.avif";
import personalcared from "../../assets/personalcared.avif";
import personalcaree from "../../assets/personalcaree.avif";
import personalcaref from "../../assets/personalcaref.avif";
import personalcareg from "../../assets/personalcareg.avif";
import personalcareh from "../../assets/personalcareh.avif";
import personalcarei from "../../assets/personalcarei.avif";
import personalcarej from "../../assets/personalcarej.avif";
import personalcarek from "../../assets/personalcarek.avif";
import personalcarel from "../../assets/personalcarel.avif";
import personalcarem from "../../assets/personalcarem.avif";
import personalcaren from "../../assets/personalcaren.avif";
import personalcareo from "../../assets/personalcareo.avif";
import personalcarep from "../../assets/personalcarep.avif";
import personalcareq from "../../assets/personalcareq.avif";
import personalcarer from "../../assets/personalcarer.avif";
import personalcares from "../../assets/personalcares.avif";
import personalcaret from "../../assets/personalcaret.avif";
import personalcareu from "../../assets/personalcareu.avif";
import personalcarev from "../../assets/personalcarev.avif";
import personalcarew from "../../assets/personalcarew.avif";
import personalcarex from "../../assets/personalcarex.avif";
import personalcarey from "../../assets/personalcarey.avif";
import personalcarez from "../../assets/personalcarez.avif";

function CosmeticProduct() {
  const card = [
    {
      image: personalcarea,
      name: "Gernier Salicylic Fresh & Matte Oil Free...",
      weight: "45 g",
      price: "₹270",
      delprice: "₹299",
    },
        {
      image: personalcareb,
      name: "Vaseline Petroleum Jelly",
      weight: "40 g",
      price: "₹104",
    },
        {
      image: personalcarec,
      name: "Nivea Body Milk Nourishing Body Lotion",
      weight: "120 ml",
      price: "₹130",
    },
        {
      image: personalcared,
      name: "Pilgrim Korean Rice Water Hydra Glow...",
      weight: "50 g",
      price: "₹264",
      delprice: "₹299",
    },
        {
      image: personalcaree,
      name: "Multani Natural Cocoa Body Lotion",
      weight: "400 ml",
      price: "₹149",
      delprice: "₹240",
    },
        {
      image: personalcaref,
      name: "Flicka Silk Touch 3 in 1 Milk Moisturizing...",
      weight: "60 g",
      price: "₹855",
      delprice: "₹899",
    },
        {
      image: personalcareg,
      name: "MARS Cosmatics Matte Box Lipstick Kit (Reds...",
      weight: "3 x 3.2 g",
      price: "₹390",
      delprice: "₹499",
    },
        {
      image: personalcareh,
      name: "Bella Vita Organic Women's Luxury...",
      weight: "4 x 20 ml",
      price: "₹499",
      delprice: "₹849",
    },
        {
      image: personalcarei,
      name: "Bella Vita Organic CEO Men's Eau de Parfum",
      weight: "100 ml",
      price: "₹449",
      delprice: "₹899",
    },
        {
      image: personalcarej,
      name: "Face Canada Ultime Pro Splash Mini Nail...",
      weight: "4 x 5 ml",
      price: "₹199",
    },
        {
      image: personalcarek,
      name: "Sensodyne Pronamel Toothpaste - Daily...",
      weight: "70 g",
      price: "₹130",
      delprice: "₹140",
    },
        {
      image: personalcarel,
      name: "Oral-B Pro Clean Sensitive & Gums...",
      weight: "1 pcs",
      price: "₹47",
      delprice: "₹50",
    },
        {
      image: personalcarem,
      name: "Colgate Strong Teeth Anticavity Toothpast...",
      weight: "150 g",
      price: "₹103",
    },
        {
      image: personalcaren,
      name: "Closeup White Now Stain Eraser Whitening...",
      weight: "100 g",
      price: "₹145",
      delprice: "₹170",
    },
        {
      image: personalcareo,
      name: "Sensodyne Sensitive Toothbrush (Soft...",
      weight: "1 pcs",
      price: "₹65",
    },
        {
      image:personalcarep,
      name: "Godrej Protekt Mr. Magic Hand Wash Mi...",
      weight: "5 x 9 g",
      price: "₹49",
    },
        {
      image: personalcareq,
      name: "Dettol Skincare Hand Wash Refill",
      weight: "675 ml",
      price: "₹101",
      delprice: "₹109",
    },
        {
      image: personalcarer,
      name: "Santoor Classic Gentle Hand Wash with...",
      weight: "1.3 ltr",
      price: "₹151",
      delprice: "₹209",
    },
        {
      image: personalcares,
      name: "Minimalist Salicylic Acid + LHA 02% Face...",
      weight: "250 ml",
      price: "₹570",
      delprice: "₹599",
    },
        {
      image: personalcaret,
      name: "Dot & Key Vitamin C + E Super Bright Gel...",
      weight: "100 ml",
      price: "₹225",
      delprice: "₹249",
    },
        {
      image: personalcareu,
      name: "Ghar Soaps De - Tanning Magic Face...",
      weight: "100 ml",
      price: "₹299",
      delprice: "₹333",
    },
        {
      image: personalcarev,
      name: "The Derma Co Sali- Cinamide Anti- Acne...",
      weight: "80 ml",
      price: "₹224",
      delprice: "₹249",
    },
        {
      image: personalcarew,
      name: "Veet Aloe Vera Sensitive Skin Hair...",
      weight: "30 g",
      price: "₹110",
      delprice: "₹115",
    },
        {
      image: personalcarex,
      name: "Pro-ease GO XL Sanitary Pads (280...",
      weight: "18 pcs",
      price: "₹119",
      delprice: "₹125",
    },
        {
      image: personalcarey,
      name: "VWash Plus Expert Hygiene Intimate Wash",
      weight: "100 ml",
      price: "₹183",
      delprice: "₹215",
    },
            {
      image: personalcarez,
      name: "Veet Professional Ready-to-use Normal...",
      weight: "8 pcs",
      price: "₹123",
      delprice: "₹129",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((home) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={home.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">17 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {home.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{home.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{home.price}</p>
                  <del className="text-gray-700">{home.delprice}</del>
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

export default CosmeticProduct;
