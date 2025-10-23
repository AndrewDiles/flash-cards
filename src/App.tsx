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
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises/>} />
        <Route path="/multiplication" element={<Multiplication settings={settings}/>}/>
        <Route path="/settings" element={<ManageSettings settings={settings} updateSettings={updateSettings} resetSettings={resetSettings}/>} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </>
  )
}

export default App
