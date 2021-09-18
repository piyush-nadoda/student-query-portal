import "../Style/aboutUs.css";
import Footer from "../Utils/Footer";
import Navbar from "../Utils/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div id="about_us_section" className="about-section">
        <div className="about-inner-container">
          {/* <h1>About Us</h1> */}
          <p className="about-text">
            <h1>About Us !</h1>
            <h2 style={{ textalign: "center" }}>
              Welcome To <span id="W_Name1">student query portal</span>
            </h2>
            <p>
              <span id="W_Name2">student query portal</span> is a Professional{" "}
              <span id="W_Type1">query solving </span> Platform. Here we will
              provide you only interesting content, which you will like very
              much. We're dedicated to providing you the best of{" "}
              <span id="W_Type2">query solving </span>, with a focus on
              dependability and{" "}
              <span id="W_Spec">online problems solving </span>. We're working
              to turn our passion for <span id="W_Type3">query solving </span>{" "}
              into a booming online website. We hope you enjoy our{" "}
              <span id="W_Type4">query solving </span> as much as we enjoy
              offering them to you.
            </p>
            <p>
              I will keep posting more important posts on my Website for all of
              you. Please give your support and love.
            </p>
            <p style={{ fontweight: "bold", textalign: "center" }}>
              Thanks For Visiting Our Site<br></br>
              <span
                style={{
                  color: "blue",
                  fontSize: "16px",
                  fontweight: "bold",
                  textalign: "center",
                }}
              >
                Have a nice day !
              </span>
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
