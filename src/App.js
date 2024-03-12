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
import AddShop from "./Pages/Shop/AddShop";
import ManageShop from "./Pages/Shop/ManageShop";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/contact/Contact";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let backurl = "https://dull-leopard.cyclic.ap p"
  let newbackurl = "https://cobalt-blue-jellyfish-boot.cyclic.ap p"

  let csssticky = "fixed z-40 left-0 right-0"
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/livingroom"} element={<ArchitectDetails />} />
          <Route path={"/modularkitchen"} element={<InteriorDetails />} />
          <Route path={"/bedrooms"} element={<ExteriorDetails />} />
          <Route path={"/Furnituredetails"} element={<FurnitureDetails />} />
          <Route path={"/bathroom"} element={<LandscapingDetails />} />
          <Route path={"/Homeoffice"} element={<StudioDetails />} />
          <Route path={"/Album"} element={<Gallery />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Addsimage"} element={<AddImage />} />
          <Route path={"/manageimage"} element={<ManageImages />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/addshop"} element={<AddShop />} />
          <Route path={"/manageshop"} element={<ManageShop />} />
          <Route path={"/Contact"} element={<Contact />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
