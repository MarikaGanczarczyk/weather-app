import "./index.css";
import Weather from "./components/Weather";
import WeeklyForecast from "./components/WeeklyForecast";
import Search from "./components/Search";

function App() {
  return (
    <div className="realite z-10 container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
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
              beautiful visuals, and precise forecasts for any locatio worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
