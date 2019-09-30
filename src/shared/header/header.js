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
        this.setState({ main: key })
    }

    stopClose(e){
       e.preventDefault()
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
                        <DropdownButton onSelect={k => this.currentKey(k)} >
                            <Dropdown.Item className='lvl1' onClick={$event=>this.stopClose($event)} eventKey="1">Aaron</Dropdown.Item>
                            {this.state.main == 1 ? <Dropdown.Item className='lvl3' eventKey="11">Profile</Dropdown.Item>
                                : null
                            }
                            {this.state.main == 1 ? <Dropdown.Item className='lvl3' eventKey="12">SIGN OUT</Dropdown.Item>
                                : null
                            }
                            <Dropdown.Item className='lvl1' eventKey="2">Account</Dropdown.Item>
                            <Dropdown.Item className='lvl2' eventKey="3">Home</Dropdown.Item>
                            <Dropdown.Item className='lvl2' eventKey="4">Build</Dropdown.Item>
                            <Dropdown.Item className='lvl2' eventKey="5">Our Brand</Dropdown.Item>
                            {this.state.main == 5 ? <div>
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
