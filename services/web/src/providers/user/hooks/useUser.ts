import {useContext} from 'react';
import {UserContext} from '../context';

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
