import { useState } from "react";

const SearchBar = ({ searchTerm, onSearchChange, viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-custom-white-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Buscar modelo..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-custom-black-3 border border-custom-black-4 rounded-md py-2 pl-10 pr-4 w-64 text-custom-white-1 placeholder-custom-white-5 focus:outline-none focus:border-custom-white-5 transition-colors"
        />
      </div>

      {/* Botones de vista */}
      <div className="flex border border-custom-black-4 rounded-md overflow-hidden">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-2 transition-colors ${
            viewMode === "grid"
              ? "bg-custom-black-4 text-custom-white-1"
              : "bg-custom-black-3 text-custom-white-5 hover:text-custom-white-1"
          }`}
          title="Vista en cuadrícula"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-2 transition-colors ${
            viewMode === "list"
              ? "bg-custom-black-4 text-custom-white-1"
              : "bg-custom-black-3 text-custom-white-5 hover:text-custom-white-1"
          }`}
          title="Vista en lista"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
