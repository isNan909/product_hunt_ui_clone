import React from 'react';
import Missedit from '../components/Missedit';
import Todaylist from '../components/Todaylist';

export const Mainfeed = () => {
  return (
    <div>
      <Missedit />
      <Todaylist />
      <Missedit />
    </div>
  );
};

export default Mainfeed;
