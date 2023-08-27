type PropsType = {
  tempImg: string;
  day: string;
  temperature: string;
  isLast: boolean;
};

const TemperatureCard = ({ tempImg, day, temperature, isLast }: PropsType) => {
  return (
    <>
      <div
        className={`grid ${
          isLast ? "col-span-2" : ""
        } grid-rows-2 lg:col-span-1 grid-cols-2 lg:grid-rows-3 lg:grid-cols-1 overflow-hidden sm:h-auto bg-cyan-500 rounded-md shadow-md`}
      >
        <div className="bg-cyan-600 col-span-2 lg:col-span-1 rounded-t-md shadow-sm p-2">
          <img className="h-full w-full object-scale-down" src={tempImg}></img>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>{day}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>{temperature}</p>
        </div>
      </div>
    </>
  );
};

export default TemperatureCard;
