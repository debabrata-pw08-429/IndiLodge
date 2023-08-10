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

        <p className="available-dates">
          Available Dates:
          {availableDates &&
            availableDates.map((ele, idx) => {
              return (
                <p key={idx}>
                  Start: {ele.start} / End: {ele.end}
                </p>
              );
            })}
        </p>

        <hr />
        <p className="price">Starting from : ${price} per night</p>
      </div>
    </div>
  );
};

export default ListingCard;
