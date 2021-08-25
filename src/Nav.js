import React, { useState, useEffect} from 'react'
import { useHistory  } from 'react-router-dom'

import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 300) {
            handleShow(true);
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                className="nav__logo"
                src="data:image/png;base64,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"
                alt=""
                />
                <img
                onClick={() => history.push('/profile')}
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt=""
                />
            </div>
            
        </div>
    )
}

export default Nav
