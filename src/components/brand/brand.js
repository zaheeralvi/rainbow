import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import './brand.css'

class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: props.active,
      default: 51
    }
    if(this.props.active==''){
      this.setState({sub:51})
    }
  }

  updateMenu(k) {
    console.log(k)
    this.setState({ sub: k })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sub: nextProps.active });  
  }

  render() {
    return (
      <div className='body_content'>
        <Tab.Container id="left-tabs-example" activeKey={this.state.sub} onSelect={k => this.updateMenu(k)} >
          <div className='sidebar sidebar_list second'>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="51">First</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="52">Second</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="53">Third</Nav.Link>
              </Nav.Item>

            </Nav>
          </div>
          <div className='content'>
            <Tab.Content>
              <Tab.Pane eventKey="51">
                <h2>First</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="52">
                <h2>second</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="53">
                <h2>Third</h2>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    );
  }
}

export default Brand;
