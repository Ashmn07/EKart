import React from 'react'
import { Announcement } from '../components/Announcement'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'

export const Home:React.FC = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    )
}
