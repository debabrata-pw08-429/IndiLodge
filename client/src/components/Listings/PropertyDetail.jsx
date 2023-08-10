import ListingCard from "../../components/Listings/ListingCard";
import "./ListStyles.css";

import { data } from "../../shared/constants/index";

const PropertyDetail = () => {
  return (
    <div className="lists_Container">
      {data && data.map((card, index) => <ListingCard key={index} {...card} />)}
    </div>
  );
};

export default PropertyDetail;
