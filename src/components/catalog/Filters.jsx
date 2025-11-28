import { useState } from "react";

const Filters = ({ filters, onFilterChange }) => {
  const [isMarquesOpen, setIsMarquesOpen] = useState(true);

  const vehicleTypes = ["Deportivo", "SUV", "Electrico", "Coupé"];
  const brands = ["Porsche", "Mercedes", "Audi", "BMW", "Tesla", "Maserati", "Ford"];

  const handleTypeChange = (type) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    onFilterChange({ ...filters, types: newTypes });
  };

  const handleBrandChange = (brand) => {
    const newBrand = filters.brand === brand ? "" : brand;
    onFilterChange({ ...filters, brand: newBrand });
  };

  const handlePriceChange = (e) => {
    onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) });
  };

  return (
    <div className="space-y-6">
      {/* Filtro de Precio */}
      <div>
        <h3 className="text-custom-white-1 font-semibold mb-4">PRECIO</h3>
        <div className="px-1">
          <input
            type="range"
            min="0"
            max="500000"
            step="10000"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className="w-full h-1 bg-custom-black-4 rounded-lg appearance-none cursor-pointer accent-custom-red-1"
          />
          <div className="flex justify-between text-custom-white-5 text-sm mt-2">
            <span>$0</span>
            <span>$500K+</span>
          </div>
        </div>
      </div>

      {/* Filtro de Tipo */}
      <div>
        <h3 className="text-custom-white-1 font-semibold mb-4">TIPO</h3>
        <div className="space-y-3">
          {vehicleTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${
                  filters.types.includes(type)
                    ? "bg-custom-red-1 border-custom-red-1"
                    : "border-custom-white-5 group-hover:border-custom-white-1"
                }`}
              >
                {filters.types.includes(type) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-custom-white-4 group-hover:text-custom-white-1 transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro de Marca */}
      <div>
        <h3 className="text-custom-white-1 font-semibold mb-4">MARCA</h3>
        <div>
          {/* Dropdown */}
          <button
            onClick={() => setIsMarquesOpen(!isMarquesOpen)}
            className="w-full flex items-center justify-between bg-custom-black-3 border border-custom-black-4 rounded-md px-4 py-2 text-custom-white-4 hover:border-custom-white-5 transition-colors"
          >
            <span>{filters.brand || "Todas las marcas"}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isMarquesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Lista de marcas */}
          {isMarquesOpen && (
            <div className="mt-1 bg-custom-black-3 border border-custom-black-4 rounded-md overflow-hidden">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandChange(brand)}
                  className={`w-full text-left px-4 py-2 transition-colors ${
                    filters.brand === brand
                      ? "bg-custom-black-4 text-custom-white-1"
                      : "text-custom-white-4 hover:bg-custom-black-4 hover:text-custom-white-1"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
