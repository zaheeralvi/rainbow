import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import NavItem from 'react-bootstrap/NavItem'

import './brand.css'

function Brand() {
  return (
      <div className='body_content'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="home">
            <div className='sidebar sidebar_list second'>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="learn">First</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="build">Second</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="our_brand">Third</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </div>
            <div className='content'>
              <Tab.Content>
                <Tab.Pane eventKey="home">
                  <h2>Brand Home</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="learn">
                  <h2>first</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="build">
                  <h2>second</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="our_brand">
                  <h2>third</h2>
                </Tab.Pane>
              </Tab.Content>
            </div>
        </Tab.Container>
      </div>
  );
}

export default Brand;
