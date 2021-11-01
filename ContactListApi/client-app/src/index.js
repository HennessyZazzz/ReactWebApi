import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import css
import "./index.css";

// Import components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

// Import store
import store from "./store";
import { Provider } from "react-redux";


const App = () => {

    return (
        <Router>
            <Switch>
                <Provider store={store}>
                    <Route path="/" exact render={() => (<Main />)} />
                    <Route path="/add-new-contact" exact render={() => (<AddContact />)} />
                    <Route path="/edit-contact" exact render={() => (<EditContact />)} />
                </Provider>
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));