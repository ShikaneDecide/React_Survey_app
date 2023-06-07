import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => (
  <>
    <h1 style={{ marginTop: "100px", textAlign: "center" }}>
      Hello, welcome to our survey services{" "}
    </h1>
    <h4 style={{ textAlign: "center", fontSize: 25 }}>
      This is our customer survey
    </h4>
    <br />
    <p>
      Welcome to our customer satisfaction survey! We value your feedback and
      want to ensure that we are providing you with the best possible
      experience. This survey will help us understand your perceptions of our
      products and services, as well as your level of trust and commitment to
      our business. Your responses will be kept confidential and will be used to
      improve our offerings and better meet your needs.
    </p>
    <br />
    <p>
      The survey will only take a few minutes to complete, and we would greatly
      appreciate your participation. Your feedback is essential to our success,
      and we thank you in advance for taking the time to share your thoughts
      with us.
    </p>
    <br />
    <p>
      To begin the survey, please click the "Start" button below. If you have
      any questions or concerns, please don't hesitate to contact us.
    </p>
    <br />
    <p>
      Thank you again for choosing our business, and we look forward to hearing
      from you!
    </p>
    <br />
    <br />
    <br />

    <div style={{ textAlign: "center" }}>
      <Link to="/survey">
        <button>Start survey</button>
      </Link>

      <footer>
        <p style={{ fontSize: "18px" }}>
          Our trusted Customer satisfaction survey site about our Company,
          Brought to you by Decide Shikane © {new Date().toLocaleDateString()}
        </p>
      </footer>
    </div>
  </>
);

export default HomePage;
