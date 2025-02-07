import familyCirclesLogo from './assets/familyCircles.png'
import './App.css'
import {BrowserRouter} from "react-router";
import NavMenu from "./components/NavMenu.tsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={familyCirclesLogo} className="logo" alt="Family Circles Logo" />
        </a>
      </div>
      <h1>Family Circles</h1>

        <BrowserRouter>
            <NavMenu />
        </BrowserRouter>
    </>
  )
}

export default App
