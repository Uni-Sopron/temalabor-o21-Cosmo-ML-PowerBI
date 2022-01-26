import React, { createContext, useRef } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = (props) => {
    const bevezetesRef = useRef(null)
    const kovetelmenyekRef = useRef(null)
    const munkamenetRef = useRef(null)
    const automlRef = useRef(null)
    const pythonRef = useRef(null)
    const rRef = useRef(null)
    const demoRef = useRef(null)
    const befejezesRef = useRef(null)

    return (
        <NavbarContext.Provider
            value={{
                bevezetesRef,
                kovetelmenyekRef,
                munkamenetRef,
                automlRef,
                pythonRef,
                rRef,
                demoRef,
                befejezesRef
            }}
            {...props}
        />
    );
};
