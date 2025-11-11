import { Search, X } from "lucide-react";
import { useState } from "react";

function SearchBar({ setCity }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput);
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <form className="relative " onSubmit={handleSearch}>
        <div className="relative group">
          {" "}
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey/60 w-5 h-5 group-focus-within:text-white transition-all " />
          <input
            type="text"
            value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for any city worldwide..."
            className="w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => {
                setSearchInput("");
              }}
              className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1 rounded-full hover:bg-white/10 "
            >
              <X className="w-4 h-4" />
            </button>
          )}


          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1 rounded-full hover:bg-white/10 "
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

  
    </div>
  );
}

export default SearchBar;
