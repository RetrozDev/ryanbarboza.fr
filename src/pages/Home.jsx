import "../styles/Home.css";
import Navbar from "../components/Navbar";
import HomeAbout from "../components/Home/HomeAbout";

const Home = () => {
  return (
    <div className="Home">
      <Navbar isHome />
      <HomeAbout />
    </div>
  );
};

export default Home;
