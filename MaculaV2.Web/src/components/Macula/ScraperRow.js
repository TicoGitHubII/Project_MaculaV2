import React, { Component, Fragment } from "react";
import { addVideo } from "../../Services/maculaService";

class ScraperRow extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      value: []
    };
  }

  handleChange = (event, item) => {
    event.preventDefault();
    this.setState = {
      value: {
        Title: item.Title,
        TitleUrl: item.Genre,
        Influencer: item.Premeire,
        VideoService: item.Seasons,
        TotalViews: item.Premeire
      }
    };
    this.handleAdd();
  };
  handleAdd = () => {
    addVideo(this.state.value)
      .then(this.onSuccess)
      .catch(this.onError);
  };

  onSuccess = response => {
    console.log("Success on ADD");
    this.changeTableState(response);
  };

  onError = response => {
    console.log(response + "Error on ADD");
  };

  ScraperMap = (item, index) => {
    return (
      <tr key={index}>
        <td>{"" || " Scrape Data"}</td>
        <td>
          <div className="card-img">
            <img
              className="img-thumbnail
             "
              src={"https://placeimg.com/220/125/people " || item.TitleUrl}
              alt="Image"
            />
          </div>
        </td>
        <td>{item.Title}</td>
        <td>{item.Genre}</td>
        <td>{item.Premeire}</td>
        <td>{item.Seasons}</td>
        {/* <td className="text-center">
                <div
                  className="radial-bar radial-bar-25 radial-bar-xs"
                  data-label="25%"
                />
              </td> */}
        <td>
          <div>
            <div className="input-group float-right">
              <div className="input-group-append">
                <button
                  className="btn btn-info btn-lg block"
                  type="button"
                  onClick={event => this.handleChange(event, item)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  render() {
    const scrapeList = this.props.scraperData[0].Items.map(this.ScraperMap);
    return <Fragment>{scrapeList}</Fragment>;
  }
}
export default ScraperRow;
