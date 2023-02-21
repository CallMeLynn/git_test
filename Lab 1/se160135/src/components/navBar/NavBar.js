import React, { useContext } from 'react'
import { Icon, Navbar } from 'react-materialize';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../themes/ThemeContext';
// import Icon from '@mui/material/Icon';

export default function NavBar() {
    const { theme, toggle, dark} = useContext(ThemeContext);
    return (
        // <div className='nav-row pt-5 pb-2 left-0 '>
        //     <div className=''>
        //         <h3 className='font-bold uppercase text-6xl text-emerald-400 font-mono'>Film Shelf</h3>
        //         <p className='text-xl font-thin '>Share some interesting films with you</p>
        //         <div className='mb-5 mt-2' >
        //             <a className='switch-mode p-2' href='#' onClick={toggle} style={{backgroundColor: theme.backgroundColor, color: theme.color, outline:'none', borderRadius:'10px'}} data-testid = "toggle-theme-btn">
        //                 Switch Nav to {!dark ? 'Dark' : 'Light'} mode
        //             </a>
        //         </div>
        //     </div>
        //     <nav className='navbar bg-emerald-400 text-white mb-5 space-x-10 justify-items-start text-left pl-10' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        //         <Link to={``}>
        //             <button className='hover:bg-emerald-300 py-2 px-5'>Home</button>
        //         </Link>
        //         <Link to={`contact`}>
        //             <button className='hover:bg-emerald-300 py-2 px-5'>Contact</button>
        //         </Link>
        //     </nav>
        // </div>
        <Navbar className='menu' alignLinks='right' brand={<span className='brand-logo'>Player Cards</span>}
        id="mobile-nav" menuIcon={<Icon>menu</Icon>}>
            <ul>
                <li><Link to='/'><Icon left>home</Icon></Link></li>
                <li to='/contact'><Link to='/contact'><Icon>cloud</Icon></Link></li>
            </ul>
        </Navbar>
    )
}
