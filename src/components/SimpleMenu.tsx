import { useState } from "react";
import { Menu, MenuItem, Button } from '@mui/material';
import { ChevronDown } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ProfilePage() {
    return <div className="p-4">Welcome to the Profile Page!</div>;
}

function SettingsPage() {
    return <div className="p-4">Here you can adjust your settings.</div>;
}

function LogoutPage() {
    return <div className="p-4">You have been logged out.</div>;
}

export default function SimpleMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Router>
            <div className="relative inline-block">
                <Button className="flex items-center space-x-2" onClick={toggleMenu}>
                    <span>Options</span>
                    <ChevronDown size={16} />
                </Button>
                {isOpen && (
                    <Menu className="absolute mt-2 w-40 bg-white shadow-lg rounded-2xl p-2" open={true}>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
                        </MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
                        </MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="/logout" onClick={() => setIsOpen(false)}>Logout</Link>
                        </MenuItem>
                    </Menu>
                )}
            </div>

            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
        </Router>
    );
}