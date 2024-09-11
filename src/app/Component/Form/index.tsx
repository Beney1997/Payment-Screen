'use client'
import React, { useState } from 'react'
import {paymentMethods} from "@/app/Component/Card/index"
import Input from '../Input';


const Form = () => {
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
  return (
    <div>
      <form className=' px-4 sm:px-[8%]'>
                <h1 className='text-purple-700 text-xl font-bold mb-2'>Cosmic</h1>
                <h2 className="text-2xl font-bold mb-2 text-black">Upgrade to Plus</h2>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                    Do more with unlimited blocks, files, automations & integrations.
                </p>
                <label className="block text-sm font-medium text-gray-500">Billed To</label>
                {/* <input
                    type="text"
                    value=""

                    
                /> */}
                <Input
        type="text"
        size="small"
        variant="primary"
        placeholder="Jane Smith"
        // value={inputValue}
        placeholderColor="placeholder-black-800" 

        
      /> 
      

                <label className="block text-sm font-medium text-gray-500 mb-2">Payment Details</label>
                <div className="flex flex-wrap mb-3 gap-2">
                    {paymentMethods.map((method, index: number) => (
                        <button
                            type='button'
                            key={index}
                            onClick={() => setPaymentMethod(method.method)}
                            className={`basis-[110px] grow p-2 sm:p-3 w-full border rounded-lg text-left block text-xs ms:text-sm font-medium ${paymentMethod === method.method
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
                        <div className='relative mb-3'>
                            <input
                                type="text"
                                value="1234 1234 1234 12345"
                                className="w-full p-3 pr-8 border border-gray-300 focus:outline-gray-300 rounded-md text-sm font-medium"
                            />
                            <svg className='absolute top-[40%] -translate-y-1/2 right-4' height='30' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" viewBox="0 0 48 48" id="mastercard">
                                <path fill="#f44336" d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24 c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"></path>
                                <path fill="#ff9800" d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98 c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"></path>
                                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98"></ellipse>
                            </svg>
                        </div>
                        <div className="flex gap-4  mb-3 ">
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
                            {/* <input
                                type="text"
                                value="MM/YY"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-gray-300 text-sm font-medium grow basis-32"
                            />
                            <input
                                type="text"
                                value="CVC"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-gray-300 text-sm font-medium grow basis-32"
                            />
                             */}
                        </div>
                    </div>
                )}
                <div className="">
                    <div className='px-2 border border-gray-300 rounded-md mb-3'>
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
                    {/* <input
                        type="text"
                        value="Postal Code"
                        className="w-full p-2 border border-gray-300 rounded-md text-sm font-medium mb-2 focus:outline-gray-300"
                    /> */}
                </div>
                <div className='flex gap-4 my-6'>
                    <button className='bg-gray-200 font-semibold grow max-w-[200px] rounded-md px-4 py-3 text-sm w-64'>Cancel</button>
                    <button className='bg-purple-700 text-white grow font-semibold rounded-md px-4 py-3 text-sm w-96'>Subscribe</button>
                </div>
                <p className='text-sm text-gray-500 mb-4 font-medium'>By providing your card information, you allow us to charge your card for future payment in accordance with thier terms.</p>
            </form>
    </div>
  )
}

export default Form;
