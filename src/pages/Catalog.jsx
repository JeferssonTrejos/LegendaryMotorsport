import { useState, useMemo } from "react";
import CarGrid from "../components/catalog/CarGrid";
import Filters from "../components/catalog/Filters";
import SearchBar from "../components/catalog/SearchBar";
import catalogData from "../data/data.json";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    maxPrice: 500000,
    types: [],
    brand: "",
  });

  const { catalog } = catalogData;
  const { catalog_section, vehicles } = catalog;

  // Filtrar vehículos
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Filtro de búsqueda
      const matchesSearch = vehicle.model
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Filtro de precio
      const priceNumber = parseInt(vehicle.price.replace(/[$,]/g, ""));
      const matchesPrice = priceNumber <= filters.maxPrice;

      // Filtro de tipo (case-insensitive)
      const matchesType =
        filters.types.length === 0 ||
        filters.types.some(
          (type) => type.toUpperCase() === vehicle.type.toUpperCase()
        );

      // Filtro de marca
      const matchesBrand =
        !filters.brand ||
        vehicle.model.toLowerCase().includes(filters.brand.toLowerCase());

      return matchesSearch && matchesPrice && matchesType && matchesBrand;
    });
  }, [vehicles, searchTerm, filters]);

  return (
    <div className="container mx-auto text-custom-white-1 mt-10 px-4">
      {/* Sección de título y búsqueda */}
      <section className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-wide">
            {catalog_section.title}
          </h1>
          <p className="text-custom-white-5 mt-2">
            Explora nuestra seleccion de vehiculos
          </p>
        </div>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </section>

      {/* Sección principal */}
      <section className="flex gap-8 min-h-[600px]">
        {/* Panel de filtros */}
        <aside className="w-64 shrink-0">
          <Filters filters={filters} onFilterChange={setFilters} />
        </aside>

        {/* Grid de vehículos */}
        <main className="flex-1">
          <CarGrid vehicles={filteredVehicles} viewMode={viewMode} />

          {/* Botón de agendar test drive */}
          <div className="flex justify-center mt-10 mb-8">
            <button className="border border-custom-white-1 text-custom-white-1 px-8 py-3 rounded hover:bg-custom-white-1 hover:text-custom-black-1 transition-colors font-medium">
              Agendar Test Drive
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Catalog;
