import React from 'react'
import '../styles/header.scss'
import { Link } from "gatsby"

class Nav extends React.Component {
    render(){
        return(
            <nav>
                <div className='navContainer'>
                    <Link className='logo' to={'/'}>JJA</Link>
                    <button className='themePicker' onClick={this.props.switcher}>{this.props.theme === 'light' ? `🌙` : `🌞`}</button>
                </div>
            </nav>
        )
    }
}

export default Nav