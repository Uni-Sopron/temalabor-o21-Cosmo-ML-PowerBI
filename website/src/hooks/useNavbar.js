import { useContext } from 'react';
import { NavbarContext } from '../context/NavbarContext';

const useNavbar = () => {
    const context = useContext(NavbarContext);
    return context;
};

export default useNavbar;
