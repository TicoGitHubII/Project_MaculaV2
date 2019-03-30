import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Card, CardHeader, CardFooter, Table, Label } from "reactstrap";
import {
  getAllVideo,
  getScrapeData,
  deleteVideo
} from "../../Services/maculaService";
import ScraperRow from "./ScraperRow";
import MaculaTableRow from "./MaculaTableRow";
import { withRouter } from "react-router-dom";
import { white } from "ansi-colors";

class MaculaTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: [],
      listA: [],
      scrapeData: [],
      isHidden: false
    };

    this.state.scrapeData = props.ScraperData;
  }

  handleSelect = item => {
    this.props.history.push({
      pathname: "/macula-form2",
      state: { detail: [item] }
    });
  };

  handleDelete = (event, item) => {
    deleteVideo(item.Id)
      .then(this.onSuccess)
      .catch(this.onError);

    this.props.history.push({
      pathname: "/macula-display"
    });
  };

  toggleHidden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  handleScrape = event => {
    this.toggleHidden();

    var { detail } = this.props.location.state;
    var header = {
      "Content-Type": "application/json",
      Authorization: "Bearer" + detail
    };

    getScrapeData(header)
      .then(this.onScrapeSuccess)
      .catch(this.onError);
  };

  handleLogout = event => {
    sessionStorage.removeItem("accessToken");

    console.log(event);

    this.props.history.push({
      pathname: "/login"
    });
  };

  componentDidMount = () => {
    var { detail } = this.props.location.state;
    var header = {
      "Content-Type": "application/json",
      Authorization: "Bearer" + detail
    };
    getAllVideo(header)
      .then(this.onSuccess)
      .catch(this.onError);
  };

  changeTableState = response => {
    this.setState({
      video: response.data
    });
  };

  onScrapeSuccess = response => {
    console.log("Success on GET Scrape");

    this.setState({
      scrapeData: response.data
    });
  };
  updateScraper = props => {
    return <ScraperRow {...this.props} />;
  };

  onSuccess = response => {
    console.log("Success");
    this.changeTableState(response);
  };

  onError = response => {
    console.log(response + "Error ");
  };

  render() {
    const { scrapeData } = this.state;

    return (
      <ContentWrapper>
        <Card className="card-default">
          <div>
            <CardHeader tag="h2">Your Top Influencers </CardHeader>
            {/* Scraper */}
            {!this.state.isHidden && (
              <div className="input-group d-flex">
                <div className=" input-group-append mr-auto">
                  {!this.state.srapeData ? (
                    <div>
                      <button
                        name="scrape"
                        className="m-3 btn btn-danger btn-lg btn-block"
                        type="button"
                        onClick={event => this.handleScrape(event)}
                      >
                        <h4>Search Influencers</h4>
                      </button>

                      <button
                        name="logout"
                        className="m-3 btn btn-info btn-lg btn-block"
                        onClick={event => this.handleLogout(event)}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    []
                  )}
                </div>
              </div>
            )}
            {this.state.isHidden && (
              <div className="input-group d-flex">
                <div className=" input-group-append mr-auto">
                  {!this.state.srapeData ? (
                    <button
                      name="scrape"
                      className="m-3 btn btn-danger btn-lg btn-block"
                      type="button"
                      onClick={event => this.handleScrape(event)}
                    >
                      <h4>Back</h4>
                    </button>
                  ) : (
                    []
                  )}
                </div>
              </div>
            )}
            {/* START table-responsive */}
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title Url</th>
                  <th>Title</th>
                  <th>Influencer</th>
                  <th>Video Service</th>
                  <th>Total Views</th>

                  <th data-check-all />
                </tr>
              </thead>
              <tbody>
                {!this.state.isHidden && (
                  <MaculaTableRow
                    {...this.state}
                    handleSelect={this.handleSelect}
                    mapVideos={this.state.video}
                    handleDelete={this.handleDelete}
                  />
                )}

                {this.state.scrapeData === undefined ? (
                  []
                ) : (
                  <ScraperRow scraperData={[this.state.scrapeData]} />
                )}
              </tbody>
            </Table>{" "}
          </div>

          <CardFooter />
        </Card>
      </ContentWrapper>
    );
  }
}

export default withRouter(MaculaTable);
