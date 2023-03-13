import React, { useEffect, useState } from 'react';
import '../index.css'
import { setTheme } from '../utils/themes';

import {
    BsMoon,
    BsSun
} from 'react-icons/bs'

function Toggle() {
    const [toggleClass, setToggleClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggleClass('light')
        } else {
            setTheme('theme-dark');
            setToggleClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setToggleClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light')
        }
    }, [theme])

    return (
        <div className="container__toggle">
            {
                toggleClass === "light" ?
                <button className="btn theme-btn" onClick={handleOnClick}> 
                    <BsMoon />
                </button>
                :
                <button className="btn theme-btn" onClick={handleOnClick}>
                    <BsSun />
                </button>
}
        </div>
    )
}

export default Toggle;