import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ExampleCarouselImage from "./image/ExampleCarouselImage";
import FeedbackForm from "./FeedbackForm";

const Farming = ({ lan, mode }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroText =
    lan !== "English" ? "Welcome to Our Company" : "مرحبا بكم في شركتنا";
  const heroSubText =
    lan !== "English"
      ? "We provide excellent services for your business needs."
      : "نحن نقدم خدمات ممتازة لاحتياجات عملك.";
  const heroButtonText = lan !== "English" ? "More" : "المزيد";

  const isArabic = lan === "English";

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: mode === "Light" ? "#f8f9fa" : "#3C3D37",
      }}>
      <div
        style={{
          ...styles.heroSection,
          justifyContent: isArabic ? "end" : "start",
        }}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroText}>{heroText}</h1>
          <p style={styles.heroSubText}>{heroSubText}</p>
          <button style={styles.moreButton} onClick={scrollToAbout}>
            {heroButtonText}
          </button>
        </div>
      </div>

      <div style={styles.carouselContainer}>
        <Carousel>
          <Carousel.Item interval={3000}>
            <ExampleCarouselImage
              text="First slide"
              imageUrl="../../images/Screenshot 2024-10-11 171122.png"
            />
            <Carousel.Caption
              style={{
                textAlign: isArabic ? "right" : "left",
              }}>
              <h3>First Slide Label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ExampleCarouselImage
              text="Second slide"
              imageUrl="../../images/Screenshot 2024-10-11 172341.png"
            />
            <Carousel.Caption
              style={{
                textAlign: isArabic ? "right" : "left",
              }}>
              <h3>Second Slide Label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ExampleCarouselImage
              text="Third slide"
              imageUrl="../../images/Screenshot 2024-10-11 172543.png"
            />
            <Carousel.Caption
              style={{
                textAlign: isArabic ? "right" : "left",
              }}>
              <h3>Third Slide Label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="about-section" style={styles.aboutSection}>
        <div
          style={{
            ...styles.aboutContent,
            flexDirection: isArabic ? "row-reverse" : "row",
            color: mode === "Light" ? "#000000" : "#ffffff",
          }}>
          <div style={styles.textContainer}>
            <h2>About Us</h2>
            <p>
              Our company is dedicated to providing the best services to our
              customers. We focus on quality, efficiency, and reliability to
              meet all your business needs.
            </p>
          </div>
          <img
            src="../../images/Screenshot 2024-10-11 172341.png"
            alt="Company"
            style={styles.companyImage}
          />
        </div>
      </div>
      <div style={styles.centerImage}>
        <img src="../../images/works.png" alt="functions" style={styles.functionImage}/>
      </div>

      <FeedbackForm mode={mode} lan={lan} />
    </div>
    
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "0px 10px 20px",
    paddingTop: "0px",
    fontFamily: "Arial, sans-serif",
  },
  heroSection: {
    backgroundImage: 'url("../../images/image.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    height: "90vh",
    display: "flex",
    borderRadius: "0 0 15px 15px",
    alignItems: "center",
    padding: "0 90px",
    position: "relative",
    marginBottom: "30px",
  },
  heroContent: {
    maxWidth: "600px",
  },
  heroText: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  heroSubText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  centerImage: {
    width: "100%",
    height: "auto",
    margin: "20px 0",
  },
  functionImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  moreButton: {
    backgroundColor: "#ffcc00",
    border: "none",
    padding: "10px 20px",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "5px",
  },
  carouselContainer: {
    maxWidth: "70%",
    margin: "0 auto",
    boxShadow: "0 15px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "15px",
    overflow: "hidden",
  },
  aboutSection: {
    padding: "60px 20px",
    margin: "40px 0",
  },
  aboutContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingRight: "20px",
  },
  companyImage: {
    flex: 1,
    width: "100%",
    height: "auto",
    maxWidth: "400px",
    borderRadius: "10px",
    margin: "0 10%",
  },
};

export default Farming;
