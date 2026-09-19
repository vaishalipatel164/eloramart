import React from "react";
import { Link } from "react-router-dom";

import paancorner from "../../assets/paancorner.avif";
import dairybreadeggs from "../../assets/dairybreadeggs.avif";
import fruitsvegetables from "../../assets/fruitsvegetables.avif";
import colddrinksjuices from "../../assets/colddrinksjuices.avif";
import snacksmunchies from "../../assets/snacksmunchies.avif";
import breakfastinstantfood from "../../assets/breakfastinstantfood.avif";
import sweettooth from "../../assets/sweettooth.avif";
import bakerybiscuits from "../../assets/bakerybiscuits.avif";
import teacoffeemilkdrinks from "../../assets/teacoffeemilkdrinks.avif";
import attaricedal from "../../assets/attaricedal.avif";
import masalaoilmore from "../../assets/masalaoilmore.avif";
import saucesspreads from "../../assets/saucesspreads.avif";
import chickenmeatfish from "../../assets/chickenmeatfish.avif";
import organichealthyliving from "../../assets/organichealthyliving.avif";
import babycare from "../../assets/babycare.avif";
import pharmawellness from "../../assets/pharmawellness.avif";
import cleaningessentials from "../../assets/cleaningessentials.avif";
import homeoffice from "../../assets/homeoffice.avif";
import personalcare from "../../assets/personalcare.avif";
import petcarefood from "../../assets/petcarefood.avif";

function Stocks() {
  const card = [
    {
      image: paancorner,
      link: "/paancorner",
    },
    {
      image: dairybreadeggs,
      link: "/dairyproducts",
    },
    {
      image: fruitsvegetables,
      link: "/productimage",
    },
    {
      image: colddrinksjuices,
      link: "/juiceproducts",
    },
    {
      image: snacksmunchies,
      link: "/snackproducts",
    },
    {
      image: breakfastinstantfood,
      link: "/breakfastfood",
    },
    {
      image: sweettooth,
      link: "/sweettooth",
    },
    {
      image: bakerybiscuits,
      link: "/snackproducts",
    },
    {
      image: teacoffeemilkdrinks,
      link: "/teacoffeeproduct",
    },
    {
      image: attaricedal,
      link: "/attariceproduct",
    },
    {
      image: masalaoilmore,
      link: "",
    },
    {
      image: saucesspreads,
      link : ""
    },
    {
      image: chickenmeatfish,
      link: "",
    },
    {
      image: organichealthyliving,
      link: "",
    },
    {
      image: babycare,
      link: "/babycareimage",
    },
    {
      image: pharmawellness,
      link: "/healthimage",
    },
    {
      image: cleaningessentials,
      link: "",
    },
    {
      image: homeoffice,
      link: "",
    },
    {
      image: personalcare,
      link: "",
    },
    {
      image: petcarefood,
      link: "petcareimage",
    },
  ];

  return (
    <>
        <section className="flex flex-wrap p-6 gap-5 justify-center px-12">
          {card.map((stocks) => (
            <div className="w-30 h-auto rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
              <div>
                <Link to={stocks.link}>
                <img
                  className="w-full h-full rounded object-cover"
                  src={stocks.image}
                  alt="image"
                />
                </Link>
              </div>
            </div>
          ))}
        </section>
    </>
  );
}

export default Stocks;
