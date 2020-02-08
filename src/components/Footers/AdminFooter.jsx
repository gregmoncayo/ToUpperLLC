/*!


* Coded by Gregory Moncayo

=========================================================

* The above is copyright by ToUpper LLC.

*/

/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" ToUpper LLC"}
              
            </div>
          </Col>

        </Row>
      </footer>
    );
  }
}

export default Footer;
