import { React } from "react";

import saucesa from "../../assets/saucesa.avif";
import saucesb from "../../assets/saucesb.avif";
import saucesc from "../../assets/saucesc.avif";
import saucesd from "../../assets/saucesd.avif";
import saucese from "../../assets/saucese.avif";
import saucesf from "../../assets/saucesf.avif";
import saucesg from "../../assets/saucesg.avif";
import saucesh from "../../assets/saucesh.avif";
import saucesi from "../../assets/saucesi.avif";
import saucesj from "../../assets/saucesj.avif";
import saucesk from "../../assets/saucesk.avif";
import saucesl from "../../assets/saucesl.avif";
import saucesm from "../../assets/saucesm.avif";
import saucesn from "../../assets/saucesn.avif";
import sauceso from "../../assets/sauceso.avif";
import saucesp from "../../assets/saucesp.avif";
import saucesq from "../../assets/saucesq.avif";
import saucesr from "../../assets/saucesr.avif";
import saucess from "../../assets/saucess.avif";
import saucest from "../../assets/saucest.avif";
import saucesu from "../../assets/saucesu.avif";
import saucesw from "../../assets/saucesw.avif";
import saucesx from "../../assets/saucesx.avif";
import saucesy from "../../assets/saucesy.avif";

function SaucesProduct() {
  const card = [
    {
      image: saucesa,
      name: "Kissan Fresh Tomato Ketchup",
      weight: "1 kg",
      price: "₹116",
      delprice: "₹150",
    },
      {
      image: saucesb,
      name: "Kissan Tomato Ketchup",
      weight: "825 g",
      price: "₹99",
    },
      {
      image: saucesc,
      name: "Maggi Rich Tomato Ketchup",
      weight: "190 g",
      price: "₹75",
    },
      {
      image: saucesd,
      name: "Troovy Tomato Ketchup - No...",
      weight: "340 g",
      price: "₹190",
    },
      {
      image: saucese,
      name: "Kissan Tomato Ketchup (No Onion &...",
      weight: "850 g",
      price: "₹120",
      delprice: "₹130",
    },
      {
      image: saucesf,
      name: "Heinz Tomato Ketchup",
      weight: "435 g",
      price: "₹152",
      delprice: "₹165",
    },
      {
      image: saucesg,
      name: "Yu Zero Sugar Tomato Ketchup",
      weight: "270 g",
      price: "₹99",
      delprice: "₹180",
    },
      {
      image: saucesh,
      name: "Little Joys Tomato Ketchup...",
      weight: "320 g",
      price: "₹299",
    },
      {
      image: saucesi,
      name: "Repeat Gud Healthy Tomato Ketchup",
      weight: "220 g",
      price: "₹185",
    },
      {
      image: saucesj,
      name: "Yu Veg Hakka Noodles (Zero Oil) + Zero...",
      weight: "150 g + 270 g",
      price: "₹115",
      delprice: "₹225",
    },
      {
      image: saucesk,
      name: "Ching's Secret Green Chilli Sauce",
      weight: "190 g",
      price: "₹56",
      delprice: "₹60",
    },
      {
      image: saucesl,
      name: "Ching's Secret Dark Soy Sauce Rich, Brow...",
      weight: "210 g",
      price: "₹56",
      delprice: "₹60",
    },
      {
      image: saucesm,
      name: "Ching's Secret Red Chilli Sauce, Bold, Fie...",
      weight: "200 g",
      price: "₹56",
      delprice: "₹60",
    },
      {
      image: saucesn,
      name: "Maggi Hot & Sweet Tomato Chilli Sauce",
      weight: "200 g",
      price: "₹80",
    },
      {
      image: sauceso,
      name: "Ching's Secret Dark Soy Sauce Rich. Brow...",
      weight: "210 g + 190 g + 170 ml +...",
      price: "₹184",
      delprice: "₹230",
    },
      {
      image: saucesp,
      name: "Master Chow Chowmein Sauce",
      weight: "220 g",
      price: "₹135",
      delprice: "₹170",
    },
      {
      image: saucesq,
      name: "Master Chow Dark Soya Sauce",
      weight: "210 g",
      price: "₹49",
      delprice: "₹60",
    },
      {
      image: saucesr,
      name: "Master Chow Sichuan Chilli Oil",
      weight: "170 g",
      price: "₹186",
      delprice: "₹295",
    },
      {
      image: saucess,
      name: "Dr. Oetker FunFoods Veg Mayonnaise...",
      weight: "100 g",
      price: "₹49",
    },
      {
      image: saucest,
      name: "Dr. Oetker Flavoured Mayonnaise (Tandoor...",
      weight: "100 g",
      price: "₹49",
    },
      {
      image: saucesu,
      name: "Dr. Oetker FunFoods Veg Mayonnaise...",
      weight: "250 g",
      price: "₹95",
    },
      {
      image: saucesw,
      name: "Wingreens Farms Premium Veg...",
      weight: "800",
      price: "₹126",
      delprice: "₹250",
    },
      {
      image: saucesx,
      name: "Wingreens Farms Tandoori - Flavoured",
      weight: "180 g",
      price: "₹76",
      delprice: "₹80",
    },
      {
      image: saucesy,
      name: "Dr. Oetker FunFoods Veg Mayonnaise...",
      weight: "800 g",
      price: "₹195",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((sauces) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={sauces.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">15 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {sauces.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{sauces.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{sauces.price}</p>
                  <del className="text-gray-700">{sauces.delprice}</del>
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

export default SaucesProduct;
