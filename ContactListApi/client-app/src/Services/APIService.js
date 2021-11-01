class ContactListService {
    ROOT_URL = "/api/ContactList";
    GET_LIST = "/GetContactList";
    ADD_CONTACT = "/AddNewContact";
    REMOVE_CONTACT = "/RemoveContact";
    UPDATE_CONTACT = "/UpdateContact";
    CHANGE_STATUS_CONTACT = "/ChangeStatus";

    async fetchContactList() {
        const List = await fetch(this.ROOT_URL + this.GET_LIST)
            .then(responce => {
                return responce.json();
            }).then(data => {
                console.log(data)
                if (data == null) {
                    return {
                        List: []
                    }

                } else {
                    return {
                        List: data
                    }
                }
            })
            .catch(err => console.log(err))
        return List;
    }

     AddContactDatabase = (Contact) => {
         const temp = fetch(this.ROOT_URL + this.ADD_CONTACT,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Contact)
            })
             .then(res => { return res })
             .catch(res => { return res })
        return temp;
    }

    RemoveContactDatabase = (Id) => {
        const temp = fetch(this.ROOT_URL + this.REMOVE_CONTACT + "/" + Id,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => { return res } )
            .catch(res => { return res } )
        return temp;
    }

    UpdateContactDatabase = (Contact) => {
        const temp = fetch(this.ROOT_URL + this.UPDATE_CONTACT,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(Contact)
            })
            .then(res => { return res })
            .catch(res => { return res })
        return temp;
    }

    ChangeStatusContactDatabase = (Id, Status) => {
        const Object = {
            Id,
            Status
        };
        const temp = fetch(this.ROOT_URL + this.CHANGE_STATUS_CONTACT,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(Object)
            })
            .then(res => { return res })
            .catch(res => { return res })
        return temp;
    }
}

const apiService = new ContactListService();
export default apiService;