import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import BarChart from "../Components/AllChart/BarChart";
import PieChart from "../Components/AllChart/PieChart";
import { DashboardContext } from "../context/DashboardContext";

const DashboardFinance = () => {
  const { dataChart, changeYear } = useContext(DashboardContext);
  const [selectedYear, setSelectedYear] = useState("2020");

  useEffect(() => {
    if (selectedYear) {
      changeYear({ target: { value: selectedYear } });
    }
  }, [selectedYear, changeYear]);

  const hasData = dataChart && dataChart.chart1 && dataChart.categories && dataChart.cities;

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="global-container mt-5">


      
      {/* Links to manage announce and dashboard */}
      <div
  className="links-container"
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
    padding: "10px 0",
  }}
>
  <Link to="/managea">
    <button
      className="cute-button p-3 text-white"
      style={{
        border: "none",
        borderRadius: "50px",
        backgroundColor: "#FF4081", // Coral orange
        fontSize: "1.2rem",
        fontWeight: "bold",
        padding: "12px 30px",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        textTransform: "uppercase",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-5px)";
        e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
      }}
    >
      Manage Announcements
    </button>
  </Link>

  <Link to="/DashboardFinance">
    <button
      className="cute-button p-3 text-white"
      style={{
        border: "none",
        borderRadius: "50px",
        backgroundColor: "#FF4081", // Soft pink
        fontSize: "1.2rem",
        fontWeight: "bold",
        padding: "12px 30px",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        textTransform: "uppercase",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-5px)";
        e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
      }}
   
    >
      Manage Dashboard
    </button>
  </Link>
</div>

      

      <h1>Dashboard des Annonces</h1>

      {/* Year filter select */}
      <div className="year-filter">
        <label htmlFor="year-select">Select Year: </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>

      <div className="chart-container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="chart-item" style={{ width: "600px", marginTop: "20px" }}>
          <h3>Annonces publiées par mois</h3>
          {hasData && dataChart.chart1 ? (
            <BarChart
              data={dataChart.chart1}
              name={"Annonces par mois"}
              labels={dataChart.monthLabels}
            />
          ) : (
            <div>Chart data not available for {selectedYear}</div>
          )}
        </div>

        <div className="chart-item" style={{ width: "400px" }}>
          <h3>Annonces par catégorie</h3>
          {hasData && dataChart.categories ? (
            <PieChart
              data={dataChart.categories}
              name={"Annonces par catégorie"}
              labels={dataChart.categoryLabels}
            />
          ) : (
            <div>Chart data not available for {selectedYear}</div>
          )}
        </div>

        <div className="chart-item" style={{ width: "400px" }}>
          <h3>Annonces par ville</h3>
          {hasData && dataChart.cities ? (
            <PieChart
              data={dataChart.cities}
              name={"Annonces par ville"}
              labels={dataChart.cityLabels}
            />
          ) : (
            <div>Chart data not available for {selectedYear}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardFinance;
