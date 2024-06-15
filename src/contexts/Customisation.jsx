import { createContext, useContext, useRef, useState } from "react";

const CustomisationContext = createContext({});

export const earcupColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#013220",
        name:"Green"
    },
    {
        color:"#24249c",
        name:"Blue"
    },
    {
        color:"#adacac",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#808080",
        name:"Silver"
    }
];

export const headbandColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#013220",
        name:"Green"
    },
    {
        color:"#24249c",
        name:"Blue"
    },
    {
        color:"#adacac",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#808080",
        name:"Silver"
    }
];


export const CustomisationProvider = (props)=>{
    const [earcupColor, setEarcupColor] = useState(earcupColors[4].color);
    const [headbandColor, setHeadbandColor] = useState(headbandColors[4].color);
    const [headbandPosition,setHeadbandPosition] = useState(false);
    const [earcupPosition,setEarcupPosition] = useState(false);
    return (<CustomisationContext.Provider value={{
        earcupColor,
        setEarcupColor,
        headbandColor,
        setHeadbandColor,
        headbandPosition,
        setHeadbandPosition,
        earcupPosition,
        setEarcupPosition
    }}>
        {props.children}
    </CustomisationContext.Provider>
    );
};

export const useCustomisation = ()=>{
    const context = useContext(CustomisationContext);
    return context;
};