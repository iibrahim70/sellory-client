import { Search, ShoppingCart, User, ChevronDown, Globe } from "lucide-react";
import { Badge, Button, buttonVariants, Input } from "../ui";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="hidden md:flex justify-between items-center py-2.5 border-b text-xs">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
              <Globe className="size-4" />
              <span>BD (EN)</span>
              <ChevronDown className="size-5" />
            </div>

            <span>support@sellory.com</span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-blue-500">
              FAQ
            </Link>

            <Link href="/" className="hover:text-blue-500">
              Contact
            </Link>

            <Link
              href="/"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className:
                  "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
              })}
            >
              Become a Seller
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-1.5">
            <Link href="/" className="font-bold text-lg md:text-2xl">
              Sellory
            </Link>

            <Badge className="bg-rose-600">Beta</Badge>
          </div>

          <div className="hidden lg:flex w-full max-w-xl">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className=""
              />

              <Button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-l-none rounded-r-md w-14">
                <Search className="size-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-1.5"
            >
              <User className="size-5" />
              <span className="text-sm font-medium">Account</span>
            </Link>

            <Link href="/" className="relative flex items-center gap-1.5">
              <ShoppingCart className="size-5" />
              <span className="hidden md:inline-flex items-center text-sm font-medium">
                Cart
              </span>

              <span className="absolute -top-3.5 right-5 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
