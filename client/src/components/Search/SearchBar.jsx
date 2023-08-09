import "./searchStyles.css";
import { CiLocationOn } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="search_container">
      <div className="location">
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
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      </div>
      <div className="filterBy">
        <div>number of bedrooms</div>
        <div>maximum occupancy</div>
      </div>
    </div>
  );
};

export default SearchBar;
