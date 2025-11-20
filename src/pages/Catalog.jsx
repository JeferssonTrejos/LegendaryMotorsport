import CarGrid from "../components/catalog/CarGrid";
import Filters from "../components/catalog/Filters";

const Catalog = () => {
  return (
    /* Notas: no quitar px-20 (padding horizontal) */
    <div className="text-custom-white-1 px-20 mt-10">
      <section className="py-10 bg-red-900">Seccion de titulo/Hnicio</section>
      <section className="min-h-96 flex">
        <article className="w-72 bg-amber-600 ">
          <Filters />
        </article>
        <article className="flex-1 bg-green-600">
          <CarGrid />
        </article>
      </section>
    </div>
  );
};

export default Catalog;
