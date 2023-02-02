import React from 'react'

export default function NavBar() {
    return (
        <div className='nav-row'>
            <div className='navi'>
                <a className='active item' href='#home'>Home</a>
                <a className='item' href='#news'>News</a>
                <a className='item' href='#about'>About</a>
                <a className='item' href='#contact'>Contact</a>
            </div>
        </div>
    )
}
