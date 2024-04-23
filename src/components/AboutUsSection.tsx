import profile from "../assets/profile1.jpg";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="container overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-10 text-primary-400 py-10 lg:py-20">
      <motion.div
        style={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        className="rounded-2xl">
        <img
          className="rounded-2xl w-full max-w-[380px] mx-auto"
          src={profile}
          alt="profile"
        />
      </motion.div>
      <motion.div
        style={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
        <p className="text-gray-500">مدرب شخصي</p>
        <h1 className="text-4xl lg:text-6xl font-bold">ادهم ابراهيم اسامه</h1>
        <p className="text-lg lg:text-2xl mt-5">
          مدرب شخصي معتمد من nasm الأكاديمية الوطنية للطب الرياضي
          <br />
          Certified personal trainer (cpt) from nasm
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
