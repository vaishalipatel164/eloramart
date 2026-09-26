import { React } from "react";

import cleana from "../../assets/cleana.avif";
import cleanb from "../../assets/cleanb.avif";
import cleanc from "../../assets/cleanc.avif";
import cleand from "../../assets/cleand.avif";
import cleane from "../../assets/cleane.avif";
import cleanf from "../../assets/cleanf.avif";
import cleang from "../../assets/cleang.avif";
import cleanh from "../../assets/cleanh.avif";
import cleani from "../../assets/cleani.avif";
import cleanj from "../../assets/cleanj.avif";
import cleank from "../../assets/cleank.avif";
import cleanl from "../../assets/cleanl.avif";
import cleanm from "../../assets/cleanm.avif";
import cleann from "../../assets/cleann.avif";
import cleano from "../../assets/cleano.avif";

function CleaningProduct() {
  const card = [
    {
      image: cleana,
      name: "Savlon Disinfectant & Refreshing Fabric...",
      weight: "890 ml",
      price: "₹248",
      delprice: "₹310",
    },
    {
      image: cleanb,
      name: "Rin Ala Fabric Whitener",
      weight: "500 ml",
      price: "₹90",
    },
    {
      image: cleanc,
      name: "Vanish Oxi Action Fabric Stain Remover",
      weight: "180 ml",
      price: "₹78",
      delprice: "₹80",
    },
    {
      image: cleand,
      name: "Comfort After Wash Fabric Conditioner...",
      weight: "210 ml",
      price: "₹55",
      delprice: "₹60",
    },
    {
      image: cleane,
      name: "Godrej Zap Fabric Liquid Stain Remover",
      weight: "400 ml",
      price: "₹99",
      delprice: "₹109",
    },
    {
      image: cleanf,
      name: "Lizol Disinfectant Surface & Floor...",
      weight: "1 ltr",
      price: "₹231",
      delprice: "₹260",
    },
    {
      image: cleang,
      name: "Trishul White Disinfectant Germonil...",
      weight: "5 ltr",
      price: "₹159",
      delprice: "₹425",
    },
    {
      image: cleanh,
      name: "Dettol Antiseptic Liquid",
      weight: "250 ml",
      price: "₹167",
    },
    {
      image: cleani,
      name: "Patanjali Gonyle Floor Cleaner",
      weight: "1 ltr",
      price: "₹75",
    },
    {
      image: cleanj,
      name: "Colin Glass Cleaner (500 ml) + Glass...",
      weight: "500 ml + 1 ltr",
      price: "₹297",
      delprice: "₹349",
    },
    {
      image: cleank,
      name: "Harpic Disinfectant Liquid Toilet Cleaner...",
      weight: "1 ltr",
      price: "₹208",
      delprice: "₹245",
    },
    {
      image: cleanl,
      name: "Godrej Spic Toilet Cleaner",
      weight: "1 ltr",
      price: "₹155",
      delprice: "₹189",
    },
    {
      image: cleanm,
      name: "Harpic Disinfectant Liquid Bathroom...",
      weight: "1 ltr",
      price: "₹198",
      delprice: "₹230",
    },
    {
      image: cleann,
      name: "Airwick Freshmatic Autospray Air...",
      weight: "1 pack",
      price: "₹390",
      delprice: "₹599",
    },
    {
      image: cleano,
      name: "Godrej Aer Power Pocket Air Freshener...",
      weight: "3 pcs",
      price: "₹170",
      delprice: "₹210",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((clean) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={clean.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">14 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {clean.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{clean.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{clean.price}</p>
                  <del className="text-gray-700">{clean.delprice}</del>
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

export default CleaningProduct;
