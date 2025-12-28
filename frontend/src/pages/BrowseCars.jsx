import CarsView from '../components/CarsView';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

const BrowseCars = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  if (!user){
    navigate("/registration");
  }


  return (
    <div
      className="min-h-[150vh] w-full flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/33/a3/3d/33a33d9077a28500e03558aedaf9619b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-10 z-0"></div>
      <div className="relative z-10 w-full">
        <CarsView carsPerPage={9} />
        <div className="h-32" />
      </div>
    </div>
  );
}

export default BrowseCars