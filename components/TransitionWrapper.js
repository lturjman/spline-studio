"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function TransitionWrapper({ children }) {
  const [className, setClassName] = useState(
    "fixed z-10 bg-white h-screen w-screen transition-all"
  );
  const pathname = usePathname();

  useEffect(() => {
    console.log("Route changed to:", pathname);
    setClassName;
  }, [pathname]);

  return <div className={className}></div>;
}
