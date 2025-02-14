import { motion } from "framer-motion";

export default function Card() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-500 to-pink-500">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="relative w-80 h-48 md:w-96 md:h-56 bg-white rounded-lg shadow-xl flex justify-center items-center"
      >
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-red-300 rounded-lg flex justify-center items-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ❤️ Happy Valentine’s Day, Adi! ❤️
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}
