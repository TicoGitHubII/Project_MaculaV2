import React from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import { updateVideo } from "../../Services/maculaService";
import { maculaSchema } from "./schemas";
import { Label } from "reactstrap";
import { withRouter } from "react-router-dom";
class MaculaForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: null
    };

    let {
      Id,
      Title,
      TitleUrl,
      Influencer,
      VideoService,
      TotalViews
    } = this.props.location.state.detail[0];
    this.state.formValues = {
      id: Id,
      title: Title,
      titleUrl: TitleUrl,
      influencer: Influencer,
      videoService: VideoService,
      totalViews: TotalViews
    };
  }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log(JSON.stringify(values, 2));

    updateVideo(values, values.id)
      .then(this.onSuccess)
      .catch(this.onError);

    setSubmitting(false);
    return;
  };

  
  onSuccess = response => {
    console.log(response + ": Success");
    this.props.history.goBack();
  };

  onError = response => {
    console.log(response + ": Error");
  };

  render() {
    return (
      <Formik
        initialValues={this.state.formValues}
        enableReinitialize={true}
        validate={values => {
          let errors = [];

          if (!values.title) errors.title = "Title Required";
          //check if my values have errors
          return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return (
            <div className="card col-md-5 offset-md-3 d-flex justify-content-center">
              <span className=" text-center ">
                <h1 className="card-title  text-center ">UPDATE </h1>{" "}
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
                  <Label for="title">Title</Label>
                  <Field
                    className="form-control form-control-lg"
                    type="text"
                    name="title"
                    placeholder="title"
                  />
                  <ErrorMessage name="title" />
                </div>

                <div className="form-group">
                  <Label for="titleUrl">TitleUrl</Label>
                  <Field
                    className="form-control form-control-lg"
                    type="text"
                    name="titleUrl"
                    placeholder="titleUrl"
                  />
                  <ErrorMessage name="titleUrl" />
                </div>

                <div className="form-group">
                  <Label for="influencer">Influencer</Label>
                  <Field
                    className="form-control form-control-lg"
                    type="text"
                    name="influencer"
                    placeholder="Influencer"
                  />
                  <ErrorMessage name="Influencer" />
                </div>

                <div className="form-group">
                  <Label for="videoService">Video Service</Label>
                  <Field
                    className="form-control form-control-lg"
                    type="text"
                    name="videoService"
                    // value={videoService}
                    placeholder="VideoService"
                  />
                  <ErrorMessage name="videoService" />
                </div>

                <div className="form-group">
                  <Label for="totalViews"> Total Views</Label>
                  <Field
                    className="form-control form-control-lg"
                    type="text"
                    name="totalViews"
                    placeholder="TotalViews"
                  />
                  <ErrorMessage name="totalViews" />
                </div>
                <div className="d-flex p-2 ">
                  <div className="mr">
                    <button
                      type="submit"
                      className="btn btn-lg btn-info btn-block"
                      disabled={formProps.isSubmitting}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      />
    );
  }
}
export default withRouter(MaculaForm2);
