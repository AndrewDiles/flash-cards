import { Routes, Route } from "react-router-dom";
import useManageSettings from './hooks/useManageSettings';
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Multiplication from "./pages/Multiplication";
import ManageSettings from "./pages/ManageSettings";
import FourOhFour from "./pages/FourOhFour";

// TODO: remove this later
{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
// import viteLogo from '/vite.svg'

function App() {
  const  { settings, updateSettings, resetSettings } = useManageSettings();

  return (
    <>
      <Routes>
        <Route path="/flash-cards" element={<Home />} />
        <Route path="/flash-cards/exercises" element={<Exercises/>} />
        <Route path="/flash-cards/multiplication" element={<Multiplication settings={settings}/>}/>
        <Route path="/flash-cards/settings" element={<ManageSettings settings={settings} updateSettings={updateSettings} resetSettings={resetSettings}/>} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </>
  )
}

export default App
