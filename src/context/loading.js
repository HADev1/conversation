import {createContext, useContext, useState} from "react";

const LOADING_CONTEXT = createContext(false);

export default function LoadingProvider({children}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (hasLoading) => {
    setIsLoading(hasLoading);
  };

  return (
    <LOADING_CONTEXT.Provider value={{isLoading, setLoading: handleLoading}}>
      {children}
    </LOADING_CONTEXT.Provider>
  );
}

export const LoadingContext = () => {
  return useContext(LOADING_CONTEXT);
};