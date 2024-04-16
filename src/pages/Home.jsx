import "../styles/Home.css";
import Navbar from "../components/Navbar";
import HomeAbout from "../components/Home/HomeAbout";
import Projects from "../components/Home/Projects";
import Stack from "../components/Home/Stack";

const Home = () => {
  return (
    <div className="Home">
      <Navbar isHome />
      <HomeAbout />
      <Projects />
      <Stack />
    </div>
  );
};

export default Home;
