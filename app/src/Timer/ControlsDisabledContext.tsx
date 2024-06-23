import { createContext, useContext } from 'react';

export const ControlsDisabledContext = createContext<boolean>(false);

export const useControlsDisabled = () => {
  return useContext(ControlsDisabledContext);
};
