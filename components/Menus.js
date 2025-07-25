"use client";

import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Spline Studio", path: "/splinestudio" },
  { label: "La Croix", path: "/lacroix" },
  { label: "Films", path: "/films" },
  { label: "Backstages", path: "/backstages" },
  { label: "Contact", path: "/contact" },
];

export default function Variants() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="h-20 flex items-center justify-between w-full px-4"
      >
        <h1>SPLINE</h1>

        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        <motion.div
          className="absolute top-0 right-0 bottom-0  bg-zinc-800 pt-20 z-10"
          variants={sidebarVariants}
        >
          <Navigation closeMenu={() => setIsOpen(false)} />
        </motion.div>
      </motion.nav>
    </div>
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
  <motion.ul className="list-none p-5" variants={navVariants}>
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
      className="flex items-center justify-start gap-4 cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={item.path}>
        <span
          onClick={closeMenu}
          className="text-white text-6xl font-semibold hover:text-emerald-300"
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
