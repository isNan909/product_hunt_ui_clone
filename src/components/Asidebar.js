import React from 'react';
import Kittycard from '../assets/kitty-card.png';
import Sideone from '../assets/sideOne.jpeg';
import Sidetwo from '../assets/sideTwo.jpeg';
import Sidethree from '../assets/sideThree.png';
import Plusicon from '../assets/plus.svg';

export const Asidebar = () => {
  return (
    <div>
      <aside>
        <div>
          <img src={Kittycard} alt="kitty card right" />
        </div>
        <div>
          <div className="mt-3 text-base font-bold mb-3 text-gray-900">
            Upcomming Products
            <span className="text-xs ml-3 text-gray-500 font-normal">
              Powered by Ship
            </span>
          </div>
          <div className="bg-white rounded shadow ">
            {/* upcomming list  */}
            <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
              <div>
                <span className="font-bold text-gray-900">Podcast Ping</span>
                <div className="text-13 text-gray-500">
                  Uptime monitoring for podcasters
                </div>
                <div className="flex text-11 font-medium mt-3">
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
                <span className="font-bold text-gray-900">Wizard Spell</span>
                <div className="text-13 text-gray-500">
                  Stuff that helps people launch better everywhere.
                </div>
                <div className="flex text-11 font-medium mt-3">
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
                <span className="font-bold text-gray-900">Reminder App</span>
                <div className="text-13 text-gray-500">
                  Application for reminder everyday.
                </div>
                <div className="flex text-11 font-medium mt-3">
                  <img className="mr-1" src={Plusicon} alt="plus" />
                  FOLLOW (129)
                </div>
              </div>
              <div>
                <img src={Sidethree} alt="podcast" />
              </div>
            </div>
          <button className="font-bold mt-3 mb-3 block items-center bg-white border border-gray-300 uppercase py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
          <span>log in</span>
        </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Asidebar;
