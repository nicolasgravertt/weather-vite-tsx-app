import "./App.css";
import { Cloud, Foog, Rainy, Snowy, Storm } from "./assets";

function App() {
  return (
    <>
      <section className="h-full flex flex-wrap">
        <header className="h-1/6 w-full flex flex-col justify-center items-center">
          <div className="w-1/2">
            <div className="w-full p-2 bg-cyan-500 rounded-md shadow-md">
              <h1>Tiempo</h1>
            </div>
          </div>
        </header>
        <div className="relative h-5/6 w-full overflow-auto">
          <div
            className="grid
            h-[150%]
            px-4
            grid-cols-2
            grid-rows-3
            gap-4 
            absolute 
            w-full
            grid-flow-row
            sm:h-full
            lg:grid-cols-5 
            lg:grid-rows-1 
            sm:grid-cols-2 
            sm:grid-rows-3"
          >
            <div className="grid grid-rows-3 overflow-hidden sm:h-auto">
              <div className="bg-cyan-500 rounded-md shadow-md p-2">
                <img
                  className="h-full w-full object-scale-down"
                  src={Cloud}
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Lunes</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>31°</p>
              </div>
            </div>
            <div className="grid grid-rows-3 overflow-hidden sm:h-auto">
              <div className="bg-cyan-500 rounded-md shadow-md p-2">
                <img
                  className="h-full w-full object-scale-down"
                  src={Foog}
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Martes</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>31°</p>
              </div>
            </div>
            <div className="grid grid-rows-3 overflow-hidden sm:h-auto">
              <div className="bg-cyan-500 rounded-md shadow-md p-2">
                <img
                  className="h-full w-full object-scale-down"
                  src={Rainy}
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Miercoles</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>31°</p>
              </div>
            </div>
            <div className="grid grid-rows-3 overflow-hidden sm:h-auto">
              <div className="bg-cyan-500 rounded-md shadow-md p-2">
                <img
                  className="h-full w-full object-scale-down"
                  src={Snowy}
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Jueves</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>31°</p>
              </div>
            </div>
            <div className="grid col-span-2 lg:col-span-1 grid-rows-3 overflow-hidden sm:h-auto">
              <div className="bg-cyan-500 rounded-md shadow-md p-2">
                <img
                  className="h-full w-full object-scale-down"
                  src={Storm}
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Viernes</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>31°</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
