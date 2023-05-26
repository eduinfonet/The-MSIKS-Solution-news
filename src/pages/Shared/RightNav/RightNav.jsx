import "./RightNav.css";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../QZone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="my-1 hover-button" variant="outline-primary">
        <FaGoogle />
        <span className="ps-2 font-size">Google</span>
      </Button>
      <Button className="my-1 hover-button" variant="outline-primary">
        <FaGithub />
        <span className="ps-2 font-size ">Github</span>
      </Button>
      <Button className="my-1 hover-button" variant="outline-primary">
        <FaGithub />
        <span className="font-size ">Email and Password</span>
      </Button>
      <div>
        <h2 className="my-3">Find Us On</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF></FaFacebookF> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>Twiter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="createAmazingNp text-center">
        <h3 className="my-5 pt-5 ">Create an Amazing Newspaper</h3>
        <p className="mb-5  p-2">
          Discover thousands of options, easy to customize layouts, one-click to
          importdemo and much more.
        </p>
        <Button className="mb-5" variant="danger">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
