import "./homeStyle.css";
import SearchBar from "../../components/Search/SearchBar";
import PropertyDetail from "../../components/Listings/PropertyDetail";

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero_section"></div>

      <SearchBar />

      <PropertyDetail />
    </div>
  );
};

export default HomePage;
