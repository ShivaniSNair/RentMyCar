import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="hover:shadow-2xl p-4 rounded-lg">
      <img src={car.image} className="w-full" alt={car.name} />
      <h1><b>{car.name}</b></h1>
      <p>Price: ₹{car.price} per day</p>
      <p>Available: {car.available ? 'Yes' : 'No'}</p>
      <p>Type: {car.Type}</p>
      <Link to={`/browse-cars/car-details/${car.name}`}>
        <Button color="blue" pill>
          Book
        </Button>
      </Link>
    </div>
  );
};

export default CarCard;
