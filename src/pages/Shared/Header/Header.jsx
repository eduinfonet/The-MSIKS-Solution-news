import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="w-50" src={logo} alt="" />
        <p className="text-danger">
          <small className="text-blue">Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Breaking News</Button>
        <Marquee speed={60} pauseOnHover>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="md" bg="light" variant="light my-4">
        <Container className="bg-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link className="text-light fs-5 " href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="text-light fs-5 " href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="text-light fs-5 " href="#pricing">
                Career
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="text-light fs-5 " variant="">
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
