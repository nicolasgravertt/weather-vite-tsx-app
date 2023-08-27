import "./App.css";
import { Cloud, Foog, Rainy, Snowy, Storm } from "./assets";
import TemperatureCard from "./components/TempContainer/TemperatureCard";
import TempHeader from "./components/TempContainer/TempHeader";

function App() {
  interface TemperatureType {
    dia: string;
    temperatura: string;
    img: string;
  }

  const data: TemperatureType[] = [
    {
      dia: "Lunes",
      temperatura: "31°",
      img: Cloud,
    },
    {
      dia: "Martes",
      temperatura: "27°",
      img: Foog,
    },
    {
      dia: "Miercoles",
      temperatura: "28°",
      img: Rainy,
    },
    {
      dia: "Jueves",
      temperatura: "30°",
      img: Snowy,
    },
    {
      dia: "Viernes",
      temperatura: "31°",
      img: Storm,
    },
  ];

  return (
    <>
      <section className="h-full flex flex-wrap">
        <header className="h-1/6 w-full flex flex-col justify-center items-center">
          <TempHeader />
        </header>
        <div className="h-5/6 w-full overflow-auto">
          <div
            className={`grid h-[130%] px-4 pb-4 grid-cols-2 grid-rows-3 gap-4 w-full grid-flow-row lg:h-full lg:grid-cols-5 lg:grid-rows-1`}
          >
            {data.map((item, index) => (
              <TemperatureCard
                day={item.dia}
                tempImg={item.img}
                temperature={item.temperatura}
                isLast={index === data.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
