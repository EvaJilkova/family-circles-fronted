import {Routes, Route} from "react-router";
import {Itinerary} from "../components/Itinerary.tsx";

function MyRoutes() {

return (
    <Routes>
        <Route path="" element={<span>Home</span>} />
        <Route path="inventory" element={<Itinerary />} />
    </Routes>);
}

export default MyRoutes;