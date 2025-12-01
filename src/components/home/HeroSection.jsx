import React from "react";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const hero = data?.home?.hero_section ?? {};
  const bg = hero.url_background || ""; // no fallback local
  const title = hero.title || "DOMINA EL ASFALTO";
  const description = hero.description || "";
  const actions = hero.actions || ["Ver Catálogo", "Hablar con un Asesor"];

  const parts = title.split(" ");
  const firstLine = parts.slice(0, Math.ceil(parts.length / 2)).join(" ");
  const secondLine = parts.slice(Math.ceil(parts.length / 2)).join(" ");

  return (
    <section id="hero" className="relative bg-black">
      {/* Background solo si hay url en la data */}
      {bg ? (
        <div className="absolute inset-0">
          <img
            src={bg}
            alt={hero.title || "Hero background"}
            className="w-full h-full object-cover brightness-[0.28]"
          />
        </div>
      ) : (
        // fallback visual si no hay background (oscuro sólido)
        <div className="absolute inset-0 bg-black/90" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1
              className="font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl"
              style={{ color: "var(--color-custom-white-1)" }}
            >
              {firstLine}
              <br />
              <span style={{ color: "var(--color-custom-red-2)" }}>{secondLine}</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base md:text-lg"
              style={{ color: "var(--color-custom-white-2)" }}
            >
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={hero.cta_primary_link || "/catalog"}
                className="inline-block font-semibold py-3 px-6 rounded shadow-sm focus:outline-none focus:ring-2"
                style={{ background: "var(--color-custom-red-2)", color: "var(--color-custom-white-1)" }}
              >
                {hero.actions?.[0] ?? "Ver Catálogo"}
              </Link>

              <Link
                to={hero.cta_secondary_link || "/offers"}
                className="inline-block border border-white/10 text-white py-3 px-6 rounded hover:bg-white/5 focus:outline-none focus:ring-2"
                style={{ color: "var(--color-custom-white-2)" }}
              >
                {hero.actions?.[1] ?? "Hablar con un Asesor"}
              </Link>
            </div>

          </div>

          {/* SOLO si la data provee hero.side_image URL*/}
          {hero.side_image ? (
            <div className="hidden lg:block">
              <img
                src={hero.side_image}
                alt={hero.side_alt || ""}
                aria-hidden={hero.side_alt ? "false" : "true"}
                className="w-full h-64 object-cover rounded-md shadow-xl"
                onError={(e) => {
                  // si la URL falla, ocultamos la imagen sin romper UI
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
