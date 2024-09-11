import React from 'react';
import Subcription from "./Component/Subcription";
import PaymentMethod from './Component/Payment-method';

const Home = () => {
  return (
    <div className='flex w-full'>
      <Subcription />
      <PaymentMethod  />
    </div>
  )
}

export default Home;
