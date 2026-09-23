import { React } from "react";

import nonveg from "../../assets/nonveg.avif";

function NonVegProduct() {
  const card = [
    {
      image: nonveg,
      name: "ILOK Dry Bombay Ducks Cleaned &...",
      weight: "100 g",
      price: "₹239",
      delprice: "₹335",
    },
  ];
  return (
    <>
      <section className="mt-30 m-2 flex flex-wrap gap-10 justify-center">
        {card.map((nonveg) => (
          <div className="w-55 h-80 rounded flex flex-col shadow-[1px_1px_3px_gray] hover:shadow-[4px_4px_8px_gray] hover:scale-[1.03] transition-transform duration-200">
            <div>
              <img
                className="w-full h-40 rounded object-cover"
                src={nonveg.image}
                alt="image"
              />
            </div>
            <div className="px-3 py-2 flex flex-col flex-1">
              <p className="text-[10px] font-semibold">25 MINS</p>
              <h2 className="text-[16px] font-semibold min-h-10">
                {nonveg.name}
              </h2>
              <span className="text-gray-700 text-[14px]">{nonveg.weight}</span>
              <div className="flex items-end justify-between mt-auto pt-3 pb-1">
                <div className="text-[13px] ">
                  <p className="font-semibold ">{nonveg.price}</p>
                  <del className="text-gray-700">{nonveg.delprice}</del>
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

export default NonVegProduct;
