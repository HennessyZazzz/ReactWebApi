import { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>404 Page Not Found.</h2>
                    </div>
                </div>
                <div className="row">
                    <Link to="/">Go to main page</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound;