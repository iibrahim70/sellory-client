import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import appStoreIcon from "@/assets/icons/app-store.png";
import playStoreIcon from "@/assets/icons/play-store.png";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import paypalIcon from "../../assets/icons/paypal.png";
import mastercardIcon from "../../assets/icons/mastercard.png";
import visaIcon from "../../assets/icons/visa.png";
import americanExpressIcon from "../../assets/icons/american-express.png";

const Footer = () => {
  return (
    <footer>
      <div className="section-wrapper py-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        <div className="space-y-5">
          <h1 className="text-2xl text-primary">Vortex Vault</h1>
          <p>Got Question? Call us 24/7</p>
          <p className="font-semibold">(+880) 123456789</p>
          <p>
            Register now & get you 10% <br /> offer from first order!
          </p>

          <button className="bg-white shadow p-2 w-fit flex items-center gap-2">
            <p>English (USA)</p>
            <FaArrowDown />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="space-y-5">
            <h6>Company</h6>

            <div className="space-y-2">
              <p>About Us</p>
              <p>Career</p>
              <p>Contact Us</p>
              <p>Start Selling</p>
              <p>Order History</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6>My Account</h6>

            <div className="space-y-2">
              <p>Track My Order</p>
              <p>View Cart</p>
              <p>Sign In</p>
              <p>Help</p>
              <p>Wishlist</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6>Customer Service</h6>

            <div className="space-y-2">
              <p>Payment Methods</p>
              <p>Money Return Policy</p>
              <p>Product Return</p>
              <p>Contact Seller</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5">
          <h6>Download App</h6>

          <div className="flex items-center gap-5">
            <Image src={playStoreIcon} alt="Play Store Icon" />
            <Image src={appStoreIcon} alt="App Store Icon" />
          </div>

          <div className="flex items-center gap-5">
            <FaFacebook className="size-6" />
            <FaInstagram className="size-6" />
            <FaLinkedinIn className="size-6" />
            <FaTwitter className="size-6" />
          </div>
        </div>
      </div>

      <div className="bg-[#DDDFDF] py-5">
        <div className="section-wrapper flex flex-wrap items-center justify-between gap-5 lg:gap-10">
          <p>All Rights Reserved. © 2024 Ibrahim Khalil</p>

          <div className="flex items-center gap-3">
            <p>Payment Methods</p>
            <Image src={visaIcon} alt="Visa Icon" />
            <Image src={mastercardIcon} alt="Mastercard Icon" />
            <Image src={paypalIcon} alt="Paypal Icon" />
            <Image src={americanExpressIcon} alt="American Express Icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
