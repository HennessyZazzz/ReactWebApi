export const getContactList = (list) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: list
    }
}

export const AddNewContact = (contact) => {
    return {
        type: "CONTACT_LIST_ADDED",
        payload: contact
    }
}

export const RemovedContact = (list) => {
    return {
        type: "CONTACT_LIST_REMOVED",
        payload: list
    }
}

export const ChangeStatusContact = (contact) => {
    return {
        type: "CHANGE_STATUS_SUCCESS",
        payload: contact
    }
}

export const SearchContactOnList = (search) => {
    return {
        type: "CONTACT_LIST_SEARCH_SUCCESS",
        payload: search
    }
}

export const SetEditContact = (editcontact) => {
    return {
        type: "SET_EDIT_CONTACT",
        payload: editcontact
    }
}

export const ListEditContact = (list) => {
    return {
        type: "EDIT_CONTACT",
        payload: list
    }
}