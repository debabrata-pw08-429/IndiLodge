import ListingCard from "../../components/Listings/ListingCard";
import "./ListStyles.css";

// import { data } from "../../constants/index";

const PropertyDetail = ({ listData }) => {
  return (
    <div className="lists_Container">
      {listData &&
        listData.map((card, index) => <ListingCard key={index} {...card} />)}
    </div>
  );
};

export default PropertyDetail;
