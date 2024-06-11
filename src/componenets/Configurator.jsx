import { useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'
import { state } from './state.jsx'
import {  earcupColors, headbandColors, useCustomisation } from '../contexts/Customisation.jsx'




const Configurator = () =>{
    
    const {earcupColor, setEarcupColor, headbandColor, setHeadbandColor} = useCustomisation();
    const snap = useSnapshot(state)

    function openHideBig(e) {
		const p = e.currentTarget.nextElementSibling
		e.currentTarget.parentNode.classList.toggle('active')
		p.offsetHeight === 0 ? (p.style.maxHeight = `150px`) : (p.style.maxHeight = 0)
	}
	function openHide(e) {
		const p = e.currentTarget.nextElementSibling
		e.currentTarget.parentNode.classList.toggle('active')
		p.offsetHeight === 0 ? (p.style.maxHeight = `50px`) : (p.style.maxHeight = 0)
	}


    return <>
    <main>
        <div className='container'>
            <div>
                <div className='title-container'>
                    <h2>CONFIGURE YOUR HEADPHONES</h2>
                    <p>PLUG INTO NIRVANA</p>
                </div>
                <div className='grid'>
                    <hr />
                    <div className='content-container'>
                        <div onClick={openHideBig}>
                            <div>
                                <h3>Headband</h3>
                            </div>
                        </div>
                        <div className='color-container'>
                            {headbandColors.map((value,index) => (
                                <button
                                    key={index}
                                    className={snap.color === value.color ? 'active' : ''}
                                    onClick={() => {
                                        state.color = value.color;
                                        setHeadbandColor(value.color);
                                    }}
                                >
                                    {value.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className='content-container'>
                        <div onClick={openHideBig}>
                            <div>
                                <h3>Earcups</h3>
                            </div>
                        </div>
                        <div className='color-container'>
                            {earcupColors.map((value,index) => (
                                <button
                                    key={index}
                                    className={snap.color === value.color ? 'active' : ''}
                                    onClick={() => {
                                        state.color = value.color;
                                        setEarcupColor(value.color);
                                    }}
                                >
                                    {value.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>}

export default Configurator;
