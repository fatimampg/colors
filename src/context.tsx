import React, { createContext, PropsWithChildren } from "react";
import { colorReducer, ColorsActions, initialState } from "./color-reducer";
import { useReducer } from 'react';


type ColorContextState = {
    hexColor: string;
    dispatch: React.Dispatch<ColorsActions>
}
export const ColorContext = createContext<ColorContextState>({hexColor: '#FFADEF'} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [{hexColor}, dispatch] = useReducer(colorReducer, initialState);
    return (
        <ColorContext.Provider value={{ hexColor, dispatch }}>
            {children}
        </ColorContext.Provider>)
};

