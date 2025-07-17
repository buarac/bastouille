import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Recolte from "./pages/Recolte";
import Cultures from "./pages/Cultures";
import Historique from "./pages/Historique";
import Comparaison from "./pages/Comparaison";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-16">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/recolte" element={<Recolte />} />
          <Route path="/cultures" element={<Cultures />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/comparaison" element={<Comparaison />} />
        </Routes>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
