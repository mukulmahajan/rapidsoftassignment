import React from 'react'
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import watsoo from './img/watsoo.jfif';

import { useAlert } from 'react-alert'

const Header = () => {
    const alert = useAlert()
    return (
        <section className="head1" >
            <FontAwesomeIcon icon='bars' className="headf" />
            <img src={watsoo} alt="noimg" style={{height:'80%',width:'6%',margin:'1% 0% 0% 1%'}} />
            <button className="headb" onClick={() => {alert.show('Button Pressed!')}}>
                <FontAwesomeIcon icon='power-off' />logout
            </button>
        </section>
    )
}

export default Header
