import { Button } from "react-bootstrap";
import Homepageimage from "../assets/Homepageimage.png";
function Homepage() {
  return (
    <div className="ParentScaffold">
      <div className="showcasegrid">
        <div className="Verticalgrid">
          <div className="Paragraph1">
            Showcase Your <br></br> Projects, Connect with Opportunity
          </div>
          <div className="Paragraph2">
            Join thousands of professionals who showcase their real work to get
            discovered by companies. No more traditional resumes – let your
            projects speak for themselves.
          </div>
          <div className="Buttons">
            <Button className="login2">Get Started!</Button>
            <Button className="register2">Register</Button>
          </div>
        </div>
        <div className="Verticalgrid2">
          <img src={Homepageimage} alt="homepage" />
        </div>
      </div>
      <div className="Horizontalgrid">
        <div className="join">Join Our Growing Community </div>
        <div className="Connect">Connect with thousands of professionals and companies building the future<br></br> together</div>
        <div className="Stats">
          <div className="data">50,000+<br></br>Active Professionals</div>
           <div className="data">15,000+<br></br>Projects Showcased</div>
            <div className="data">1,200+<br></br>Companies Hiring</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
