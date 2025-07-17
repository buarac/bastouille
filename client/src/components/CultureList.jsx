import React, { useEffect, useState } from "react";

export default function CultureList() {
  const [cultures, setCultures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cultures")
      .then((res) => res.json())
      .then((data) => {
        setCultures(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des cultures :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-6">Chargement des cultures...</p>;
  }

  if (cultures.length === 0) {
    return <p className="text-center mt-6">Aucune culture enregistrée.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      {cultures.map((culture) => (
        <div
          key={culture.id}
          className="border rounded-lg p-3 flex items-center gap-4 shadow-sm bg-white"
        >
          <div className="text-3xl">{culture.picto || "🌱"}</div>
          <div>
            <div className="font-semibold">
              {culture.nom} {culture.variete ? `– ${culture.variete}` : ""}
            </div>
            <div className="text-sm text-gray-500">
              Type : {culture.type} | Récolte : {culture.unite_recolte}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
