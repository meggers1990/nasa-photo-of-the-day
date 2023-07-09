// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//       </p>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ImageOfTheDay from './components/ImageOfTheDay';
import Explanation from './components/Explanation';

function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY'
        );
        setApodData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApodData();
  }, []);

  if (!apodData) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Header title="NASA Astronomy Photo of the Day" />
      <ImageOfTheDay imageUrl={apodData.url} title={apodData.title} />
      <Explanation explanation={apodData.explanation} />
    </div>
  );
}

export default App;
