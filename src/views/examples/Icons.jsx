/*!

* Coded by Gregory Moncayo
* Android Applications Page

=========================================================

* The above is copyright by ToUpper LLC.

*/
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CardImg, CardText,
  CardTitle, CardSubtitle, Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import krazyball from "/Users/gregorymoncayo/Desktop/ToUpper LLC/WebSite/src/assets/img/brand/football.png";

function GoToPage()
{
  window.open("https://play.google.com/store/apps/details?id=com.ToUpperLLC.BallKrazy&hl=en_US", "_blank");
}

class Icons extends React.Component {
  state = {};
  render() {

    return (
      <>
        <Header />
        {/* Page content */}
        
          
      <Container>
      <Row>

      <Col sm = "3"> 
      <Card>
        <CardImg top width="100%" img src={krazyball} alt="Card image cap" />
        <CardBody>
          <CardText>Krazy Ball</CardText>
          <div
              clasName="Form"
              style={{ display: "flex", justifyContent: "center" }}
            >
          <Button onClick={GoToPage}> Open</Button>
          </div>
        </CardBody>
      </Card>
      </Col>

    </Row>
      </Container>

      </>
    );
  }
}

export default Icons;
