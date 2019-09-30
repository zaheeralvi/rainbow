import React, { Component } from 'react';
import Header from './shared/header/header';
import Home from './components/home/home';
import Brand from './components/brand/brand';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      main:'home'
    }

  }
  updateState(key){
    this.setState({
      main:key
    })
  }

  render() {
    var { main } = this.state;
    return (
      <div>
        <Header />
        <div className='body_content'>
          <Tab.Container id="left-tabs-example" activeKey={this.state.main} onSelect={k=>this.updateState(k)}>
            <div className='sidebar sidebar_list'>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="learn">Learn</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="build">Build</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="our_brand">Our Brand</Nav.Link>
                </Nav.Item>

              </Nav>
            </div>
            <div className='content'>
              <Tab.Content>
                <Tab.Pane eventKey="home">
                  <Home />
                </Tab.Pane>
                <Tab.Pane eventKey="learn">
                  <h2>learn</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="build">
                  <h2>build</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="our_brand">
                  <Brand />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>

      </div>
    );
  }
}

export default App;
