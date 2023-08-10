import "./searchStyles.css";
import { CiLocationOn } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaRestroom } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noofbedroom, setNoofbedroom] = useState(0);
  const [occupancy, setOccupancy] = useState(0);

  return (
    <div className="search_container">
      <div>
        <div className="hero_section_title">
          <h1>Find your next stay</h1>
          <p>Search deals on hotels, homes, and much more...</p>
        </div>
      </div>

      <div className="location">
        <div className="location_1 flex_row_center">
          <CiLocationOn className="react_icon" />
          <input
            type="text"
            placeholder="Enter locality, landmark, city or, hotel"
          />
        </div>

        <div className="date_range">
          <div className="flex_col_start">
            <div className="flex_row_center">
              <RxCalendar className="react_icon" />
              Check-In Date
            </div>
            <div>
              <DatePicker
                className="date_picker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div className="flex_col_start">
            <div className="flex_row_center">
              <RxCalendar className="react_icon" />
              Check-Out Date
            </div>
            <div>
              <DatePicker
                className="date_picker"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="filterBy">
        <div className="filterBy_1 flex_row_center">
          <div className="flex_row_center">
            <MdOutlineBedroomChild className="react_icon" />
            Number of bedrooms
          </div>

          <div className="inc_dec_num_Box flex_row_center">
            <button onClick={() => setNoofbedroom((prev) => prev - 1)}>
              -
            </button>
            <p>{noofbedroom}</p>
            <button onClick={() => setNoofbedroom((prev) => prev + 1)}>
              +
            </button>
          </div>
        </div>
        <div className="filterBy_1 flex_row_center">
          <div className="flex_row_center">
            <FaRestroom className="react_icon" />
            Maximum occupancy
          </div>
          <div className="inc_dec_num_Box flex_row_center">
            <button onClick={() => setOccupancy((prev) => prev - 1)}>-</button>
            <p>{occupancy}</p>
            <button onClick={() => setOccupancy((prev) => prev + 1)}>+</button>
          </div>
        </div>
      </div>

      <button className="search_btn">Search</button>
    </div>
  );
};

export default SearchBar;
