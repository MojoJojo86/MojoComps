import React from 'react';
import { signedOff } from '../helpers';

class StaffMember extends React.Component {
    render() {
        return (
            <li className="staff-member-info">
                <h4 className="staff-name">Name: {this.props.details.name}</h4>
                <h4 className="staff-band">Band: {this.props.details.band}</h4>
                <ul className="individual-comps">
                    <li className="comp-display"><strong>Breast:</strong> {signedOff(this.props.details.breast)}</li>
                    <li className="comp-display"><strong>Prostate/Pelvis:</strong> {signedOff(this.props.details.prostpelvis)}</li>
                    <li className="comp-display"><strong>Prostate RA</strong> {signedOff(this.props.details.prostra)}</li>
                    <li className="comp-display"><strong>Lung RA:</strong> {signedOff(this.props.details.lungra)}</li>
                    <li className="comp-display"><strong>Brain:</strong> {signedOff(this.props.details.brain)}</li>
                </ul>
            </li>
        )
    }
}

export default StaffMember;

