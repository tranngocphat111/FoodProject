import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-primary_brown text-primary_yellow py-4 px-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        <Link to="/" className="text-2xl font-bold transition-transform duration-300 hover:scale-110 hover:text-white">
          Amazing Food
        </Link>
        
        <div className="flex-1 flex justify-center space-x-8">
          <Link to="/" className="relative group text-lg font-medium">
            <span className="hover:text-white transition-colors duration-300">Home</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="relative group text-lg font-medium">
            <span className="hover:text-white transition-colors duration-300">About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="relative group text-lg font-medium">
            <span className="hover:text-white transition-colors duration-300">Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        <Link to="/login" className="px-5 py-2 bg-[#ffc404] text-[#312c1d] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#312c1d] hover:shadow-xl">
          Login
        </Link>
      </div>
    </nav>
  );
}
