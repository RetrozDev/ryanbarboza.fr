import "../styles/Home.css";
import Navbar from "../components/Navbar";
import HomeAbout from "../components/Home/HomeAbout";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <div className="Home">
      <Navbar isHome />
      <HomeAbout />
      <Projects />
    </div>
  );
};

export default Home;
