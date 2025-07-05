import React, { ReactNode } from "react";
import Link from "next/link";

const FooterLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="text-muted-foreground hover:text-white hover:underline hover:underline-offset-2 transition-colors duration-300 text-sm"
  >
    {children}
  </Link>
);

export const Footer = () => {
  return (
    <footer className="bg-black/95 text-white">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-20 py-10 lg:pt-20 lg:pb-10">
        <div className="lg:w-1/3 space-y-3.5">
          <h4>
            <span className="text-purple-600">Sel</span>lory
          </h4>

          <p>
            The leading multi-vendor marketplace in Bangladesh, connecting
            buyers and sellers with ease.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-5">
            <h6 className="text-white/85">About Sellory</h6>

            <div className="flex flex-col gap-2">
              <FooterLink href="/">About Us</FooterLink>
              <FooterLink href="/">Careers</FooterLink>
              <FooterLink href="/">Press</FooterLink>
              <FooterLink href="/">Terms of Service</FooterLink>
            </div>
          </div>

          <div className="space-y-5">
            <h6 className="text-white/85">Customer Service</h6>

            <div className="flex flex-col gap-2">
              <FooterLink href="/">Help Center</FooterLink>
              <FooterLink href="/">Returns & Refunds</FooterLink>
              <FooterLink href="/">Shipping Information</FooterLink>
              <FooterLink href="/">Track Your Order</FooterLink>
            </div>
          </div>

          <div className="space-y-5">
            <h6 className="text-white/85">For Vendors</h6>

            <div className="flex flex-col gap-2">
              <FooterLink href="/">Sell on Sellory</FooterLink>
              <FooterLink href="/">Vendor Login</FooterLink>
              <FooterLink href="/">Seller Protection</FooterLink>
              <FooterLink href="/">Seller Handbook</FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* botton section */}
      <div className="bg-black/90">
        <div className="container flex flex-wrap items-center justify-between gap-5 py-5">
          <p>
            © {new Date().getFullYear()} Sellory Inc. All Rights Reserved.
            Design & Developed by {""}
            <a
              target="_blank"
              href="https://iibrahim-dev.vercel.app/"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline underline-offset-2"
            >
              Ibrahim Khalil
            </a>
          </p>

          <div className="flex items-center gap-3.5">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
