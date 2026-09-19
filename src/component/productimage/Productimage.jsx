import React from "react";

import greenchilli from "../../assets/greenchilli.avif";
import onion from "../../assets/onion.avif";
import tomato from "../../assets/tomato.avif";
import coriander from "../../assets/coriander.avif";
import capsicum from "../../assets/capsicum.avif";
import carrot from "../../assets/carrot.avif";
import ginger from "../../assets/ginger.avif";
import lemon from "../../assets/lemon.avif";
import potato from "../../assets/potato.avif";
import cucumber from "../../assets/cucumber.avif";
import garlic from "../../assets/garlic.avif";
import pointedgourd from "../../assets/pointed-gourd.avif";
import mushroom from "../../assets/mushroom.avif";
import curryleaves from "../../assets/curryleaves.avif";
import ivygourd from "../../assets/ivygourd.avif";
import ladyfinger from "../../assets/ladyfinger.avif";
import brinjal from "../../assets/brinjal.avif";
import bittergourd from "../../assets/bitter-gourd.avif";
import beans from "../../assets/french-beans.avif";
import cauliflower from "../../assets/cauliflower.avif";
import beetroot from "../../assets/beetroot.avif";
import cabbage from "../../assets/cabbage.avif";
import corn from "../../assets/sweet-corn.avif";
import arvi from "../../assets/arvi.avif";
import assorted from "../../assets/assorted-capsicum.avif";
import broccoli from "../../assets/broccoli.avif";
import springonoin from "../../assets/springonion.avif";
import pumpkin from "../../assets/pumpkin.avif";
import lotusstem from "../../assets/lotus-stem.avif";
import giloy from "../../assets/giloy-sticks.avif";

function Productimage() {
  const card = [
    {
      image:greenchilli,
      name:"Green Chilli (Hari Mirch)",
      weight:"100 g",
      price:"₹9",
      delprice:"₹10",
    },
     {
      image:onion,
      name:"Onion (Pyaz)",
      weight:"1 kg",
      price:"₹64",
      delprice:"₹82",
    },
     {
      image:tomato,
      name:"Desi Tomato (Tamatar)",
      weight:"500 g",
      price:"₹27",
      delprice:"₹34",
    },
     {
      image:coriander,
      name:"Coriander Bunch (Dhaniya Patta)",
      weight:"100 g",
      price:"₹32",
      delprice:"₹37",
    },
     {
      image:capsicum,
      name:"Green Capsicum (Shimla Mirch)",
      weight:"250 g",
      price:"₹25",
      delprice:"₹31",
    },
     {
      image:carrot,
      name:"Orange Carrot (Gajar)",
      weight:"200 g",
      price:"₹19",
      delprice:"₹24",
    },
     {
      image:ginger,
      name:"Ginger (Adrak)",
      weight:"200 g",
      price:"₹38",
      delprice:"₹49",
    },
     {
      image:lemon,
      name:"Lemon",
      weight:"200 g",
      price:"₹56",
      delprice:"₹66",
    },
     {
      image:potato,
      name:"Potato (Aloo)",
      weight:"1 kg",
      price:"₹22",
      delprice:"₹25",
    },
     {
      image:cucumber,
      name:"Green Cucumber (Kheera)",
      weight:"500 g",
      price:"29",
      delprice:"34",
    },
     {
      image:garlic,
      name:"Garlic (Lehsun)",
      weight:"100 g",
      price:"₹29",
      delprice:"₹35",
    },
     {
      image:pointedgourd,
      name:"Pointed Gourd (Parwal)",
      weight:"250 g",
      price:"₹28",
      delprice:"₹32",
    },
     {
      image:mushroom,
      name:"Button Mushroom",
      weight:"180 g",
      price:"₹61",
      delprice:"₹71",
    },
     {
      image:curryleaves,
      name:"Curry Leaves (Kadi Patta)",
      weight:"50 g",
      price:"₹19",
      delprice:"₹23",
    },
     {
      image:ivygourd,
      name:"Ivy Gourd (Kundru)",
      weight:"250 g",
      price:"₹10",
      delprice:"₹12",
    },
     {
      image:ladyfinger,
      name:"Lady Finger (Bhindi)",
      weight:"250 g",
      price:"₹12",
      delprice:"₹14",
    },
     {
      image:brinjal,
      name:"Brinjal-Bharta (Baingan)",
      weight:"500 g",
      price:"₹40",
      delprice:"₹45",
    },
     {
      image:bittergourd,
      name:"Bitter Gourd (Karela)",
      weight:"250 g",
      price:"₹16",
      delprice:"₹20",
    },
     {
      image:beans,
      name:"French Beans",
      weight:"250 g",
      price:"₹45",
      delprice:"₹52",
    },
    {
      image:cauliflower,
      name:"Cauliflower (Phool Ghobhi)",
      weight:"300 g",
      price:"₹59",
      delprice:"₹74",
    },
    {
      image:beetroot,
      name:"Beetroot (Chukandar)",
      weight:"500 g",
      price:"₹24",
      delprice:"₹29",
    },
    {
      image:cabbage,
      name:"Cabbage (Patta Gobhi)",
      weight:"400 g",
      price:"₹36",
      delprice:"₹42",
    },
    {
      image:corn,
      name:"Sweet Corn- Packet",
      weight:"100 g",
      price:"₹37",
      delprice:"₹45",
    },
    {
      image:arvi,
      name:"Arvi",
      weight:"250 g",
      price:"₹13",
      delprice:"₹16",
    },
    {
      image:assorted,
      name:"Assorted Capsicum- (Red, Yellow, Green)",
      weight:"3 pcs",
      price:"₹130",
      delprice:"₹154",
    },
    {
      image:broccoli,
      name:"Broccoli",
      weight:"200 g",
      price:"₹99",
      delprice:"124",
    },
    {
      image:springonoin,
      name:"Spring Onion (Hari Pyaz)",
      weight:"150 g",
      price:"₹46",
      delprice:"₹59",
    },
    {
      image:pumpkin,
      name:"Green Pumpkin (Hara Kaddu)",
      weight:"1 kg",
      price:"₹62",
      delprice:"₹75",
    },
    {
      image:lotusstem,
      name:"Lotus strem (Kamal Kakdi)",
      weight:"250 g",
      price:"₹63",
      delprice:"₹81",
    },
    {
      image:giloy,
      name:"Giloy Stick",
      weight:"25 g",
      price:"₹24",
      delprice:"₹27",
    },
  ]
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((vagies) => (
        <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
          <div>
            <img className="w-full h-40 rounded object-cover" src={vagies.image} alt="image" />
          </div>
          <div className="px-3 py-2 flex flex-col flex-1">
            <p className="text-[10px] font-semibold">13 MINS</p>
            <h2 className="text-[16px] font-semibold min-h-10">{vagies.name}</h2>
            <span className="text-gray-700 text-[14px]">{vagies.weight}</span>
            <div className="flex items-end justify-between mt-auto pt-3 pb-1">
              <div className="text-[13px] ">
                <p className="font-semibold ">{vagies.price}</p>
                <del className="text-gray-700">{vagies.delprice}</del>
              </div>
              <div>
                <button className="border w-20 h-10 rounded text-green-700 bg-green-50 font-semibold">ADD</button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </section>
    </>
  );
}

export default Productimage;
