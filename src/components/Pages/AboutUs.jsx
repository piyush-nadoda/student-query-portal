import '../Style/aboutUs.css'
import Footer from '../Utils/Footer';
import Navbar from '../Utils/Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div id="about_us_section" className="about-section">
      <div className="about-inner-container">
        <h1>About Us</h1>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          velit ducimus, enim inventore earum, eligendi nostrum pariatur
          necessitatibus eius dicta a voluptates sit deleniti autem error eos
          totam nisi neque voluptates sit deleniti autem error eos totam nisi
          neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit alias incidunt natus magni nobis assumenda sed corporis.
          Cupiditate corrupti totam nulla dignissimos, tenetur sunt quos atque
          maxime accusamus ratione velit! Laudantium adipisci aut voluptas omnis
          nemo laborum quisquam ullam, commodi pariatur quo dolore qui nihil
          repellat nostrum, dolorum sequi officia rem ea necessitatibus porro!
          Corporis, accusantium! Deserunt labore enim eius!
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;