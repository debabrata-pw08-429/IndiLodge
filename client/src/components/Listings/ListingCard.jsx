import { CleanDate } from "../../utils";
import "./ListStyles.css";

const ListingCard = (props) => {
  const {
    title,
    description,
    location,
    price,
    bedrooms,
    occupancy,
    availableDates,
    imageUrl,
  } = props;

  return (
    <div className="property-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="property-image" />
      </div>
      <div className="property-details">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <hr />
        <p className="location_card">Location: {location}</p>
        <p className="bedrooms">Bedrooms: {bedrooms}</p>
        <p className="occupancy">Occupancy: {occupancy} people</p>

        <div className="available-dates">
          Available Dates:
          {availableDates &&
            availableDates.map((ele, idx) => {
              let startDate = CleanDate(ele.start);
              let endDate = CleanDate(ele.end);

              return (
                <p key={idx}>
                  {startDate} to {endDate}
                </p>
              );
            })}
        </div>

        <hr />
        <p className="price">Starting from : ${price} per night</p>
      </div>
    </div>
  );
};

export default ListingCard;
