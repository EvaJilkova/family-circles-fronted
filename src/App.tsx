import familyCirclesLogo from './assets/familyCircles.png'
import './App.css'
import MyMenu from "./components/MyMenu.tsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={familyCirclesLogo} className="logo" alt="Family Circles Logo" />
        </a>
      </div>
      <h1>Family Circles</h1>
        <MyMenu></MyMenu>
    </>
  )
}

export default App
