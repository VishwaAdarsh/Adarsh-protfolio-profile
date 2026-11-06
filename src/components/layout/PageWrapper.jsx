import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function PageWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex-grow pt-20 sm:pt-24 min-h-[calc(100vh-80px)]"
    >
      {children}
    </motion.main>
  );
}
