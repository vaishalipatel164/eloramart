import React from 'react';

import HealthProduct from "../home/HealthProduct";
import PetCare from './PetCare';
import BabyCare from './BabyCare';

function HomeCare() {
  return (
    <div className='px-18 py-4 flex gap-6'>
        <HealthProduct />
        <PetCare />
        <BabyCare />
    </div>
  );
}

export default HomeCare;