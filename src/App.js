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
      main:'3',
      sub:''
    }
    this.updateMenu = this.updateMenu.bind(this)
    this.subUpdate = this.subUpdate.bind(this)
  }
  updateMenu(key){
    this.setState({
      main:key
    })
  }
  
  subUpdate(key){
    this.setState({
      main:key
    })
  }
  

  render() {
    var { main, sub } = this.state;
    return (
      <div>
        <Header onChange={this.updateMenu} onSubUpdate={this.subUpdate} />
        <div className='body_content'>
          <Tab.Container id="left-tabs-example" activeKey={this.state.main} onSelect={k=>this.updateState(k)}>
            <div className='sidebar sidebar_list'>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="3">Learn</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">Build</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">Our Brand</Nav.Link>
                </Nav.Item>

              </Nav>
            </div>
            <div className='content'>
              <Tab.Content>
                <Tab.Pane eventKey="3">
                  <Home />
                </Tab.Pane>
                {/* <Tab.Pane eventKey="3">
                  <h2>learn</h2>
                </Tab.Pane> */}
                <Tab.Pane eventKey="4">
                  <h2>build</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <Brand active={this.state.sub} />
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
