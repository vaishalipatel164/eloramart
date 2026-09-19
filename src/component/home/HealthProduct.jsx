import React from 'react';
import { Link } from 'react-router-dom';

import pharmacy from "../../assets/pharmacy.avif";

function HealthProduct() {
  return (
   <>
   <Link to="/healthimage">
   <div className='w-90 h-full cursor-pointer'>
    <img className='' src={pharmacy} alt="image" />
   </div>
    </Link>
   </>
  );
}

export default HealthProduct;