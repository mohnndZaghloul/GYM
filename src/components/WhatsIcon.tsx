import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsIcon = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      className="fixed z-40 bottom-10 left-10">
      <div className="bg-white border shadow-2xl rounded-full p-5">
        <a
          aria-label="WhatsApp - Send message via WhatsApp"
          target="_blank"
          href="https://wa.me/+201080458323">
          <FaWhatsapp
            className="animate-pulse text-green-500 hover:scale-110 transition duration-300 cursor-pointer"
            size={32}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default WhatsIcon;
