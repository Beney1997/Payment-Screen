import React from 'react';
import Subcription from "./Component/Subcription";
import PaymentMethod from './Component/Payment-method';

const Home = () => {
  return (
    <div className='block w-full md:flex'>
      <Subcription />
      <PaymentMethod  />
    </div>
  )
}

export default Home;
