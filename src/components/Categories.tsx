import aventura from "../assets/categories/aventura.jpg";
import futbol from "../assets/categories/futbol.jpg";
import multijugador from "../assets/categories/multijugador.jpg";
import shooter from "../assets/categories/shooter.jpg";

export default function Categories() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-12">Categorías</h2>

      <section className="flex flex-wrap justify-evenly">
        <div className="relative mb-8 w-64 h-32">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={aventura}
            alt=""
          />
          <span className="absolute text-white text-lg h-full w-full bg-black top-0 opacity-45 grid place-items-center rounded-2xl">
            Aventura
          </span>
        </div>
        <div className="relative mb-8 w-64 h-32">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={futbol}
            alt=""
          />
          <span className="absolute text-white text-lg h-full w-full bg-black top-0 opacity-65 grid place-items-center rounded-2xl">
            Futbol
          </span>
        </div>
        <div className="relative mb-8 w-64 h-32">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={multijugador}
            alt=""
          />
          <span className="absolute text-white text-lg h-full w-full bg-black top-0 opacity-65 grid place-items-center rounded-2xl">
            Multijugador
          </span>
        </div>
        <div className="relative mb-8 w-64 h-32">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src={shooter}
            alt=""
          />
          <span className="absolute text-white text-lg h-full w-full bg-black top-0 opacity-65 grid place-items-center rounded-2xl">
            Shooter
          </span>
        </div>
      </section>
    </>
  );
}
