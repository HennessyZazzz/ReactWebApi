import { Link } from "react-router-dom";

import { connect } from "react-redux";
import apiService from "../../../../Services/APIService";

import { RemovedContact, ChangeStatusContact, SetEditContact } from "../../../../Actions/ContactListActions";
import { Component } from "react";

class ContactItem extends Component {

    ChangeStatus = (Id) => {
        const {ContactList, ChangeStatusContact} = this.props;

        const index = ContactList.findIndex(elem => elem.id === Id);
        let contact = ContactList[index];

        switch (contact.status) {
            case "Work": contact.status = "Private"; break;
            case "Private": contact.status = "Family"; break;
            case "Family": contact.status = "Friend"; break;
            case "Friend": contact.status = "Work"; break;
            default: contact.status = "UNDEFINED"; break;

        }

        const tmpList = ContactList.slice();
        tmpList[index] = contact;

        ChangeStatusContact(tmpList);

        apiService.ChangeStatusContactDatabase(Id, contact.status);
        
    }

    Edit = (Id) => {
        const {ContactList, SetEditContact} = this.props;

        const index = ContactList.findIndex(elem => elem.id === Id);
        let contact = ContactList[index];

        SetEditContact(contact);
        
    }

    render() {

        const { id, name, email, phone, status, image, gender, onClick } = this.props;
        let defaultStatus = "lab lab-warning";
    
        switch (status) {
            case "Work": defaultStatus = "lab lab-success d-flex rounded"; break;
            case "Private": defaultStatus = "lab lab-danger d-flex rounded"; break;
            case "Family": defaultStatus = "lab lab-primary d-flex rounded"; break;
            case "Friend": defaultStatus = "lab lab-warning d-flex rounded"; break;
            default: defaultStatus = "lab lab-danger d-flex"; break;
        }
    
        const img = `https://api.randomuser.me/portraits/${gender}/${image}.jpg`;
    console.log(img)
        return (
            <div className="unit" >
                <div className="field name">
                    <div className="check">
                        <input id="cb2" name="cb1" type="checkbox" />
                        <label htmlFor="cb2"></label>
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
    
                    </div>
                    <img src={img} alt="image" className="avatar" />
                    <span>
                        {name}
                    </span>
                    <button type="button" onClick={() => this.ChangeStatus(id)} className={defaultStatus}>{status}</button>
                </div>
                <div className="field phone">
                    {phone}
                </div>
                <div className="field email">
                    {email}
                </div>
                <div className="icons">
                    <Link to="/edit-contact"><i className="far fa-edit fa-2x" onClick={() => this.Edit(id)}></i></Link>
                    <i className="far fa-trash-alt fa-2x" onClick={() => onClick(id)}></i>
                </div>
            </div >
        )
    }
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, CurrentContact, EditContact } = ContactListReducer;
    return { ContactList, CurrentContact, EditContact };
}

const mapDispatchToProps = {
    RemovedContact, ChangeStatusContact, SetEditContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

//export default ContactItem;