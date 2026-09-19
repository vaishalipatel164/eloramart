import React from 'react';
import { Link } from 'react-router-dom';
import petproduct from "../../assets/petcare.avif";

function PetCare() {
  return (
    <Link to="/petcareimage">
    <div className='w-90 h-full cursor-pointer'>
        <img src={petproduct} alt="image" />
    </div>
    </Link>
  );
}

export default PetCare;