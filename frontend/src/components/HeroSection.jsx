import { Link } from "react-router-dom";
// import carIllustration from "../images/car-illustration.gif"; 

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] bg-black flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzBlMGM2N2E1djlmMjNjdXhnaDFzZHAycDJ5ZHdxbnMyMjY4d3djZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sDCma70RplcNG/giphy.gif"
          alt="Car Rental Hero Background"
          className="object-cover w-full h-full opacity-60"
        />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 lg:px-12 min-h-[60vh]">
        {/* Text Content */}
        <div className="text-center text-white max-w-xl space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Find Your Perfect Ride
          </h1>
          <p className="text-lg sm:text-xl font-light">
            Explore our wide selection of premium cars for rent. Luxury,
            economy, or family trips, we've got you covered.
          </p>
          <Link
            to="browse-cars"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            Browse Cars
          </Link>
        </div>

        {/* Illustration removed */}
      </div>
    </section>
  );
};

export default HeroSection;
