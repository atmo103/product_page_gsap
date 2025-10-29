import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex justify-between items-center w-full screen-max-width">
        
        {/* LOGO IZQUIERDA */}
        <div className="flex items-center justify-start flex-1">
          <img src={appleImg} alt="Apple Icon" width={14} height={18} />
        </div>

        {/* LINKS CENTRALES */}
        <div className="flex justify-center items-center gap-x-8 flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* ICONOS DERECHA */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Shopping Cart" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
