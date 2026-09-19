import React from 'react';
import { Link } from 'react-router-dom';
import baby from "../../assets/babycare.png"

function BabyCare() {
  return (
    <>
    <Link to="/babycareimage">
    <div className='w-90 h-full cursor-pointer'>
        <img className='rounded-2xl' src={baby} alt="image" />
    </div>
    </Link>
    </>
  );
}

export default BabyCare;