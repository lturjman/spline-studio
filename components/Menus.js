"use client";

import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/DynamicLogo";

const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Spline Studio", path: "/splinestudio" },
  { label: "Films", path: "/films" },
  { label: "Contact", path: "/contact" },
];

export default function Variants() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isFilms = pathname === "/films";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () =>
      setIsScrolled(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const menuColor = isFilms
    ? "white"
    : isHome
      ? isScrolled
        ? "black"
        : "white"
      : "black";

  const bgColor = isFilms
    ? "bg-black text-white transition-all duration-300 ease-in-out"
    : isHome
      ? isScrolled
        ? "bg-white shadow-lg transition-all duration-300 ease-in-out"
        : "bg-transparent transition-all duration-300 ease-in-out"
      : "bg-white shadow-lg transition-all duration-300 ease-in-out";
  const logoVariant = isHome ? (isScrolled ? "default" : "v2") : "default";

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`font-light h-20 fixed z-25 flex items-center justify-between w-full px-4
       ${bgColor}`}
    >
      <div>
        <Logo variant={logoVariant} />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-30">
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={` uppercase tracking-tight hover:text-emerald-300 ${
                menuColor === "black" ? "text-black" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Sidebar Menu */}
      <motion.div
        className="absolute h-screen w-screen top-0 right-0 bottom-0 bg-black pt-20 z-10 md:hidden"
        variants={sidebarVariants}
      >
        <Navigation closeMenu={() => setIsOpen(false)} />
      </motion.div>
    </motion.nav>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ closeMenu }) => (
  <motion.ul className="list-none p-5 space-y-4" variants={navVariants}>
    {menuItems.map((item, i) => (
      <MenuItem
        key={item.path}
        item={item}
        color={colors[i % colors.length]}
        closeMenu={closeMenu}
      />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FFFFFF"];

const MenuItem = ({ item, color, closeMenu }) => {
  const border = `2px solid ${color}`;

  return (
    <motion.li
      className="cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={item.path}>
        <span
          onClick={closeMenu}
          className="text-white text-3xl md:text-xl uppercase tracking-tight hover:text-emerald-300"
        >
          {item.label}
        </span>
      </Link>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath:
      "circle(30px at calc(100% - calc(var(--spacing) * 14)) calc(var(--spacing) * 10))",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className=" m-5 z-20 size-10 flex items-center justify-center rounded-full bg-transparent outline-none border-none select-none cursor-pointer"
  >
    <svg width="23" height="23" viewBox="0 0 23 23" stroke="white">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Utils   ================
 */

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
