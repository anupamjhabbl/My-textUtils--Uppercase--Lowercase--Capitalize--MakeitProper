import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props){
    let colorfunc = () => {
        if (props.mode==='dark'){
           return 'white';
        }
        else{
           return 'black';
        }
    }

    return (
        <div id="navardiv">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar`} >
                <div className="navbar_main_div">
                    <div className="navbar_insider_div" id="navbarSupportedContent">    
                        <Link className="navbar-brand" to="/">{props.title}</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:colorfunc()}}>Dark Mode</label>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string
}

Navbar.defaultProps = {
    title: "Anupam"
}

export default Navbar;