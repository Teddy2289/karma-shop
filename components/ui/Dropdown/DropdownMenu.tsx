"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaList } from "react-icons/fa6";

const categories = [
  {
    name: "Gaming",
    subcategories: [
      "PC fixe gamer",
      "PC portable gamer",
      "Composants Gamer",
      "Écran gamer",
      "Clavier gamer",
      "+ de périphériques gaming",
    ],
  },
  {
    name: "PC et ordinateur",
    subcategories: [
      "PC portable",
      "Ordinateur fixe",
      "Serveurs",
      "Stations de travail",
    ],
  },
  {
    name: "Composant PC",
    subcategories: [
      "Processeurs",
      "Cartes graphiques",
      "Cartes mères",
      "Mémoire RAM",
      "Stockage",
    ],
  },
  {
    name: "Périphériques PC",
    subcategories: ["Claviers", "Souris", "Écrans", "Casques"],
  },
  // Ajoutez d'autres catégories ici...
];

const DropdownMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleMouseEnter = (index: any) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const toggleAllCategories = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="relative">
      <div className="text-white w-52 z-40">
        <div
          className="p-4 border-b bg-gradiant gap-4 cursor-pointer flex rounded-lg justify-between items-center"
          onClick={toggleAllCategories}>
          <span>Tous les catégories</span>
          <FaList className="text-lg" />
        </div>
        {showAll &&
          categories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="p-4 border-b bg-gray-800 border-gray-700 cursor-pointer flex justify-between items-center">
              <span>{category.name}</span>
              <FaChevronRight />
            </div>
          ))}
      </div>

      {activeCategory !== null && (
        <div
          className="bg-white shadow-lg p-4 absolute left-48 top-0 z-50 w-full mx-4"
          onMouseEnter={() => setActiveCategory(activeCategory)}
          onMouseLeave={handleMouseLeave}>
          <div className="grid grid-cols-3 gap-4">
            {categories[activeCategory].subcategories.map(
              (subcategory, index) => (
                <div key={index} className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold">{subcategory}</h2>
                  <ul>
                    <li className="py-1">
                      <a href="#">Option 1</a>
                    </li>
                    <li className="py-1">
                      <a href="#">Option 2</a>
                    </li>
                    <li className="py-1">
                      <a href="#">Option 3</a>
                    </li>
                    <li className="py-1">
                      <a href="#">Option 4</a>
                    </li>
                    {/* Ajoutez plus d'options si nécessaire */}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
