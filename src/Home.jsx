import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/img2.svg"
import Common from './Common'

const Home = () => {
    return (
        <div>
            <Common name="Grow your business with" imgsrc={web} visit='/service' btname="Get started" />
        </div>
    )
}

export default Home
