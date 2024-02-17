import About from "./Pages/About/About";
import AddImage from "./Pages/AddImage/AddImage";
import ArchitectDetails from "./Pages/Detailpage/ArchitectureDetails/ArchitectDetails";
import ExteriorDetails from "./Pages/Detailpage/Exteriordetails/ExteriorDetails";
import FurnitureDetails from "./Pages/Detailpage/Furnituredetail/FurnitureDetails";
import InteriorDetails from "./Pages/Detailpage/Interiordetails/InteriorDetails";
import LandscapingDetails from "./Pages/Detailpage/Landscapedetail/LandscapingDetails";
import StudioDetails from "./Pages/Detailpage/Studiodetail/StudioDetails";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import ManageImages from "./Pages/Manageimages/ManageImages";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let backurl = "https://dull-leopard.cyclic.ap p"
  let csssticky = "fixed z-40 left-0 right-0"
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Architecturedetails"} element={<ArchitectDetails />} />
          <Route path={"/interiordesign"} element={<InteriorDetails />} />
          <Route path={"/exteriordetails"} element={<ExteriorDetails />} />
          <Route path={"/Furnituredetails"} element={<FurnitureDetails />} />
          <Route path={"/Landscapingdetails"} element={<LandscapingDetails />} />
          <Route path={"/Studiodetails"} element={<StudioDetails />} />
          <Route path={"/Album"} element={<Gallery />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Addsimage"} element={<AddImage />} />
          <Route path={"/manageimage"} element={<ManageImages />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
