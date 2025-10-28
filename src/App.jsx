import "./index.css";
import Weather from "./components/Weather";
import WeeklyForecast from "./components/WeeklyForecast";
import Search from "./components/Search";

function App() {
  return (
    <div className=" min-h-screen relative overflow-hidden ">
      {/* Bacground image*/}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/400 via-purple-900/30 to-indigo-900/40"></div>
      </div>
      <div className="absolute inset-0 bg-black-20"></div>
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen ">
        <div className="max-w-7xl mx-auto">
          {/* Headher section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                {" "}
                Weather{" "}
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience weather like never before with real-time data,
                beautiful visuals, and precise forecasts for any locatio
                worldwide
              </p>
            </div>
            #
            <div className="flex flex-col lg:flex-row items-center justyfy-center space-y-6  lg:space-y-6 mb-12">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
