import React, { Component } from 'react';

//import components
import CompList from './components/CompList';
import Sidebar from './components/Sidebar';
import sampleStaff from './sample-staff';

class App extends Component {
  constructor() {
    super();
    this.addStaff = this.addStaff.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    //Get initial state
    this.state = {
      staff: {}
    };
  }

  addStaff(staffMember) {
    //update our state
    const staff = {...this.state.staff};
    //add in our new staff staff member
    const timestamp = Date.now();
    staff[`staffMember-${timestamp}`] = staffMember;
    //set state
    this.setState({ staff });
  }

  loadSamples() {
    this.setState({
      staff: sampleStaff
    });
  }

  render() {
    return (
      <div className="App">
        <div className="List">
          <h3 className="comp-title">Staff Competancies</h3>
          <CompList staff={this.state.staff} />
        </div>
        <div className="Side">
          <Sidebar addStaff={this.addStaff} loadSamples={this.loadSamples} />
        </div>
      </div>
    );
  }
}

export default App;
