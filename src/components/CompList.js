import React from 'react';

//Component Imports
import StaffMember from './StaffMember';

//Stateless Component because all it does is render something to the DOM.
const CompList = (props) => {
    return (
        <div className="comp-list">
            {/* Displaying all the staff and their competancies */}
            <h4>Staff Compentancy Content</h4>
            <ul className="list-of-staff">
                {
                    Object
                        .keys(props.staff)
                        .map(key => <StaffMember key={key} details={props.staff[key]} />)
                }
            </ul>
        </div>
    )
}

export default CompList;