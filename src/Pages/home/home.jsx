import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Browse by property type</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
