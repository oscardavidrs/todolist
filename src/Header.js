import React from 'react';
import { Link } from 'react-router-dom'
import './app.css';

class Header extends React.Component {

    render() {
        return (

            <div>
                <h1 style={{ background: "black", color: "white", textAlign: "center", height: 100 }}>ToDo List<br></br>
                    <Link to="/">HOME</Link>
                    <span>  |  </span>
                    <Link to="/about">ABOUT</Link>
                </h1>
            </div>

        )
    }
}
export default Header;