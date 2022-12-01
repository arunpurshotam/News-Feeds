import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

const App = () => {
  const pageSize = 5
  const apiKey = "7de1b440c1e54d7592337d9d329df365"//process.env.REACT_APP_NEWS_APP

  const [progress,setProgress] = useState(0)

   
     return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={10}
        onLoaderFinished={progress}
      />
          <Navbar exact key="Navbar" category={"General"}></Navbar>
          
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general"  conutry="in" category="general"></News>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" conutry="in" category="business"></News>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" conutry="in" category="entertainment"></News>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} conutry="in" key="science" category="science"></News>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} conutry="in" key="health" category="health"></News>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} conutry="in" key="science"  category="science"></News>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} conutry="in" key="sports" category="sports"></News>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} conutry="in" key="technology"  category="technology"></News>}></Route>
          </Routes>
        </Router>
      </div>
    );
  
}


export default App