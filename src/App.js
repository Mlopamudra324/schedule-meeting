import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Date } from "./components/Date";
import { Details } from './components/Details';
import { Confirmation } from './components/Confirmation';




function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="date" element={<Date />} />
      <Route path="Details" element={<Details />} />
      <Route path="confirmation" element={<Confirmation />} />
    </Routes>


  );
}

export default App;
