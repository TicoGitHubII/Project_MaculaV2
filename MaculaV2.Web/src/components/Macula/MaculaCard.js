import React, { Fragment, Component } from "react";
import { getScrapeData } from "../../Services/maculaService";

class MaculaCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrape: []
    };
  }

  handleEdit = (event, item) => {
    this.props.handleSelect(item);
  };

  componentDidMount = () => {
    var { detail } = this.props.location.state;
    var header = {
      "Content-Type": "application/json",
      Authorization: "Bearer" + detail
    };

    getScrapeData(header)
      .then(this.onScrapeSuccess)
      .catch(this.onError);
  };

  onScrapeSuccess = response => {
    console.log("Success on GET Scrape");

    this.setState({
      scrape: response.data
    });
  };
  onError = response => {
    console.log(response + "Error ");
  };

  mapData = (item, index) => {
    return (
      <div className="card border-info rounded-lg " key={item.id}>
        <img className="card-img-top" src={item.Image} alt="Card Cap" />
        {/* <div className="half-float-bottom">
          <img
            className="img-thumbnail circle thumb128"
            src="img/user/09.jpg"
            alt="Demo"
          />
        </div> */}

        <div className="card-body text-left">
          <h3 className="m-0">item.name</h3>
          <p className="text-muted">item.topic</p>
          <p>
            Proin metus justo, commodo in ultrices at, lobortis sit amet dui.
            Fusce dolor purus, adipiscing a tempus at, gravida vel purus.
          </p>
        </div>
        <div className="card-body text-center bg-gray-dark">
          <div className="row">
            <div className="col-6">
              <h3 className="m-0">item.followers</h3>
              <p className="m-0">Followers</p>
            </div>
            <div className="col-6">
              <h3 className="m-0">item.rank</h3>
              <p className="m-0">Rank</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="input-group ">
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                type="button"
                onClick={event => this.props.handleDelete(event, item)}
              >
                Delete
              </button>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-info"
                type="button"
                onClick={event => this.handleEdit(event, item)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const scrapeList = this.state.scrape.map(this.mapData);
    return (
      <Fragment>
        <div className="col-xl-4 offset-xl-3">
          <div className="card-deck">{scrapeList}</div>
        </div>
      </Fragment>
    );
  }
}
export default MaculaCard;
