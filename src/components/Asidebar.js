import React from 'react';
import Kittycard from '../assets/kitty-card.png';

export const Asidebar = () => {
  return (
    <div>
      <aside>
        <div>
          <img src={Kittycard} alt="kitty card right" />
        </div>
        <div>
          <div className="bg-white rounded shadow overflow-hidden sm:flex items-center mb-6">
            <p>upcomming products</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Asidebar;
