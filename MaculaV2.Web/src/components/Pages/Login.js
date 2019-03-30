import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Label } from "reactstrap";
import { login } from "../../Services/maculaService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as notificationMessage from "../Common/Toast";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        userName: "",
        password: "",
        grant_type: "password",
        access_token: "",
        alertMessages: props.alertMessages === false ? false : true
      }
    };
  }
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    login(values)
      .then(this.onSuccess)
      .catch(this.onError);

    setSubmitting(false);

    return;
  };

  onSuccess = response => {
    console.log(response + ": Success =>  " + response.data.access_token);
    //Browser Session Storage
    if (response.data.access_token) {
      sessionStorage.setItem("accessToken", response.data.access_token);
      this.setState = {
        access_token: response.data.access_token
      };

      this.props.history.push({
        pathname: "/lgin",
        state: { detail: response.data.access_token }
      });
    }
  };

  onError = response => {
    console.log(response + ": Error");

    if (response.data === undefined) {
      if (this.state.alertMessages) {
        notificationMessage.error({
          message: "Looks like you need to register!"
        });
      }
      this.props.history.push({ pathname: "/mregister" });
    }
  };

  render() {
    return (
      <Formik
        initialValues={this.state.initialValues}
        validate={values => {
          let errors = [];
          if (!values.userName) {
            errors.userName = "Required";
          } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(
              values.userName
            )
          ) {
            errors.userName = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password Required";
          } else if (!/^[A-Za-z0-9!@#$%^()@_\\-\\+,./"?~]+.{4,8}$/) {
            errors.password = "Invalid Password";
          }
          return errors;
        }}
        onSubmit={this.handleSubmit}
        render={({ isSubmitting, handleBlur, handleChange, values }) => {
          return (
            <div className="card col-md-5 offset-md-3 d-flex justify-content-center">
              <span className=" text-center ">
                <h1 className="card-title  text-center ">Login </h1>
                <span>
                  <img
                    className="img-fluid rounded "
                    src="img/macula_logo3.png"
                    alt="Logo"
                  />
                </span>
              </span>

              <Form>
                <div className="form-group with-focus">
                  <Label for="email">Email</Label>

                  <Field
                    type="email"
                    name="userName"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={values.userName}
                    onBlur={handleBlur}
                  />
                </div>
                <ErrorMessage name="userName" />

                <div className="form-group with-focus">
                  <Label for="password">Password</Label>

                  <Field
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <ErrorMessage name="password" />

                <div className="clearfix">
                  <div className="checkbox c-checkbox float-left mt-0">
                    <label>
                      <input type="checkbox" value="" name="remember" />
                      <span className="fa fa-check" />
                      Remember Me
                    </label>
                  </div>
                  <div className="float-right">
                    <Link to="recover" className="text-muted">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <button
                  className="btn btn-block btn-primary mt-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </Form>

              <p className="pt-3 text-center">Need to Signup?</p>
              <Link to="mregister" className="btn btn-block btn-secondary">
                Register Now
              </Link>

              <div className="p-3 text-center">
                <span className="mr-2">&copy;</span>
                <span>2018</span>
                <span className="mx-2">-</span>
                <span>Macula</span>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default withRouter(Login);
