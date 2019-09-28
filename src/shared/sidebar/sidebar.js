import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            navSecond: 'hide',
        }
    }

    updateClass(){
        console.log('item')
    }
    render() {
        return (
            <div>
                <ul className='list-unstyled text-right sidebar_list'>
                    <li onClick={()=>this.updateClass()} className='active'>Learn</li>
                    <li onClick={()=>this.updateClass()}>Build</li>
                    <li>Our Brand</li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
