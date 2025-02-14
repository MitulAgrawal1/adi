import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function LandingPage() {
  const [hearts, setHearts] = useState([]);
  const [heartRate, setHeartRate] = useState(500);
  const [boostActive, setBoostActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setHearts((prev) => [...prev, { id, left: Math.random() * 100 }]);

      // Remove hearts after a few seconds to prevent infinite state growth
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, 5000);
    }, heartRate);

    return () => clearInterval(interval);
  }, [heartRate]);

  const boostHearts = () => {
    setBoostActive(true);
    setHeartRate(50);

    setTimeout(() => {
      setHeartRate(500);
      setBoostActive(false);
    }, 3000);

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "https://mitulagrawal1.github.io/valentinepage/?name=adi";
    }, 3000);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-br from-pink-500 to-red-500 text-white overflow-hidden">
      {/* Floating Hearts */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0.3, y: "100%" }}
            animate={{ opacity: 1, y: "-150vh" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute"
            style={{ left: `${heart.left}%`, bottom: 0 }}
          >
            <Heart className="text-white opacity-50" size={50} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Valentine Message */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold drop-shadow-lg mb-4"
      >
        Happy Valentine’s Day, <span className="text-yellow-300">Adi</span>!
        <button
          onClick={boostHearts}
          className="ml-3 focus:outline-none bg-transparent border-none cursor-pointer p-2"
        >
          ❤️
        </button>
      </motion.h1>
    </div>
  );
}
