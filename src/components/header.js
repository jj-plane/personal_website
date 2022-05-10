import React from 'react'
import '../styles/header.scss'
import { Link } from "gatsby"

class Nav extends React.Component {
    render(){
        return(
            <nav>
                <div className='navContainer'>
                    <Link className='logo' to={'/'}>JJA</Link>
                    <button className='themePicker' ref={this.props.themeRef} onClick={this.props.changeTheme}>{this.props.theme === 'light' ? `🌙` : `🌞`}</button>
                </div>
            </nav>
        )
    }
}

export default Nav