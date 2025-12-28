import { useState } from "react";
import CarCard from "./CarCard";


const CarsView = () => {
  const carsList = [
    { name: "Nexon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVt3YGMcL3e0UWTUHWJfm4hSUaJQEuxq2Iw&s", price: 800, available: true, Type: "Electric" },
    { name: "Seltos", image: "https://www.v3cars.com/media/model-imgs/1690189335-02-seltos-front-quater-exterior.webp", price: 1000, available: true, Type: "Manual(Petrol)" },
    { name: "I20", image: "https://cdn-s3.autocarindia.com/hyundai/i20/_AAB7144.JPG?w=728&q=75", price: 950, available: true, Type: "Automatic(Diesel)" },
    { name: "Scorpio", image: "https://www.carblogindia.com/wp-content/uploads/2019/11/Mahindra-Scorpio.jpg", price: 2000, available: true, Type: "Manual(Diesel)" },
    { name: "Polo GT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29qruDzdC0V3_xK0Pe3vhuZ18YWX_3VWN5w&s", price: 950, available: true, Type: "Automatic(Diesel)" },
    { name: "Thar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8oCIzOzGO086BDnn-auZmtqVpzriHqLuTw&s", price: 1500, available: true, Type: "Manual(Petrol)" },
    { name: "Bolero", image: "https://spn-sta.spinny.com/blog/20240119140514/Spinny-Assured-Mahindra-Bolero-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6", price: 1000, available: true, Type: "Manual(Diesel)" },
    { name: "XUV700", image: "https://media.zigcdn.com/media/model/2025/Nov/model-extimg-981834496_930x620.jpg", price: 1000, available: true, Type: "Electric" },
    { name: "Altroz", image: "https://media.zigcdn.com/media/model/2025/Jul/model-extimg-849810175_600x400.jpg", price: 700, available: true, Type: "Automatic(Petrol)" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(""); // State to store search text

  const carsPerPage = 9;

  const filteredCarsList = carsList.filter((car) =>
    car.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = filteredCarsList.slice(startIndex, endIndex);



  // Function to handle input change
  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Update search text state
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div className="px-[10vw]">
      <form className="max-w-[70vw] mx-auto my-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pr-24 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search cars..."
            value={searchText} // Bind input value to state
            onChange={handleSearchChange} // Capture user input
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 top-1/2 -translate-y-1/2 font-medium rounded-lg text-sm px-4 py-2"
            style={{height: '2.25rem', backgroundColor: '#b3541e'}}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#8a3c11'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#b3541e'}
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => <CarCard key={index} car={car} />)
        ) : (
          <p>No cars found</p>
        )}
      </div>


    </div>
  );
};

export default CarsView;
