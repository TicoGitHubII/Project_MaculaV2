import React, { Component } from "react";
import { Fragment } from "react";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import "./fullScreen.css";
import YoutubeBackground from "react-youtube-background";
import { white } from "ansi-colors";
import { inherits } from "util";
class Welcome extends React.Component {
  handleClick = () => {
    this.props.history.push({
      pathname: "/mregister"
    });
  };
  render() {
    return (
      <Fragment>
        <div className="welcomeCenter">
          {/* <div className="block-center mt-4 wd-xl"> */}
          <div className="vimeo-wrapper">
            <iframe
              src="https://player.vimeo.com/video/213774160?background=1&autoplay=1&loop=1&byline=0&title=0"
              frameborder="0"
              webkitallowfullscreen="true"
              mozallowFullScreen="true"
              allowFullScreen
              onClick={this.handleClick}
            />
          </div>
          {/* // className="col-xl-6 col-offset-3 d-flex justify-content-center" */}
          <div className="overlay" onClick={this.handleClick}>
            <span>
              <i className="btnText fab fa-youtube" />
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Welcome;
