import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* loader component for Suspense*/
import PageLoader from "./components/Common/PageLoader";

import Base from "./components/Layout/Base";
import BasePage from "./components/Layout/BasePage";

// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const MaculaForm = lazy(() => import("./components/Macula/MaculaForm"));
const MaculaRegister = lazy(() => import("./components/Macula/MaculaRegister"));
const MaculaForm2 = lazy(() => import("./components/Macula/MaculaForm2"));
const MaculaTable = lazy(() => import("./components/Macula/MaculaTable"));
const MaculaDisplay = lazy(() => import("./components/Macula/MaculaDisplay"));
const MaculaCard = lazy(() => import("./components/Macula/MaculaCard"));
const DashboardV1 = lazy(() => import("./components/Dashboard/DashboardV1"));
const Welcome = lazy(() => import("./components/Macula/Fullscreen/Welcome"));

const Login = lazy(() => import("./components/Pages/Login"));
const Register = lazy(() => import("./components/Pages/Register"));
const Recover = lazy(() => import("./components/Pages/Recover"));
const Lock = lazy(() => import("./components/Pages/Lock"));
const NotFound = lazy(() => import("./components/Pages/NotFound"));
const Error500 = lazy(() => import("./components/Pages/Error500"));
const Maintenance = lazy(() => import("./components/Pages/Maintenance"));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
  "/login",
  "/register",
  "/recover",
  "/lock",
  "/notfound",
  "/error500",
  "/maintenance"
];

const Routes = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };

  // Animations supported
  //      'rag-fadeIn'
  //      'rag-fadeInRight'
  //      'rag-fadeInLeft'

  const animationName = "rag-fadeIn";

  if (listofPages.indexOf(location.pathname) > -1) {
    return (
      // Page Layout component wrapper
      <BasePage>
        <Suspense fallback={<PageLoader />}>
          <Switch location={location}>
            <Route path="/login" component={waitFor(Login)} />

            <Route path="/register" component={waitFor(Register)} />
            <Route path="/recover" component={waitFor(Recover)} />
            <Route path="/lock" component={waitFor(Lock)} />
            <Route path="/notfound" component={waitFor(NotFound)} />
            <Route path="/error500" component={waitFor(Error500)} />
            <Route path="/maintenance" component={waitFor(Maintenance)} />
          </Switch>
        </Suspense>
      </BasePage>
    );
  } else {
    return (
      // Layout component wrapper
      // Use <BaseHorizontal> to change layout
      <Base>
        <TransitionGroup>
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames={animationName}
            exit={false}
          >
            <div>
              <Suspense fallback={<PageLoader />}>
                <Switch location={location}>
                  {/* Macula */}

                  <Route path="/welcome" component={waitFor(Welcome)} />
                  <Route
                    path="/macula-table"
                    component={waitFor(MaculaTable)}
                  />
                  <Route
                    path="/macula-display"
                    component={waitFor(MaculaDisplay)}
                  />
                  <Route path="/macula-card" component={waitFor(MaculaCard)} />
                  <Route path="/macula-form" component={waitFor(MaculaForm)} />
                  <Route
                    path="/macula-form2"
                    component={waitFor(MaculaForm2)}
                  />
                  <Route
                    path="/mregister"
                    component={waitFor(MaculaRegister)}
                  />

                  {/* Dashboard*/}
                  <Route path="/dashboardv1" component={waitFor(DashboardV1)} />

                  {/* Default Landing Page */}
                  <Redirect to="/welcome" />
                </Switch>
              </Suspense>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Base>
    );
  }
};

export default withRouter(Routes);
