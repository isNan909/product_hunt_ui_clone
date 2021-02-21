import React from 'react';

import logo from '../assets/logo.svg';
import Sidetwo from '../assets/sideTwo.jpeg';
import Sidethree from '../assets/sideThree.png';

export const Hiring = () => {
  return (
    <div>
      <div className="mt-4 text-base font-bold mb-3 text-gray-900">
        Hiring now
        <span className="text-f13 ml-2 text-gray-500 font-normal">
          Powered by Ship
        </span>
      </div>
      <div className="bg-white rounded shadow ">
        <div className="overflow-hidden sm:flex justify-between pr-5 pl-5 pt-6 pb-1 items-center">
          <div>
            <span className="text-f13 font-bold text-gray-900 mb-2 block">
              Product Hunt
            </span>
            <div className="text-f13 text-gray-500">Content Lead</div>
            <div className="pt-1 text-f13 text-gray-500">Remote</div>
          </div>
          <div>
            <img src={logo} alt="podcast" />
          </div>
        </div>
        <div className="overflow-hidden sm:flex justify-between pr-5 pl-5 pt-5 pb-1 items-center">
          <div>
            <span className="text-f13 font-bold text-gray-900 mb-1 block">
              Instantish
            </span>
            <div className="text-f13 text-gray-500">Software Engineer</div>
            <div className="text-f13 text-gray-500">San Francisco, Remote</div>
          </div>
          <div>
            <img src={Sidetwo} alt="podcast" />
          </div>
        </div>
        <div className="overflow-hidden sm:flex justify-between pr-5 pl-5 pt-5 pb-1 items-center">
          <div>
            <span className="text-f13 font-bold text-gray-900 mb-1 block">
              Geneva
            </span>
            <div className="text-f13 text-gray-500">Product Manager</div>
            <div className="text-f13 text-gray-500">Remote</div>
          </div>
          <div>
            <img src={Sidethree} alt="podcast" />
          </div>
        </div>
        <div className="p-5 flex">
          <button className="w-full tex-uppercase font-bold text-f11 items-center bg-white border border-gray-300 uppercase py-2 focus:outline-none hover:bg-gray-200 rounded text-base ">
            <span className="f12 text-hunt">view all jobs</span>
          </button>
        </div>


        <div className="px-5 pb-5 text-f13 font-bold text-gray-500">
          Hiring?
          <span className="pl-1 text-hunt">Post a job</span>
        </div>

        
      </div>
    </div>
  );
};

export default Hiring;
