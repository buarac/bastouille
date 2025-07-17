import React from "react";
import { NavLink } from "react-router-dom";
import { Home, PlusCircle, Leaf, History, BarChart2 } from "lucide-react";

const navItems = [
  { to: "/", icon: <Home />, label: "Accueil" },
  { to: "/recolte", icon: <PlusCircle />, label: "Récolte" },
  { to: "/cultures", icon: <Leaf />, label: "Cultures" },
  { to: "/historique", icon: <History />, label: "Historique" },
  { to: "/comparaison", icon: <BarChart2 />, label: "Comparaison" },
];

export default function NavigationBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 shadow-md">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className="flex flex-col items-center text-xs text-gray-600 hover:text-black">
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
