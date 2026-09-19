import React from "react";

import tearsdrop from "../../assets/tearsdrop.avif";
import tretin from "../../assets/tretin.avif";
import silverx from "../../assets/silverx.avif";
import thyronorm from "../../assets/thyronorm.avif";
import betnovate from "../../assets/betnovate.avif";
import ketoscalp from "../../assets/ketoscalp.avif";
import nicotex from "../../assets/nicotex.avif";
import carbamide from "../../assets/carbamide.avif";
import mylo from "../../assets/mylo.avif";
import tatamagnesium from "../../assets/tatamagnesium.avif";
import homeda from "../../assets/homeda.avif";
import dabur from "../../assets/dabur.avif";
import littlejoys from "../../assets/littlejoys.avif";
import organicindia from "../../assets/organicindia.avif";
import supply6 from "../../assets/supply6.avif";
import hamdardsafi from "../../assets/hamdardsafi.avif";
import himalaya from "../../assets/himalaya.avif";
import himalayaliv from "../../assets/himalayaliv.avif";
import wellbeing from "../../assets/wellbeing.avif";
import hkvitals from "../../assets/hkvitals.avif";
import kapiva from "../../assets/kapiva.avif";
import forteliver from "../../assets/forteliver.avif";
import mylolactomama from "../../assets/mylolactomama.avif";
import aceblend from "../../assets/aceblend.avif";
import nutrirootz from "../../assets/nutrirootz.avif";
import fastup from "../../assets/fast&up.avif";
import zanskar from "../../assets/zanskar.avif";
import vladoshimalayan from "../../assets/vladoshimalayan.avif";
import ayuvya from "../../assets/ayuvya.avif";
import muscleblaze from "../../assets/muscleblaze.avif";
import savlon from "../../assets/savlon.avif";
import dettol from "../../assets/dettol.avif";
import borolinesuthol from "../../assets/borolinesuthol.avif";
import ryze from "../../assets/ryze.avif";

