import "./homeStyle.css";
import SearchBar from "../../components/Search/SearchBar";
import PropertyDetail from "../../components/Listings/PropertyDetail";
import { useEffect, useState } from "react";
import axios from "axios";

// Global Variables
const API = `${import.meta.env.VITE_SOME_serverHost}`;

const HomePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchAlllist = () => {
      axios
        .get(`${API}/api/property/listings`)
        .then((res) => {
          let propertyData = res.data;
          setListData(propertyData);

          console.log(propertyData);
        })
        .catch((error) => {
          console.error("Error fetching list:", error);
        });
    };
    fetchAlllist();
  }, []);

  return (
    <div className="home">
      <div className="hero_section"></div>
      <SearchBar setListData={setListData} />
      <PropertyDetail listData={listData} />
    </div>
  );
};

export default HomePage;
