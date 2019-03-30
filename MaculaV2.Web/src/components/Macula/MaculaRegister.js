import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { regNewUser } from "../../Services/maculaService";
import { Link, withRouter } from "react-router-dom";
import { Label, Input } from "reactstrap";

class MaculaRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    regNewUser(values)
      .then(this.onSuccess)
      .catch(this.onError);

    setSubmitting(false);
    return;
  };

  onSuccess = response => {
    console.log(response + ": Success");

    if (!response.data.access_token) {
      this.props.history.push({
        pathname: "/login"
      });
    }
  };

  onError = response => {
    console.log(response + ": Error");
  };

  render() {
    return (
      <Formik
        initialValues={this.state.initialValues}
        enableReinitialize={true}
        validate={values => {
          let errors = [];
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(
              values.email
            )
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password Required";
          } else if (!/^[A-Za-z0-9!@#$%^()@_\\-\\+,./"?~]+.{4,8}$/) {
            errors.password = "Invalid Password";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "ConfirmPassword Required";
          } else if (!(values.confirmPassword === values.password)) {
            errors.confirmPassword = " must match password";
          }

          //check if my values have errors
          return errors;
        }}
        onSubmit={this.handleSubmit}
        render={({
          isSubmitting,
          handleBlur,
          handleChange,
          touched,
          values,
          errors
        }) => {
          return (
            <div className="card col-md-5 offset-md-3 d-flex justify-content-center">
              <span className=" text-center ">
                <h1 className="card-title  text-center ">REGISTER </h1>{" "}
                <span>
                  <img
                    className="img-fluid rounded "
                    src="img/macula_logo3.png"
                    alt="Logo"
                  />
                </span>
              </span>
              <Form>
                <div className="form-group">
                  <Label for="email">Email</Label>
                  <Field
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}
                </div>

                <div className="form-group">
                  <Label for="password">Password</Label>
                  <Field
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                  />
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <Label for="password">Confirm Password</Label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div>{errors.confirmPassword}</div>
                  )}
                </div>

                <div className=" d-flex p-2 ">
                  <div>
                    <button
                      type="submit"
                      className=" btn btn-primary btn-lg mr-auto"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="ml-auto">
                    <button
                      type="button"
                      className=" btn btn-danger btn-lg submitForm"
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>

              <p className="pt-3 text-center">Have an account?</p>
              <Link to="login" className="btn btn-block btn-secondary">
                SignIn
              </Link>
            </div>
          );
        }}
      />
    );
  }
}
export default withRouter(MaculaRegister);
