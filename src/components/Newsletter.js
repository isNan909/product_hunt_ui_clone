import React from 'react';

import Advertisment from '../assets/advertisment.jpeg';

export const Newsletter = () => {
  return (
    <div className="mb-6">
      <div className="mt-4 text-base font-bold mb-3 text-gray-900">
        Newsletter
      </div>
      <div className="bg-white rounded shadow ">
        <div>
          <div className="border-b border-gray-200">
            <img src={Advertisment} alt="advertisment newletter" />
            <div className="text-xl text-gray-900 text-center pt-4 pb-4">
              Star in a Super Bowl ad 🏈
            </div>
          </div>
          <div className="p-5">
            <span className="font-bold text-base text-gray-900 pb-2 flex">
              Get the best new products in your inbox, every day 👇
            </span>
            <div>
              <form action="submit">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="text-f13 pl-4 w-full rounded  focus:bg-transparent border border-gray-300 focus:border-grey-500 outline-none placeholder-gray-500 py-1 px- leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your email"
                />
                <div className="mt-3">
                  <button className="primary text-f11 font-bold uppercase inline-flex text-white items-center bg-orange border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 w-full">
                    <span className="f13 text-center mx-auto">Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
