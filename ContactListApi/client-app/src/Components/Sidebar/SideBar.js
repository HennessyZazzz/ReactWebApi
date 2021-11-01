import React from "react";

import { getContactList } from "../../Actions/ContactListActions";
import { connect } from "react-redux";

const SideBar = ({ ContactList, getContactList }) => {

    const AllLength = getContactList(ContactList);
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{AllLength.payload.length}</span></div>
                <div className="list">
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success">Work</div><span>{AllLength.payload.filter(el => el.status === "Work").length}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary">Family</div><span>{AllLength.payload.filter(el => el.status === "Family").length}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger">Private</div><span>{AllLength.payload.filter(el => el.status === "Private").length}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning">Friends</div><span>{AllLength.payload.filter(el => el.status === "Friend").length}</span>
                    </div>
                    {/* <button type="button" className="btn btn-primary font-weight-700">Add new label</button> */}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ ContactListReducer }) => {
    const {ContactList} = ContactListReducer;
    return {ContactList};
}
const mapDispatchToProps = {
    getContactList
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);