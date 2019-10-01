import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './header.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            main: '',
            sub: ''
        }

    }

    currentKey(key) {
        console.log(key)
        if (key < 10) {
            this.setState({ main: key })
            if (key !== 1 && key !== 2) {
                this.props.onChange(key)
            }
        } else {
            this.setState({ sub: key })
            this.props.subUpdate(key)
        }
    }

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

                    <ButtonToolbar className='mobile_menu'>
                        <DropdownButton title='' onSelect={k => this.currentKey(k)} >
                            <p className='lvl1 custom_lvl' onClick={() => this.currentKey(1)}>Aaron</p>
                            {this.state.main === 1 ? <div>
                                <Dropdown.Item className='lvl3' eventKey="11">Profile</Dropdown.Item>
                                <Dropdown.Item className='lvl3' eventKey="12">SIGN OUT</Dropdown.Item>
                            </div>
                                : null
                            }
                            <p className='lvl1 custom_lvl' onClick={() => this.currentKey(2)}>Account</p>
                            {this.state.main === 2 ? <div>
                                <Dropdown.Item className='lvl3' eventKey="21">Setting</Dropdown.Item>
                                <Dropdown.Item className='lvl3' eventKey="22">User</Dropdown.Item>
                            </div>
                                : null
                            }
                            <Dropdown.Item className='lvl2' eventKey="3">Home</Dropdown.Item>
                            <Dropdown.Item className='lvl2' eventKey="4">Build</Dropdown.Item>
                            <p className='lvl2 custom_lvl' onClick={() => this.currentKey(5)}>Our Brand</p>
                            {this.state.main === 5 ? <div>
                                <Dropdown.Item className='lvl3' eventKey="51">Company Info</Dropdown.Item>
                                <Dropdown.Item className='lvl3' eventKey="52">Our Foundations</Dropdown.Item>
                                <Dropdown.Item className='lvl3' eventKey="53">Our Personality</Dropdown.Item>
                                <Dropdown.Item className='lvl3' eventKey="54">Our Voice</Dropdown.Item>
                                <Dropdown.Item className='lvl3' eventKey="55">Our Look</Dropdown.Item>
                            </div>
                                : null
                            }
                        </DropdownButton>
                    </ButtonToolbar>
                </Navbar>
            </div>
        );
    }
}

export default Header;
