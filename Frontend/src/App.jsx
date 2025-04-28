import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PnrPage from "./Pages/PnrPage"; // Adjust the path as needed
import DetailsPage from "./Pages/PassengerDetailsPage"; // Create this page to display details
import SummaryPage from "./Pages/summaryPage";
import RoughPage from "./Pages/roughPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PnrPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/roughpage" element={<RoughPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
