import img1 from "../assets/profile.jpg";
import img2 from "../assets/profile2.jpg";
import img3 from "../assets/profile3.jpg";
import img4 from "../assets/profile4.jpg";
import { motion } from "framer-motion";

const ExamplesSection = () => {
  return (
    <section id="changes" className="bg-secondary-400 py-10 lg:py-20">
      <div className="container text-white">
        <h1 className="text-4xl font-bold">ليه تبدأ رحلتك دلوقتي؟</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-10 py-10">
          <motion.div
            style={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="relative group">
            <img className="rounded-2xl" src={img1} alt="image" />
            <span className="absolute group-hover:scale-110 duration-300 transition top-4 right-2 lg:right-4 text-lg lg:text-2xl px-5 py-3 rounded-2xl bg-secondary-400 bg-opacity-50">
              بعد
            </span>
          </motion.div>
          <motion.div
            style={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="relative group">
            <img className="rounded-2xl" src={img3} alt="image" />
            <span className="absolute group-hover:scale-110 duration-300 transition top-4 right-2 lg:right-4 text-lg lg:text-2xl px-5 py-3 rounded-2xl bg-secondary-400 bg-opacity-50">
              قبل
            </span>
          </motion.div>
          <div className="space-y-10 py-10 lg:py-0 col-span-2 lg:col-span-1">
            <motion.div
              style={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
              className="relative group">
              <img
                className="rounded-2xl max-h-[270px] w-full object-cover"
                src={img4}
                alt="image"
              />
              <span className="absolute group-hover:scale-110 duration-300 transition bottom-4 right-2 lg:right-4 text-lg lg:text-2xl px-5 py-3 rounded-2xl bg-secondary-400 bg-opacity-50">
                قبل
              </span>
            </motion.div>
            <motion.div
              style={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
              className="relative group">
              <img
                className="rounded-2xl max-h-[270px] w-full object-cover"
                src={img2}
                alt="image"
              />
              <span className="absolute group-hover:scale-110 duration-300 transition top-4 right-2 lg:right-4 text-lg lg:text-2xl px-5 py-3 rounded-2xl bg-secondary-400 bg-opacity-50">
                بعد
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
