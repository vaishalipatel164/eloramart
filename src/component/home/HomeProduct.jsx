import React from 'react';
import Stock from "../../assets/stocks.jpg";
import {Link} from "react-router-dom";

function HomeProduct() {
  return (
    <>
    <Link to="/productimage" >
        <div className='text-center cursor-pointer'>
            <img className='w-full px-14' src={Stock} alt="image" />
        </div>
        </Link>
        </>
  )
}

export default HomeProduct;