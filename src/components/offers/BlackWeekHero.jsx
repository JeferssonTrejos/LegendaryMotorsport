const BlackWeekHero = () => {
  return (
    <section
      className="w-full min-h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-white px-4 py-16"
      style={{
        backgroundImage:
          "url('https://github.com/JeferssonTrejos/test-files/blob/main/LegendaryMotorsportFiles/assets/luxury-black-sports-car-dark-cinematic.jpg?raw=true')",
      }}
    >
      <span className="text-red-500 tracking-widest text-sm mb-2">
        OFERTAS DE TEMPORADA
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold text-center">
        BLACK WEEK
      </h1>

      <p className="text-center text-gray-300 mt-3 max-w-xl">
        Descuentos exclusivos en modelos seleccionados. Solo por tiempo limitado.
      </p>

      <div className="flex gap-4 mt-8">
        {[
          { number: "02", label: "DÍAS" },
          { number: "14", label: "HORAS" },
          { number: "45", label: "MIN" },
        ].map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 bg-black/70 backdrop-blur-md rounded-lg text-center"
          >
            <p className="text-3xl font-bold">{item.number}</p>
            <span className="text-sm text-gray-300">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlackWeekHero;

