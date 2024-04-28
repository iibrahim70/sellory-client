import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-primary text-white">
        <div className="section-wrapper flex items-center justify-between gap-10 py-4">
          {/* left side */}
          <div>
            <h1 className="text-2xl">Vortex Vault</h1>
          </div>

          {/* middle */}
          <div className="max-md:hidden md:w-2/5 relative flex items-center justify-center text-black cursor-pointer">
            <input
              type="text"
              name="search"
              placeholder="Search by Product Name"
              className="px-6 py-2 rounded-full outline-none w-full"
            />
            <IoMdSearch className="absolute right-10 size-7" />
          </div>

          {/* right side */}
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-1.5">
              <p>Signin</p>
              <FaUser />
            </div>

            <div className="flex items-center gap-1.5">
              <p>Cart</p>
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="section-wrapper py-2 flex flex-wrap items-center justify-between gap-3.5">
          <p>Home</p>
          <p>Products</p>
          <p>Categories</p>
          <p>Brands</p>
          <p>Deals</p>
          <p>Services</p>
          <p>Cart</p>
          <p>Returns</p>
          <p>Terms</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
