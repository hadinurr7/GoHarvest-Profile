"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrollingDown(scrollY > lastScrollY.current);
          lastScrollY.current = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b bg-white p-2 shadow-md transition-transform duration-300 ease-in-out ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-oleo flex items-center text-4xl">
          <span className="font-black text-yellowOrange">Go</span>
          <span className="font-black text-green-700">Harvest</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-600">
              About Us
            </Link>
          </li>
          <li className="group relative">
            <button className="flex items-center gap-2 hover:text-green-600">
              Services
              <HiChevronDown className="h-5 w-5" />
            </button>
            <ul className="absolute left-0 mt-2 w-40 border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
              <li>
                <Link
                  href="/services/partners"
                  className="block px-4 py-2 hover:text-green-600"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/services/companies"
                  className="block px-4 py-2 hover:text-green-600"
                >
                  Companies
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/teams" className="hover:text-green-600">
              Teams
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="text-green-700 md:hidden">
          <HiMenuAlt3 className="h-7 w-7" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-white px-4 py-4 md:hidden">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:text-green-600"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:text-green-600"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex w-full items-center justify-between px-4 py-2 text-left hover:text-green-600"
              >
                Services
                <HiChevronDown className="h-5 w-5" />
              </button>
              {isDropdownOpen && (
                <ul className="space-y-2 pl-4">
                  <li>
                    <Link
                      href="/services/partners"
                      className="block py-2 hover:text-green-600"
                      onClick={() => {
                        toggleMenu();
                        toggleDropdown();
                      }}
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/companies"
                      className="block py-2 hover:text-green-600"
                      onClick={() => {
                        toggleMenu();
                        toggleDropdown();
                      }}
                    >
                      Companies
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/teams"
                className="block px-4 py-2 hover:text-green-600"
                onClick={toggleMenu}
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
