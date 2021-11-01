import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { ListEditContact } from "../../Actions/ContactListActions"
import apiService from "../../Services/APIService";

class EditContact extends Component {

    state = {
        name: this.props.EditContact.name,
        phone: this.props.EditContact.phone,
        email: this.props.EditContact.email,
        gender: this.props.EditContact.gender,
        status: this.props.EditContact.status,
        image: this.props.EditContact.image,
        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            name: name
        })
    }
    onGetPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            phone: phone
        })
    }
    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({
            email: email
        })
    }
    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            status: status
        })
    }
    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({
            gender: gender
        })
    }
    onGetImage = (e) => {
        const image = e.target.value;
        this.setState({
            image: image
        })
    }
    onGetAvatar = (e) => {
        const avatar = e.target.value;

        this.setState({
            image: avatar,
        })
    }

    EditContact = (e) => {
        e.preventDefault();
        const { ContactList, ListEditContact } = this.props;
        const { name, phone, email, status, image, gender } = this.state;
        const {id} = this.props.EditContact;

        const NewContact = {
            id,
            name,
            phone,
            email,
            gender,
            status,
            image,
        }


        apiService.UpdateContactDatabase(NewContact).then(x => {
            if (x.status === 200) {

                let list = ContactList.slice();
                const index = list.findIndex(elem => elem.id === id);
    
                list[index] = NewContact;

                ListEditContact(list);
                this.setState({
                    isRedirect: true
                })
            }

        });

    }

    render() {

        let { name, phone, status, email, gender, image, isRedirect } = this.state;
        let avatar = image;
        if (isRedirect === true) {
            return <Redirect to="/" />
        }
        if (image === "" || image === null) {
            image = `https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg`;
        } else {
            image = `https://api.randomuser.me/portraits/${gender}/${image}.jpg`;
        }
        return (
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Contact list</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Edit contact</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-8">
                            <form onSubmit={this.EditContact}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" defaultValue={name} className="form-control" onChange={this.onGetName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" defaultValue={phone} className="form-control" onChange={this.onGetPhone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" defaultValue={email} onChange={this.onGetEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <select className="custom-select" onChange={this.onGetGender}>
                                        <option defaultValue>{gender}</option>
                                        <option value="women">Women</option>
                                        <option value="men">Men</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" onChange={this.onGetStatus}>
                                        <option defaultValue>{status}</option>
                                        <option value="Work">Work</option>
                                        <option value="Family">Family</option>
                                        <option value="Private">Private</option>
                                        <option value="Friend">Friend</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="0" max="99" defaultValue={avatar} className="form-control" onChange={this.onGetAvatar} />
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src={image} className="rounded avatar float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, EditContact } = ContactListReducer;
    return { ContactList, EditContact };
}

const mapDispatchToProps = {
    ListEditContact
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);

//export default EditContact;