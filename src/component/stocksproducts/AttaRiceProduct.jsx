import React from "react";

import attaa from "../../assets/attaa.avif";
import attab from "../../assets/attab.avif";
import attac from "../../assets/attac.avif";
import attad from "../../assets/attad.avif";
import attae from "../../assets/attae.avif";
import attaf from "../../assets/attaf.avif";
import attag from "../../assets/attag.avif";
import attah from "../../assets/attah.avif";
import attai from "../../assets/attai.avif";
import attaj from "../../assets/attaj.avif";
import attak from "../../assets/attak.avif";
import attal from "../../assets/attal.avif";
import attam from "../../assets/attam.avif";
import attan from "../../assets/attan.avif";
import attao from "../../assets/attao.avif";
import attap from "../../assets/attap.avif";
import attaq from "../../assets/attaq.avif";
import attar from "../../assets/attar.avif";
import attas from "../../assets/attas.avif";
import attat from "../../assets/attat.avif";
import organica from "../../assets/organica.avif";
import organicb from "../../assets/organicb.avif";
import organicc from "../../assets/organicc.avif";
import organicd from "../../assets/organicd.avif";
import organice from "../../assets/organice.avif";
import organicf from "../../assets/organicf.avif";
import organicg from "../../assets/organicg.avif";
import organich from "../../assets/organich.avif";
import organici from "../../assets/organici.avif";

function AttaRiceProduct() {
  const card = [
    {
      image: attaa,
      name: "24 Mantra Organic Whole Wheat Atta",
      weight: "5 kg",
      price: "₹298",
      delprice: "₹399",
    },
    {
      image: organicd,
      name: "Anveshan Desi Cow A2 Ghee- Bilona Churned",
      weight: "150 ml",
      price: "₹229",
      delprice: "₹350",
    },
    {
      image: organice,
      name: "Natureland Organics Organic Cold Pressed...",
      weight: "1 ltr",
      price: "₹247",
      delprice: "₹375",
    },
    {
      image: organicf,
      name: "Barosi Desi Cow A2 Ghee (500 ml)",
      weight: "500 ml",
      price: "₹887",
      delprice: "₹1,080",
    },
    {
      image: attab,
      name: "Aashirvaad Shudh Chakki Atta (100%...",
      weight: "5 kg",
      price: "₹246",
      delprice: "₹267",
    },
    {
      image: attac,
      name: "Aashirvaad High Fibre Atta With Multigrains...",
      weight: "5 kg",
      price: "₹299",
      delprice: "₹382",
    },
    {
      image: attad,
      name: "Aashirvaad Shudh Chakki Atta (100%...",
      weight: "10 kg",
      price: "₹458",
      delprice: "₹499",
    },
    {
      image: attae,
      name: "Fortune Fresh (100% Atta, 0% Maida) Cha...",
      weight: "5 kg",
      price: "₹232",
      delprice: "₹250",
    },
    {
      image: attaf,
      name: "Whole Farm Chakki Atta (100% Atta, 0% M...",
      weight: "5 kg",
      price: "₹208",
      delprice: "₹290",
    },
    {
      image: organicg,
      name: "Organic Box Anjeer",
      weight: "250 g",
      price: "₹299",
      delprice: "₹799",
    },
    {
      image: organich,
      name: "Organic Box Premium Dry Fruit Mix",
      weight: "500 g",
      price: "₹399",
      delprice: "₹799",
    },
    {
      image: organici,
      name: "AMAYU Premium Mix Dry Fruits & Seeds Tr...",
      weight: "900 g",
      price: "₹699",
      delprice: "₹2,396",
    },
    {
      image: attag,
      name: "Zeeba Everyday Basmati Rice (Medium...",
      weight: "5 kg",
      price: "₹326",
      delprice: "₹570",
    },
    {
      image: attah,
      name: "Fortune Rozana-Gold Basmati Rice (Long...",
      weight: "1 kg",
      price: "₹104",
      delprice: "₹120",
    },
    {
      image: attai,
      name: "Whole Farm Premium Parmal Rice",
      weight: "1 kg",
      price: "₹65",
      delprice: "₹120",
    },
    {
      image: attaj,
      name: "India Gate Mogra Delite/Mini Mogra...",
      weight: "5 kg",
      price: "₹351",
      delprice: "₹385",
    },
    {
      image: organica,
      name: "Organic Tattva Wheat Organic Atta",
      weight: "1 kg",
      price: "₹76",
      delprice: "₹95",
    },
    {
      image: organicb,
      name: "Organic Tattva Organic Ragi Flour",
      weight: "500 g",
      price: "₹59",
      delprice: "₹99",
    },
    {
      image: organicc,
      name: "Natureland Organics Wheat Organic Sooji",
      weight: "500 g",
      price: "₹47",
      delprice: "₹75",
    },
    {
      image: attak,
      name: "India Gate Super Basmati Rice (Extra...",
      weight: "5 kg",
      price: "₹851",
      delprice: "₹1,002",
    },
    {
      image: attal,
      name: "India Gate Everyday Basmati Rice (Mediu...",
      weight: "1 kg",
      price: "₹97",
      delprice: "₹104",
    },
    {
      image: attam,
      name: "24 Mantra Organic Tur/ Arhar Dal",
      weight: "1 kg",
      price: "₹224",
      delprice: "₹295",
    },
    {
      image: attan,
      name: "Basic ARHAR? TOOR DAL Toor Dal",
      weight: "1 kg",
      price: "₹144",
      delprice: "₹240",
    },
    {
      image: attao,
      name: "Tata Sampann Unpolished Toor Dal",
      weight: "500 g",
      price: "₹103",
      delprice: "₹118",
    },
    {
      image: attap,
      name: "Whole Farm Premium Kala Chana/ Brown...",
      weight: "500 g",
      price: "₹60",
      delprice: "₹115",
    },
    {
      image: attaq,
      name: "24 Mantra Organic Urad (Sabut)",
      weight: "500 g",
      price: "₹180",
    },
    {
      image: attar,
      name: "Tata Sampann 100% Chana Dal Fine...",
      weight: "500 g",
      price: "₹70",
      delprice: "₹80",
    },
    {
      image: attas,
      name: "Fortune Sooji",
      weight: "500 g",
      price: "₹40",
      delprice: "₹45",
    },
    {
      image: attat,
      name: "Rajdhani Sooji/ Rava",
      weight: "500 g",
      price: "₹39",
      delprice: "₹50",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((attarice) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={attarice.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">22 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {attarice.name}
              </h2>
              <span className="text-gray-700 text-[14px]">
                {attarice.weight}
              </span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{attarice.price}</p>
                  <del className="text-gray-700">{attarice.delprice}</del>
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

export default AttaRiceProduct;
