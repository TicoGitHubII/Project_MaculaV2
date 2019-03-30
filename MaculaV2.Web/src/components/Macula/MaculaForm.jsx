import React, { Component } from "react";
import { Fragment } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Card,
  Button
} from "reactstrap";
import "bootstrap";

class MaculaForm extends Component {
  handleSubmit = e => {};
  render() {
    return (
      <Fragment>
        <div className="container mt-3 col-md-6 offset-md-3">
          <Card className="card ">
            <div className="p-3">
              <Form>
                <div className="form-group-lg">
                  <Label forhtml="First Name" className="col-form-label-lg">
                    First Name
                  </Label>
                  <Input type="text" className="form-control-lg" />
                  <FormFeedback>Enter Your First Name</FormFeedback>
                </div>
                <div className="form-group-lg">
                  <Label forhtml="First Name" className="col-form-label-lg">
                    Last Name
                  </Label>
                  <Input type="text" className="form-control-lg" />
                  <FormFeedback>Enter Your Last Name</FormFeedback>
                </div>
                <div className="form-group-lg">
                  <Label forhtml="First Name" className="col-form-label-lg">
                    Email
                  </Label>
                  <Input type="text" className="form-control-lg" />
                  <FormFeedback>Enter Email</FormFeedback>
                </div>
                <div>
                  <Button
                    onClick={e => this.handleSubmit}
                    size="lg"
                    className="mt-3 auto"
                    color="info"
                    type="button"
                    block
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </Fragment>
    );
  }
}
export default MaculaForm;
