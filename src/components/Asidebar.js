import React from 'react';

import Hiring from './Hiring';
import Newsletter from './Newsletter';
import Kittycard from '../assets/kitty-card.png';
import Sideone from '../assets/sideOne.jpeg';
import Sidetwo from '../assets/sideTwo.jpeg';
import Sidethree from '../assets/sideThree.png';
import Plusicon from '../assets/plus.svg';

export const Asidebar = () => {
  return (
    <div>
      <aside>
        <div className="relative">
          <img src={Kittycard} alt="kitty card right" />
          <div className="absolute bottom-25 left-25">
          <button className="text-f11 font-bold inline-flex items-center bg-white border border-gray-300 mr-2 uppercase py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <span className="f13 text-hunt">winner announced</span>
        </button>
          </div>
        </div>

        
        <div>
          <div className="mt-3 text-base font-bold mb-3 text-gray-900">
            Upcomming Products
            <span className="text-f13 ml-2 text-gray-500 font-normal">
              Powered by Ship
            </span>
          </div>
          <div className="bg-white rounded shadow ">
            {/* upcomming list  */}
            <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
              <div>
                <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  Podcast Ping
                </span>
                <div className="text-f13 text-gray-500">
                  Uptime monitoring for podcasters
                </div>
                <div className="flex text-f11 font-medium mt-3">
                  <img className="mr-1" src={Plusicon} alt="plus" />
                  FOLLOW (59)
                </div>
              </div>
              <div>
                <img src={Sideone} alt="podcast" />
              </div>
            </div>



            <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
              <div>
                <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  Wizard Spell
                </span>
                <div className="text-f13 text-gray-500">
                  Stuff that helps people launch better everywhere.
                </div>
                <div className="flex text-f11 font-medium mt-3">
                  <img className="mr-1" src={Plusicon} alt="plus" />
                  FOLLOW (139)
                </div>
              </div>
              <div>
                <img src={Sidetwo} alt="podcast" />
              </div>
            </div>



            <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
              <div>
                <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  Reminder App
                </span>
                <div className="text-f13 text-gray-500">
                  Application for reminder everyday.
                </div>
                <div className="flex text-f11 font-medium mt-3">
                  <img className="mr-1" src={Plusicon} alt="plus" />
                  FOLLOW (129)
                </div>
              </div>
              <div>
                <img src={Sidethree} alt="podcast" />
              </div>
            </div>


            <div className="p-5 flex">
              <button className="w-full font-bold text-f11 items-center bg-white border border-gray-300 uppercase py-2 focus:outline-none hover:bg-gray-200 rounded text-base ">
                <span className="f12 text-hunt">view all</span>
              </button>
            </div>


          </div>
        </div>
        <Hiring />
        <Newsletter />
      </aside>
    </div>
  );
};

export default Asidebar;
