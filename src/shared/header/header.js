import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import './header.css'

class Header extends Component {


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <div className='logo'>
                        <a href='/' >
                            <img src='/images/logo.png' alt='logo' />
                        </a>
                    </div>
                    <div className='right_nav'>
                        <ul>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Account
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">User</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className='m-0'>
                                <Dropdown>
                                    <Dropdown.Toggle variant='success' id="dropdown-basic">
                                        Aroun
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li><span className='user_logo'>A</span></li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
