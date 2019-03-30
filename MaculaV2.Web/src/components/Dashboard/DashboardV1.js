import React, { Component } from "react";
import { withNamespaces, Trans } from "react-i18next";
import ContentWrapper from "../Layout/ContentWrapper";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import EasyPieChart from "easy-pie-chart";

import CardTool from "../Common/CardTool";
import Sparkline from "../Common/Sparklines";
import Scrollable from "../Common/Scrollable";

import Now from "../Common/Now";

class DashboardV1 extends Component {
  state = {
    // flotData: [
    //   {
    //     label: "Uniques",
    //     color: "#768294",
    //     data: [
    //       ["Mar", 70],
    //       ["Apr", 85],
    //       ["May", 59],
    //       ["Jun", 93],
    //       ["Jul", 66],
    //       ["Aug", 86],
    //       ["Sep", 60]
    //     ]
    //   },
    //   {
    //     label: "Recurrent",
    //     color: "#1f92fe",
    //     data: [
    //       ["Mar", 21],
    //       ["Apr", 12],
    //       ["May", 27],
    //       ["Jun", 24],
    //       ["Jul", 16],
    //       ["Aug", 39],
    //       ["Sep", 15]
    //     ]
    //   }
    // ],
    // flotOptions: {
    //   series: {
    //     lines: {
    //       show: false
    //     },
    //     points: {
    //       show: true,
    //       radius: 4
    //     },
    //     splines: {
    //       show: true,
    //       tension: 0.4,
    //       lineWidth: 1,
    //       fill: 0.5
    //     }
    //   },
    //   grid: {
    //     borderColor: "#eee",
    //     borderWidth: 1,
    //     hoverable: true,
    //     backgroundColor: "#fcfcfc"
    //   },
    //   tooltip: true,
    //   tooltipOpts: {
    //     content: (label, x, y) => x + " : " + y
    //   },
    //   xaxis: {
    //     tickColor: "#fcfcfc",
    //     mode: "categories"
    //   },
    //   yaxis: {
    //     min: 0,
    //     max: 150, // optional: use it for a clear represetation
    //     tickColor: "#eee",
    //     //position: 'right' or 'left',
    //     tickFormatter: v => v /* + ' visitors'*/
    //   },
    //   shadowSize: 0
    // },
    // dropdownOpen: false
  };

  componentDidMount() {
    // Easy pie
    // let pieOptions1 = {
    //   animate: {
    //     duration: 800,
    //     enabled: true
    //   },
    //   barColor: "#23b7e5",
    //   trackColor: "rgba(200,200,200,0.4)",
    //   scaleColor: false,
    //   lineWidth: 10,
    //   lineCap: "round",
    //   size: 145
    // };
    // new EasyPieChart(this.refs.easypie, pieOptions1);
  }

  //   changeLanguage = lng => {
  //     this.props.i18n.changeLanguage(lng);
  //   };

  //   toggle = () => {
  //     this.setState({
  //       dropdownOpen: !this.state.dropdownOpen
  //     });
  //   };

  render() {
    // Usse t function instead of Trans component
    // const { t } = this.props;

    return (
      <ContentWrapper>
        <div className="content-heading">
          <div>Macula</div>
        </div>
      </ContentWrapper>
    );
  }
}

export default withNamespaces("translations")(DashboardV1);
