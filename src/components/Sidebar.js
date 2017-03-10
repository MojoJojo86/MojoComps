import React from 'react';

//Component Imports
import AddStaff from './AddStaff';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <h3 className="brand">Planning Comps</h3>
                <AddStaff addStaff={this.props.addStaff} />
                <button onClick={this.props.loadSamples}>Load Sample Staff</button>
            </div>
        )
    }
}

export default Sidebar;