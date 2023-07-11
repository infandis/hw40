import React from "react";
function Nav(props) {
    let menu = props.data.nav;
    const menuItem = menu.map(item => <li key={Math.random()}><a href= {item.link}>{item.text}</a></li>)
    return (
        <>
        <nav className="App-nav">
            {menuItem}
        </nav>
        </>
    )
}


export default Nav;