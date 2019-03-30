/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.2
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

// App Routes
import Routes from "./Routes";

// Vendor dependencies
import "./Vendor";
// Application Styles
import "./styles/bootstrap.scss";
import "./styles/app.scss";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    // specify base href from env varible 'PUBLIC_URL'
    // use only if application isn't served from the root
    // for development it is forced to root only
    /* global PUBLIC_URL */
    const basename =
      process.env.NODE_ENV === "development" ? "/" : PUBLIC_URL || "/";

    return (
      <BrowserRouter basename={basename}>
        <Fragment>
          <Routes />
          <ToastContainer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
