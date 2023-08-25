import "./App.css";
import { Cloud, Foog, Rainy, Snowy, Storm } from "./assets";

function App() {
  return (
    <>
      <section className="h-full">
        <header className="h-1/6 w-full flex flex-col justify-center items-center">
          <div className="w-1/2">
            <div className="w-full bg-green-400">
              <h1>Tiempo</h1>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-5 h-5/6 px-4">
          <div className="px-4">
            <div className="bg-green-400">
              <img src={Cloud}></img>
            </div>
            <div>
              <p>Lunes</p>
              <p>31°</p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-green-400">
              <img src={Foog}></img>
            </div>
            <p>Martes</p>
            <p>31°</p>
          </div>
          <div className="px-4">
            <div className="bg-green-400">
              <img src={Rainy}></img>
            </div>
            <p>Miercoles</p>
            <p>31°</p>
          </div>
          <div className="px-4">
            <div className="bg-green-400">
              <img src={Snowy}></img>
            </div>
            <p>Jueves</p>
            <p>31°</p>
          </div>
          <div className="px-4">
            <div className="bg-green-400">
              <img src={Storm}></img>
            </div>
            <p>Viernes</p>
            <p>31°</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
