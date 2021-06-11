import React from 'react'
import { NavLink } from 'react-router-dom'
import contactimg from "../src/images/img1.svg"
import Common from './Common'

const About = () => {
    return (
        <div>
            <Common name="Welcome to About page" imgsrc={contactimg} visit='/contact' btname="Contact now" />
        </div>
    )
}

export default About;
