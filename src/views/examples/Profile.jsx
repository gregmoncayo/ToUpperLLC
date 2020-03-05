/*!

* Coded by Gregory Moncayo

=========================================================

* The above is copyright by ToUpper LLC.

*/
import React from "react";
import './contact.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <div className="App">

<p>Contact Me</p>

<div>

<form action="/action_page.php">

<label>First Name</label>

<input type="text" id="fname" name="firstname" placeholder="Your name.." />

<label>Last Name</label>

<input type="text" id="lname" name="lastname" placeholder="Your last name.." />




<label>Email</label>

<input type="email" id="email" name="email" placeholder="Your email" />




<label>Subject</label>

<textarea id="subject" name="subject" placeholder="Write something.."></textarea>

<input type="submit" value="Submit" />

</form>

</div>

</div>
      </>
    );
  }
}

export default Profile;
