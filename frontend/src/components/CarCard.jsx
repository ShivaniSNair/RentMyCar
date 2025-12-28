import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div
      className="transition-shadow duration-300 shadow-lg hover:shadow-2xl border border-blue-100 bg-blue-50 bg-opacity-95 rounded-xl p-6 flex flex-col items-center"
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <img
        src={car.image}
        className="w-full h-40 object-cover rounded-md mb-4 border border-blue-200 shadow-sm"
        alt={car.name}
      />
      <h1 className="text-xl font-semibold mb-2 text-center text-black">{car.name}</h1>
      <div className="w-full mb-2 text-sm text-black">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-black">Price:</span>
          <span className="text-black">₹{car.price} per day</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-medium text-black">Available:</span>
          <span className={car.available ? "text-green-700" : "text-red-600"}>{car.available ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-black">Type:</span>
          <span className="text-black">{car.Type}</span>
        </div>
      </div>
      <Link to={`/browse-cars/car-details/${car.name}`} className="w-full mt-3">
        <button
          className="w-full font-semibold text-base py-2 rounded-full"
          style={{ backgroundColor: '#b3541e', color: 'white' }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#8a3c11'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#b3541e'}
        >
          Book
        </button>
      </Link>
    </div>
  );
};

export default CarCard;
