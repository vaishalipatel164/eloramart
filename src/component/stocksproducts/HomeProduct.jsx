import React from "react";

import homea from "../../assets/homea.avif";
import homeb from "../../assets/homeb.avif";
import homec from "../../assets/homec.avif";
import homed from "../../assets/homed.avif";
import homee from "../../assets/homee.avif";
import homef from "../../assets/homef.avif";
import homeg from "../../assets/homeg.avif";
import homeh from "../../assets/homeh.avif";
import homei from "../../assets/homei.avif";
import homej from "../../assets/homej.avif";
import homek from "../../assets/homek.avif";
import homel from "../../assets/homel.avif";
import homem from "../../assets/homem.avif";
import homen from "../../assets/homen.avif";
import homeo from "../../assets/homeo.avif";
import homep from "../../assets/homep.avif";

function HomeProduct() {
  const card = [
    {
      image: homea,
      name: "Cow Ghee Diya Batti by Divya Sutra",
      weight: "50 pcs",
      price: "₹169",
      delprice: "₹399",
    },
    {
      image: homeb,
      name: "Pooja Flower Mix",
      weight: "100 g",
      price: "₹35",
      delprice: "₹44",
    },
    {
      image: homec,
      name: "Mangaldeep Temple Sanctum Camphor &...",
      weight: "20 pcs",
      price: "₹119",
      delprice: "₹125",
    },
    {
      image: homed,
      name: "Matchbox by Homelites",
      weight: "5 pcs",
      price: "₹10",
    },
    {
      image: homee,
      name: "Betel Leaves (Paan Patta)",
      weight: "5 pcs",
      price: "₹21",
      delprice: "₹26",
    },
    {
      image: homef,
      name: "Fresh Garland- Orange Marigold (Genda)",
      weight: "1 pcs",
      price: "₹59",
      delprice: "₹72",
    },
    {
      image: homeg,
      name: "Rose (Flowers & Petals)",
      weight: "100 g",
      price: "₹45",
      delprice: "₹57",
    },
    {
      image: homeh,
      name: "Ceramic Diffuser Gift Set (Lemongrass,...",
      weight: "5 pcs",
      price: "₹199",
      delprice: "₹399",
    },
    {
      image: homei,
      name: "Aroma Oil Diffuser Set (Lemonhrass &...",
      weight: "1 set",
      price: "₹149",
      delprice: "₹399",
    },
    {
      image: homej,
      name: "Tea Light Candles (Unscented) by...",
      weight: "30 pcs",
      price: "₹89",
      delprice: "₹199",
    },
    {
      image: homek,
      name: "Marble Adhesive Wallpaper (White)...",
      weight: "1 roll",
      price: "₹249",
      delprice: "₹399",
    },
    {
      image: homel,
      name: "Ajanta Quartz Wall Clock Abstract Metal...",
      weight: "1 pcs",
      price: "₹575",
    },
    {
      image: homem,
      name: "Pink Haveli Votive Scented Jar Candle...",
      weight: "1 pcs",
      price: "₹106",
      delprice: "₹112",
    },
    {
      image: homen,
      name: "Plastic Modak Mould Set (Yellow)- Picfest",
      weight: "2 pcs",
      price: "₹39",
      delprice: "₹249",
    },
    {
      image: homeo,
      name: "Metallic Spiral Cake Stick Candle Party...",
      weight: "6 pcs",
      price: "₹79",
      delprice: "₹299",
    },
    {
      image: homep,
      name: "Manual Hand Balloon Pump by Propsicle...",
      weight: "1 pcs",
      price: "₹199",
      delprice: "₹399",
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

export default HomeProduct;
