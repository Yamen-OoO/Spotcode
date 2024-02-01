import React from 'react'
import logo from '../imgs/logoOrange.png'

function Copyright() {
    return (
        <div className='copyright text-center gap-2 align-items-center d-flex justify-content-center py-2 theme-background-1'>
            <img src={logo} alt='logo spotcode' />
            <p className='copyright theme-text-1 m-0'>©Copyright 2023 SpotCode | All Right Reserved.</p>
        </div>
    )
}

export default Copyright