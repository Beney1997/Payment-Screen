'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const PaymentMethodContainer= () => {
    const [plan, setPlan] = useState('monthly');
  return (
    <div className='bg-[#f1f5f9] md:rounded-2xl md:mr-4 overflow-hidden my-8 w-2/5 px-6'>
    <div className='pt-4  md:pt-8 '>
        <h2 className="text-lg font-bold mb-4">Starter Plan</h2>
        <div
            onClick={() => setPlan('monthly')}
            className={`mb-3 cursor-pointer border px-4 py-3 text-base rounded-lg flex items-center gap-2 text-left ${plan === 'monthly' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'
                }`}
        >
            <button className={`rounded-full ${plan === 'monthly' ? 'p-1 border-[6px] border-purple-700' : 'p-2 border-[2px]'}`}></button>
            <div>
                <span className='font-bold'>Pay Monthly</span> <br />
                <span className='text-sm text-gray-500 mb-4 font-medium'>$20 / Month /Member</span>
            </div>
        </div>
        <div
            onClick={() => setPlan('annual')}
            className={`cursor-pointer border px-4 py-3 text-base rounded-lg flex items-center gap-2 text-left ${plan === 'annual' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'
                }`}
        >
            <button className={`rounded-full ${plan === 'annual' ? 'p-1 border-[6px] border-purple-700' : 'p-2 border-[2px]'}`}></button>
            <div>
                <span className='font-bold'>Pay Annual</span> <br />
                <span className='text-sm text-gray-500 mb-4 font-medium'>$16/ Month /Member</span>
            </div>
            <span className='inline-block ml-auto bg-purple-700 text-purple-50 text-xs py-1 px-2 rounded-md'>Save 15%</span>
        </div>
        <div className="mt-6 flex justify-between items-center border-t border-t-gray-300 py-6">
            <p className="text-xl font-bold">Total</p>
            <p className="text-lg font-semibold">$16 / Month</p>
        </div>
        <p className='text-sm text-gray-500 font-medium flex gap-1'>
            <svg className='shrink-0' width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Guaranteed ot be safe & secure, ensuring that all transactions are protected with the highest level of security.
        </p>
    </div>
    <Image src={require('@/app/Public/assets/economy-img.jpg')} alt='economy avatar' />
</div>
  )
}

export default PaymentMethodContainer;
