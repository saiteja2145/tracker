import React from "react";
import "./DailyData.css";
import DailyCards from "./Daily/DailyCards";

const DailyData = ({ dailyData }) => {
  return (
    <div className="dailyContainer">
      <DailyCards
        cardData={{
          ...dailyData.statewise[0],
          ...dailyData.cases_time_series[
            dailyData.cases_time_series.length - 1
          ],
        }}
      />
    </div>
  );
};

export default DailyData;