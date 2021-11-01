import { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
// Import components
import Contactitem from "./ContactItem/ContactItem"
// Import actions
import { getContactList, RemovedContact } from "../../../Actions/ContactListActions";
// Import api service
import apiService from "../../../Services/APIService";

class ContactList extends Component {


    state = {
        isloading: true
    }
    componentDidMount() {
        let { getContactList } = this.props;
        apiService.fetchContactList().then(data => {
            setTimeout(() => {
                getContactList(data.List);
                this.setState({
                    isloading: false
                })
            }, 500);
        })
    }

    onClick = (Id) => {

        apiService.RemoveContactDatabase(Id).then(resp => {
            if (resp.status === 200) {
                let { ContactList, RemovedContact } = this.props;
                const index = ContactList.findIndex(elem => elem.id === Id);
                const partOne = ContactList.slice(0, index);
                const partTwo = ContactList.slice(index + 1);
                const tmpList = [...partOne, ...partTwo];
                RemovedContact(tmpList);
            }
        });
    }

    render() {
        let { ContactList, Search } = this.props;
        const { isloading } = this.state;
        const item = ContactList.filter(el => el.name.includes(Search)).map(listItem => {
            return (
                <Contactitem key={listItem.id}
                    {...listItem} onClick={this.onClick} />
            )
        });
        return (
            <section>

                {isloading ? <Loader
                    type="Rings"
                    color="#00BFFF"
                    height={100}
                    width={100} /> : item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
            </section>
        )
    }
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, Search } = ContactListReducer;
    return { ContactList, Search };
}

const mapDispatchToProps = {
    getContactList, RemovedContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);