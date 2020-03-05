/*!

* Coded by Gregory Moncayo

* Overview HomePage

=========================================================

* The above is copyright by ToUpper LLC.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";
import Image from 'react-image-resizer';
import logo from "assets/img/brand/WhiteLogo.png";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    const mystyle = {
      fontFamily: "Cambria",
      textAlign: 'center!important'
    };

    const imageStyle = {
      float: 'right',
    };

    return (
      <>
        <Header />
        <Image
          src={logo}
          height={340}
          width={340}
          style={imageStyle}
        />
        <h1><br></br></h1>
        <p style={mystyle}>Since 2019, we have been dedicated to providing users and customers the best experience.</p>
        <p style={mystyle}>At ToUpper LLC, we pride ourselves by providing the most modern look on both our applications and our webpages. 
        <br>
        </br>
        We prepare busineses to have their webpage looking sleek and professional for them to accompish their daily goals.<br></br>
        We pay attention to detail and make sure our code is up to par during our process of packaging and publishing software. When creating software, we make sure that we don't go overbudget and provide excellent maintenance to make sure users have a smooth experience when browsing the web or playing one of our games.
        <br></br>
        <br></br>
        If your business is need of a website or a mobile application, please contact us for a free consultation through our contact page and we will make sure to reach back to you as soon as possible.
        <br></br>
        <br></br>
        When it comes to applications, we deploy our software on both the Google Play Market and Apple iPhone Market as well. If any issues or comments you may have with one of our applications, please feel free to contact us or leave a comment on the iOS or google play store for us to review.
        </p>
        
      </>
    );
  }
}

export default Index;
