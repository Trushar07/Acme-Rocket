type Props = {
  toggleMenu: () => void;
};

function MobileMenu({ toggleMenu }: Props) {
  return (
    <section className="absolute top-68 w-full bg-indigo-600 dark:bg-gray-800 text-white text-4xl flex flex-col">
      <nav
        className="flex min-h-screen flex-col items-center py-8"
        aria-label="mobile"
      >
        <a
          href="#hero"
          className="w-full py-6 text-center hover:opacity-90 animate__slideInRight"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#rockets"
          className="w-full py-6 text-center hover:opacity-90"
          onClick={toggleMenu}
        >
          Our Rockets
        </a>
        <a
          href="#testimonials"
          className="w-full py-6 text-center hover:opacity-90"
          onClick={toggleMenu}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="w-full py-6 text-center hover:opacity-90"
          onClick={toggleMenu}
        >
          Contact Us
        </a>
        <a
          href="#footer"
          className="w-full py-6 text-center hover:opacity-90"
          onClick={toggleMenu}
        >
          Legal
        </a>
      </nav>
    </section>
  );
}

export default MobileMenu;
