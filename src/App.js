import React, { useEffect, useState } from "react";
import "./App.css";
import ImageViewer from "./components/ImageViewer";
import DatePicker from "./components/DatePicker"
import axios from "axios"

const API_KEY = "o3Q6AUmWKfMR0i7mT6lGdiIbkOaaSNAwmxRqdfQf"
function App() {
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("2020-06-06")
  const [error, setError] = useState()
useEffect(() => {
  // Make a request for a user with a given ID
  setData(null)
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`)
  .then(function (response) {
    // handle success
    console.log(response);
    setData(response.data)
    setError(null)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    setError(error.response.data.msg)
  })
  .finally(function () {
    // always executed
  });
}, [selectedDate])

  

  return (
    <div className="App">
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      {error && <h3>Error: {error}</h3>}
      {!error && <ImageViewer viewData={data}/>}
    </div>
  );
}

export default App;
