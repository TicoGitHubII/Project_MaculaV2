import React, { Component, Fragment } from "react";
import { deleteVideo } from "../../Services/maculaService";
import { getAllVideo } from "../../Services/maculaService";

class MaculaTableRow extends React.Component {
  constructor(prop) {
    super(prop);
  }

  handleEdit = (event, item) => {
    this.props.handleSelect(item);
  };

  videoMap = (item, index) => {
    console.log(item);
    return (
      <tr key={item.Id}>
        <td>{item.Id}</td>
        <td>
          <div className="card-img">
            <img
              className="img-thumbnail
             "
              src={item.TitleUrl}
              alt="Image"
            />
          </div>
        </td>
        <td>{item.Title}</td>
        <td>{item.Influencer}</td>
        <td>{item.VideoService}</td>
        <td>{item.TotalViews}</td>
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
        </td>
      </tr>
    );
  };

  render() {
    const videoList = this.props.video.map(this.videoMap);
    return <Fragment>{videoList}</Fragment>;
  }
}
export default MaculaTableRow;
