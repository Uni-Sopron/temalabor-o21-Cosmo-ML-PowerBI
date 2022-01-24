import React, { createContext, useRef } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = (props) => {
    const bevezetesRef = useRef(null)
    const automlRef = useRef(null)
    const pythonRef = useRef(null)
    const rRef = useRef(null)
    const osszesitoTablazatRef = useRef(null)
    const demoRef = useRef(null)
    const befejezesRef = useRef(null)

    return (
        <NavbarContext.Provider
            value={{
                bevezetesRef,
                automlRef,
                pythonRef,
                rRef,
                osszesitoTablazatRef,
                demoRef,
                befejezesRef
            }}
            {...props}
        />
    );
};
