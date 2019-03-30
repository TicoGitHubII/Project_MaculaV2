import React, { Component } from "react";
import MaculaTable from "./MaculaTable";
import { deleteVideo, updateVideo } from "../../Services/maculaService";

class MaculaDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelect = (event, item) => {
    switch (item) {
      case 0:
        if ((item.value = 0)) {
          updateVideo(item, item.id)
            .then(this.onSuccess)
            .catch(this.onError);
        }
        break;
      case 1:
        if ((item.value = 1)) {
          deleteVideo(item.id)
            .then(this.onSuccess)
            .catch(this.onError);
        }
        break;
    }
  };
  onSuccess = response => {
    console.log(response + ": Success");
  };

  onError = response => {
    console.log(response + ": Error");
  };

  render() {
    return <div>{<MaculaTable handleSelect={this.handleSelect} />}</div>;
  }
}
export default MaculaDisplay;