function HealthImage() {
  const card = [
    {
      image: tearsdrop,
      name: "Refresh Tears 0.5% Bottle of 10 ml Eye...",
      weight: "10 ml",
      price: "₹131",
    },
     {
      image: tretin,
      name: "Tretin 0.025% Cream 30gm",
      weight: "30 g",
      price: "₹206",
      delprice: "210",
    },
     {
      image: silverx,
      name: "Silverx Ionic Gel",
      weight: "10 g",
      price: "₹123",
      delprice: "₹126",
    },
     {
      image: thyronorm,
      name: "Thyronorm 50mcg Tablets",
      weight: "120 tabs",
      price: "₹123",
      delprice: "₹132",
    },
     {
      image: betnovate,
      name: "Betnovate N Tube of 25gm Cream",
      weight: "25 g",
      price: "₹68",
    },
     {
      image: ketoscalp,
      name: "Ketoscalp Shampoo",
      weight: "100 ml",
      price: "₹176",
      delprice: "₹185",
    },
     {
      image: nicotex,
      name: "Nicotex 4 mg Mint Plus Suger Free Gum",
      weight: "30 pcs",
      price: "₹365",
      delprice: "₹368",
    },
     {
      image: carbamide,
      name: "Carbamide Forte Multivitamin with...",
      weight: "100 pcs",
      price: "₹599",
      delprice: "₹920",
    },
     {
      image: mylo,
      name: "Mylo Lactomama Lactation Supplement...",
      weight: "300 g",
      price: "₹499",
      delprice: "₹699",
    },
     {
      image: tatamagnesium,
      name: "Tata 1 mg Magnesium Glycinate Advanced...",
      weight: "60 tabs",
      price: "₹399",
      delprice: "₹529",
    },
     {
      image: homeda,
      name: "Homeda Moringa Leaves Powder",
      weight: "200 g",
      price: "₹199",
      delprice: "₹400",
    },
     {
      image: dabur,
      name: "Dabur 100% Ayurvedic Immunity Booster...",
      weight: "30 ml",
      price: "₹119",
      delprice: "₹182",
    },
     {
      image: littlejoys,
      name: "Little Joys Multivitamin Kids Supplement...",
      weight: "30 pcs",
      price: "₹549",
    },
     {
      image: organicindia,
      name: "Organic India, A TATA Product- Moringa...",
      weight: "100 g",
      price: "₹256",
      delprice: "₹275",
    },
     {
      image: supply6,
      name: "Supply6 360 All in One Multivitamin...",
      weight: "15 x 10 g",
      price: "₹935",
      delprice: "₹1,095",
    },
     {
      image: hamdardsafi,
      name: "Hamdard Safi Blood Purifier",
      weight: "200 ml",
      price: "₹120",
    },
     {
      image: himalaya,
      name: "Himalaya General Wellness Ashwagandha...",
      weight: "60 tabs",
      price: "₹227",
      delprice: "₹260",
    },
     {
      image:himalayaliv ,
      name: "Himalaya Liv- 52 DS Liver Care Supplement",
      weight: "60 tabs",
      price: "₹281",
    },
     {
      image:wellbeing ,
      name: "Wellbeing Nutrition omega 3 Fish Oil...",
      weight: "60 capsules",
      price: "₹900",
      delprice: "₹999",
    },
     {
      image: hkvitals,
      name: "Hk Vitals Magnesium Glycinate for Men",
      weight: "120 tabs",
      price: "₹789",
      delprice: "₹999",
    },
    {
      image: kapiva,
      name: "Kapiva Shilajit Gold Capsules With...",
      weight: "60 pcs",
      price: "₹1,199",
      delprice: "₹1,499",
    },
     {
      image: forteliver,
      name: "Carbamide Forte Liver Care Supplement...",
      weight: "120 pcs",
      price: "₹945",
      delprice: "₹1,325",
    },
     {
      image: mylolactomama,
      name: "Mylo Lactomama Lactation Supplement...",
      weight: "300 g",
      price: "₹499",
      delprice: "₹699",
    },
     {
      image: aceblend,
      name: "Ace Blend Max Magnesium For Muscle...",
      weight: "60 pcs",
      price: "₹815",
      delprice: "₹879",
    },
     {
      image: nutrirootz,
      name: "Nutrirootz Sea Buckthorn Pulp Dietary...",
      weight: "500 ml",
      price: "₹499",
      delprice: "₹799",
    },
     {
      image: fastup,
      name: "Fast&Up Reload Energy & Electrolyte...",
      weight: "10 tabs",
      price: "₹143",
      delprice: "₹155",
    },
     {
      image: zanskar,
      name: "Zanskar Joint & Cartilage Support Supplement",
      weight: "3 packs",
      price: "₹529",
      delprice: "₹599",
    },
     {
      image: vladoshimalayan,
      name: "Vlado's Himalayan Organics Plant Based...",
      weight: "120 pcs",
      price: "₹786",
      delprice: "₹924",
    },
     {
      image:ayuvya ,
      name: "Ayuvya Let's Gain & i-Gain+ Weight...",
      weight: "1 set",
      price: "₹1,399",
      delprice: "₹1,968",
    },
     {
      image: muscleblaze,
      name: "MuscleBlaze Biozyme Performance Whey...",
      weight: "1 kg",
      price: "₹3,999",
      delprice: "₹4,999",
    },
     {
      image: savlon,
      name: "Savlon Disinfectant Antiseptic Liquid",
      weight: "500 ml",
      price: "₹207",
      delprice: "₹231",
    },
     {
      image: dettol,
      name: "Dettol Antiseptic Liquid",
      weight: "250 ml",
      price: "₹167",
    },
     {
      image: borolinesuthol,
      name: "Boroline Suthol Skin Antiseptic Liquid- Neem",
      weight: "100 ml",
      price: "₹47",
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
        {card.map((medicine) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={medicine.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold text-amber-900">18 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {medicine.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{medicine.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{medicine.price}</p>
                  <del className="text-gray-700">{medicine.delprice}</del>
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

export default HealthImage;
