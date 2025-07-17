import React from "react";
import CultureList from "../components/CultureList";

export default function Cultures() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Mes cultures</h1>
      <CultureList />
    </div>
  );
}