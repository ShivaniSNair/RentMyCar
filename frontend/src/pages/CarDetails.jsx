import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const carsList = [
  { name: "Nexon", image: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0", price: 1000, available: true, fuel: "Diesel" },
  { name: "Nano", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d", price: 1000, available: true, fuel: "Diesel" },
  { name: "I20", image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e", price: 1000, available: true, fuel: "Diesel" },
  { name: "Scorpio", image: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8", price: 1000, available: true, fuel: "Diesel" },
  { name: "Polo GT", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a", price: 1000, available: true, fuel: "Diesel" },
  { name: "Thar", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", price: 1000, available: true, fuel: "Diesel" },
  { name: "Bolero", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", price: 1000, available: true, fuel: "Diesel" },
  { name: "XUV700", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", price: 1000, available: true, fuel: "Diesel" },
  { name: "Altroz", image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249", price: 1000, available: true, fuel: "Diesel" },
];

const CarDetails = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  if (!user){
    navigate("/registration");
  }

  const { carId } = useParams();
  const car = carsList.find(c => c.name.toLowerCase() === carId.toLowerCase());

  if (!car) return <div>Car not found</div>;

  return (
    <div className="w-full px-[20vw] py-4">
      <div className="p-4 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold mb-4 text-center">{car.name}</h1>
        <div className="my-4">
          <label className="block mb-2">Name:</label>
          <input type="text" className="border rounded px-3 py-2 w-full mb-4" placeholder="Enter your name" id="name" />
          <label className="block mb-2">Pickup Date:</label>
          <input type="date" className="border rounded px-3 py-2 w-full mb-4" id="date" />
          <label className="block mb-2">Return Date:</label>
          <input type="date" className="border rounded px-3 py-2 w-full mb-4" id="date" />
          <label className="block mb-2">Address:</label>
          <input type="text" className="border rounded px-3 py-2 w-full mb-4" placeholder="Enter your address" id="address" />
          <label className="block mb-2">Time:</label>
          <input type="time" className="border rounded px-3 py-2 w-full mb-4" id="time" />
          <label className="block mb-2">Phone Number:</label>
          <input type="tel" className="border rounded px-3 py-2 w-full mb-4" placeholder="Enter your phone number" id="phone" />
        </div>
        <Button
          color="blue"
          pill
          onClick={() => {
            alert("Booked successfully");
            navigate("/");
          }}
        >
          Book
        </Button>
      </div>
    </div>
  );
};

export default CarDetails;
