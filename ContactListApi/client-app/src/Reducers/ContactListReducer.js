const initialState = {
    ContactList: [],
    CurrentContact: null,
    EditContact: null,
    Search: ""
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_LIST_ADDED":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_LIST_REMOVED":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CHANGE_STATUS_SUCCESS": 
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_LIST_SEARCH_SUCCESS": 
            return {
                ...state,
                Search: action.payload
            }
        case "SET_EDIT_CONTACT": 
            return {
                ...state,
                EditContact: action.payload
            }
        case "EDIT_CONTACT": 
            return {
                ...state,
                ContactList: action.payload
            }
    }
    return state;
}

export default ContactListReducer;