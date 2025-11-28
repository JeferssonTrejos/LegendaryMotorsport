import CarCard from "./CarCard";

const CarGrid = ({ vehicles, viewMode }) => {
  if (vehicles.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-custom-white-5 text-lg">
          No se encontraron vehículos con los filtros seleccionados.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {vehicles.map((vehicle, index) => (
        <CarCard key={index} vehicle={vehicle} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default CarGrid;
