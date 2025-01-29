import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Itinerary from "./Itinerary.tsx";
import MyUsers from "./MyUsers.tsx";
import Items from "./Items.tsx";

function MyMenu() {
    return (
        <Router>
            <div className="flex space-x-4 bg-gray-100 p-4">
                <Link to="/itinerary" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Itinerary
                </Link>
                <Link to="/users" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Users
                </Link>
                <Link to="/items" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Items
                </Link>
            </div>

            <Routes>
                <Route path="/itinerary" element={<Itinerary />} />
                <Route path="/users" element={<MyUsers />} />
                <Route path="/items" element={<Items />} />
            </Routes>
        </Router>
    );
}

export default MyMenu;
