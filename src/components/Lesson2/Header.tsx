import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="bg-indigo-600 dark:bg-gray-800 text-white top-0 sticky z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">Acme Rocket 🚀</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? "×" : "☰"}
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </header>
  );
}

export default Header;
