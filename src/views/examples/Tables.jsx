/*!

* Coded by Gregory Moncayo
* Websites Page

=========================================================

* The above is copyright by ToUpper LLC.

*/
import React from "react";

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
import Bugs from "/Users/gregorymoncayo/Desktop/ToUpper LLC/WebSite/src/assets/img/brand/SayNoToBug.jpg";

function OpenPage()
{
  window.open("http://saynotobugsflorida.com/", "_blank");
}

class Tables extends React.Component {
  render() {

    return (
      <>
        <Header />


        {/* Page content */}
        <Container>
          <Row>
        <Col sm = "4"> 
      <Card>
        <CardImg top width="100%" img src={Bugs} alt="Card image cap" />
        <CardBody>
          <CardText>Say No To Bugs</CardText>
          <div
              clasName="Form"
              style={{ display: "flex", justifyContent: "center" }}
            >
          <Button onClick={OpenPage}>Open</Button>
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

export default Tables;
