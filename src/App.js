import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location,
} from "./pages";

function App(props) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`It's ${emotion} around here!`);
  // }, [emotion]);

  // useEffect(() => {
  //   console.log(`It's ${secondary} around here!`);
  // }, [secondary]);

  console.log(emotion);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
