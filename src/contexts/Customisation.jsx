import { createContext, useContext, useState } from "react";

const CustomisationContext = createContext({});

export const earcupColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#1a5e1a",
        name:"Green"
    },
    {
        color:"#659994",
        name:"Blue"
    },
    {
        color:"#896599",
        name:"Mauve"
    },
    {
        color:"#ffa500",
        name:"Orange"
    },
    {
        color:"#59555b",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#ececec",
        name:"White"
    }
];

export const headbandColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#1a5e1a",
        name:"Green"
    },
    {
        color:"#659994",
        name:"Blue"
    },
    {
        color:"#896599",
        name:"Mauve"
    },
    {
        color:"#ffa500",
        name:"Orange"
    },
    {
        color:"#59555b",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#ececec",
        name:"White"
    }
];


export const CustomisationProvider = (props)=>{
    const [earcupColor, setEarcupColor] = useState(earcupColors[6].color);
    const [headbandColor, setHeadbandColor] = useState(headbandColors[6].color);
    return (<CustomisationContext.Provider value={{
        earcupColor,
        setEarcupColor,
        headbandColor,
        setHeadbandColor
    }}>
        {props.children}
    </CustomisationContext.Provider>
    );
};

export const useCustomisation = ()=>{
    const context = useContext(CustomisationContext);
    return context;
};