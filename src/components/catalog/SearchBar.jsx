import { useState } from "react";
import { Search, LayoutGrid, List } from "lucide-react";

const SearchBar = ({ searchTerm, onSearchChange, viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-custom-white-5">
          <Search className="h-5 w-5" />
        </span>
        <input
          type="text"
          placeholder="Buscar modelo..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-custom-black-3 border border-custom-black-4 rounded-md py-2 pl-10 pr-4 w-64 text-custom-white-1 placeholder-custom-white-5 focus:outline-none focus:border-custom-white-5 transition-colors"
          aria-label="Buscar vehículos por modelo"
        />
      </div>

      {/* Botones de vista */}
      <div className="flex border border-custom-black-4 rounded-md overflow-hidden">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-2 transition-colors ${viewMode === "grid"
              ? "bg-custom-black-4 text-custom-white-1"
              : "bg-custom-black-3 text-custom-white-5 hover:text-custom-white-1"
            }`}
          title="Vista en cuadrícula"
          aria-label="Cambiar a vista en cuadrícula"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-2 transition-colors ${viewMode === "list"
              ? "bg-custom-black-4 text-custom-white-1"
              : "bg-custom-black-3 text-custom-white-5 hover:text-custom-white-1"
            }`}
          title="Vista en lista"
          aria-label="Cambiar a vista en lista"
        >
          <List className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
