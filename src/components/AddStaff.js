import React from 'react';

class AddStaff extends React.Component {
    createStaff(event) {
        event.preventDefault();
        const staff = {
            name: this.name.value,
            band: this.band.value,
            breast: false,
            prostpelvis: false,
            prostra: false,
            lungra: false,
            brain: false

        }
        this.props.addStaff(staff);
        this.AddStaff.reset();
    }

    render() {
        return (
            <form ref={(input) => this.AddStaff = input} className="staff-edit" onSubmit={(e) => this.createStaff(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="StaffName" />
                <select ref={(input) => this.band = input}>
                    <option value="Band 4 - Student Dosimetrist">Band 4 - Student Dosimetrist</option>                
                    <option value="Band 5 - Dosimetrist">Band 5 - Dosimetrist</option>
                    <option value="Band 6 - Senior Dosimetrist">Band 6 - Senior Dosimetrist</option>
                    <option value="Band 7 - Chief Dosimetrist">Band 7 - Chief Dosimetrist</option>
                    <option value="Band 8a - Section Lead">Band 8a - Section Lead</option>    
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddStaff;