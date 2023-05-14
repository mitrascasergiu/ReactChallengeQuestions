import { useState } from 'react';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  return {
    isLoggedIn,
    login
  };
};

export default useAuthentication;
