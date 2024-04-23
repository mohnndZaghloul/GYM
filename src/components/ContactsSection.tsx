import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactsSection = () => {
  return (
    <section dir="rtl" className="py-20 lg:py-32 overflow-hidden">
      <motion.div
        style={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        className="container flex gap-10 justify-center items-center">
        <h3 className="text-2xl lg:text-4xl">تواصل معنا</h3>
        <div className="flex gap-5">
          <a
            target="_blank"
            href="https://www.instagram.com/c.adham_ibrahim?igsh=MW9xdjk5cG16MDE0aw%3D%3D&utm_source=qr">
            <FaInstagram className="text-4xl lg:text-5xl hover:scale-110 duration-300" />
          </a>
          <a target="_blank" href="https://wa.me/+201080458323">
            <FaWhatsapp className="text-4xl lg:text-5xl text-green-500 hover:scale-110 duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactsSection;
