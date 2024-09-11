'use client'

import React, { useState } from 'react';
import { paymentMethods } from "@/app/Component/Card/index";
import Input from '../Input';

const Form = () => {
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex justify-center p-4">
            <form className='w-full max-w-lg p-6 bg-white shadow-md rounded-lg'>
                <h1 className='text-purple-700 text-2xl font-bold mb-4 text-center'>Cosmic</h1>
                <h2 className="text-xl font-bold mb-2 text-black text-center">Upgrade to Plus</h2>
                <p className="text-sm text-gray-500 mb-4 text-center font-medium">
                    Do more with unlimited blocks, files, automations & integrations.
                </p>
                <label className="block text-sm font-medium text-gray-500 mb-2">Billed To</label>
                <Input
                    type="text"
                    size="small"
                    variant="primary"
                    placeholder="Jane Smith"
                    placeholderColor="placeholder-black-800"
                  
                />

                <label className="block text-sm font-medium text-gray-500 mb-2">Payment Details</label>
                <div className="flex flex-wrap mb-4 gap-2">
                    {paymentMethods.map((method, index) => (
                        <button
                            type='button'
                            key={index}
                            onClick={() => setPaymentMethod(method.method)}
                            className={`flex-1 p-2 sm:p-3 border rounded-lg text-left block text-xs sm:text-sm font-medium ${paymentMethod === method.method
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-300'
                                }`}
                        >
                            {method.icon}
                            <span className='inline-block mt-2'>{method.method}</span>
                        </button>
                    ))}
                </div>

                {paymentMethod === 'Credit Card' && (
                    <div>
                        <div className='relative mb-4'>
                            <input
                                type="text"
                                value="1234 1234 1234 1234"
                                className="w-full p-3 pr-8 border border-gray-300 focus:outline-gray-300 rounded-md text-sm font-medium"
                            />
                            <svg className='absolute top-[50%] right-4 transform -translate-y-1/2' height='30' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" viewBox="0 0 48 48" id="mastercard">
                                <path fill="#f44336" d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24 c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"></path>
                                <path fill="#ff9800" d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98 c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"></path>
                                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98"></ellipse>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:gap-6">
                            <Input
                                type="text"
                                size="small"
                                variant="primary"
                                placeholder="MM/YY"
                                value={inputValue}
                                placeholderColor="placeholder-black-800"
                                onChange={handleInputChange}
                               
                            />
                            <Input
                                type="text"
                                size="small"
                                variant="primary"
                                placeholder="CVC"
                                value={inputValue}
                                placeholderColor="placeholder-black-800"
                               
                            />
                        </div>
                    </div>
                )}

                <div className="mb-4">
                    <div className='px-2 border border-gray-300 rounded-md mb-4'>
                        <select className="w-full text-sm font-medium py-2.5">
                            <option>United States</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    <Input
                        type="text"
                        size="small"
                        variant="primary"
                        placeholder="Postal Code"
                        value={inputValue}
                        placeholderColor="placeholder-black-800"
                        
                    />
                </div>

                <div className='flex flex-col sm:flex-row gap-4 my-6'>
                    <button className='bg-gray-200 font-semibold rounded-md px-4 py-3 text-sm w-full sm:w-auto'>Cancel</button>
                    <button className='bg-purple-700 text-white font-semibold rounded-md px-4 py-3 text-sm w-full sm:w-auto'>Subscribe</button>
                </div>

                <p className='text-sm text-gray-500 text-center mb-4 font-medium'>By providing your card information, you allow us to charge your card for future payment in accordance with their terms.</p>
            </form>
        </div>
    );
};

export default Form;
