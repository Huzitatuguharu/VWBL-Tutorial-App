import { createContainer } from 'unstated-next';
import { useState } from 'react';

const useVWBL = () => {
  const [userAddress, setUserAddress] = useState('');

  // Lesson-2
  const connectWallet = () => {
    setUserAddress('0x0000000000000000000000000000000000000000');
  };

  // Lesson-2
  const disconnectWallet = () => {
    setUserAddress('');
  };

  // Lesson-3
  const initVwbl = () => {};

  return {
    userAddress,
    connectWallet,
    disconnectWallet,
    initVwbl,
  };
};

export const VwblContainer = createContainer(useVWBL);
