import React from 'react';
import logo from './logo.jpg'

function Header(props) {
    let menu = props.data.nav;
    const menuItem = menu.map(item => <li key={Math.random()}><a href= {item.link}>{item.text}</a></li>)
    return (
        <header>
            <ul className='App-header'>
            <img src={logo} alt='banana-cat'></img>
              {menuItem}  
            </ul>
        </header>
    )
}

export default Header;