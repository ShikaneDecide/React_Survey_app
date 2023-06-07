import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Report.css";

const Report = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/app/Questions");
      setData(response.data);
    };

    fetchData();
  }, []);

  const exportCSV = () => {
    const surveyName = "CUSTOMER_SATISFACTION_SURVEY";
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${surveyName}_REPORT.csv`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <br />
      <div>
        <h1 style={{ color: "green", marginTop: "30px" }}>Survey Report</h1>
        <br />
        <table className="survey-list">
          <thead>
            <tr>
              <th>FullName</th>
              <th>Satisfaction</th>
              <th>Comments or feedback</th>
              <th>Rattings</th>
              <th>Features</th>
              <th>Reason for Visit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.fullname}</td>
                <td>{item.satisfaction}</td>
                <td>{item.feedback}</td>
                <td>{item.rating}</td>
                <td>{item.reason}</td>
                <td>
                  {item.options
                    .map((option) => option.name + ": " + option.value)
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="export-button" onClick={exportCSV}>
        Export as CSV
      </button>
    </>
  );
};

export default Report;
