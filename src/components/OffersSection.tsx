import img1 from "../assets/medical-inquiry.png";
import img2 from "../assets/nutrition-programs.png";
import img3 from "../assets/workout-program.png";
import bgImage from "../assets/slider3.jpg";
import { motion } from "framer-motion";

const OffersSection = () => {
  return (
    <section
      id="services"
      className="relative text-center text-white py-10 lg:py-20">
      <img
        className="absolute w-full h-full -z-20 top-0 left-0 object-cover"
        src={bgImage}
        alt="background image"
      />
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-primary-400 bg-opacity-50" />
      <motion.h1
        style={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        className="text-4xl lg:text-5xl font-bold mb-10 lg:mb-20">
        استكشف خدماتنا
      </motion.h1>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <motion.div
          style={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}>
          <div>
            <img className="max-h-[160px] mx-auto py-4" src={img3} alt="icon" />
          </div>
          <h3 className="font-semibold text-2xl mb-4">برامج التدريب</h3>
          <p>
            برامج تدريب مناسبة لأي مكان، سواء في النادي الرياضي أو الجيم أو
            باستخدام أدوات بسيطة مثل الدمبلز وأشرطة المقاومة. تتضمن تمارين
            المقاومة، والكارديو، والإحماء، والاسترتشينج. كلها مصممة علميًا
            لتلبية احتياجات جسمك وأهدافك.
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}>
          <div>
            <img className="max-h-[160px] mx-auto py-4" src={img2} alt="icon" />
          </div>
          <h3 className="font-semibold text-2xl mb-4">برامج التغذية</h3>
          <p>
            برامج تغذية مخصصة مصممة لجسمك، وأهدافك، واحتياجاتك. تتكيف البرامج مع
            أنواع الطعام المتاحة، والتفضيلات الشخصية، مدي تطور الجسم. مصممة
            علميًا لضمان تحقيق هدفك.
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6 },
          }}>
          <div>
            <img className="max-h-[160px] mx-auto py-4" src={img1} alt="icon" />
          </div>
          <h3 className="font-semibold text-2xl mb-4">المتابعة</h3>
          <p>
            طوال فترة الاشتراك، يتوفر فريق دعم متخصص من المدربين وأخصائي التغذية
            للإجابة على جميع الاستفسارات. يتوفر فريق خدمة العملاء لحل أي مشكلات
            مباشرة عبر WhatsApp.
          </p>
        </motion.div>
      </div>
      <div className="border border-white rounded-2xl bg-white text-primary-400 container py-10 mt-10">
        <h1 className="text-5xl font-bold mb-10">الباقات</h1>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          <li className="rounded-2xl border border-primary-300 shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a
              target="_blank"
              href="https://wa.me/+201080458323"
              className="p-10 block">
              <h3 className="text-xl lg:text-3xl">شهر </h3>
              <p className="text-xl lg:text-3xl font-semibold">600 ج.م</p>
            </a>
          </li>
          <li className="rounded-2xl border border-primary-300 shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a
              target="_blank"
              href="https://wa.me/+201080458323"
              className="p-10 block">
              <h3 className="text-xl lg:text-3xl">شهرين </h3>
              <p className="text-xl lg:text-3xl font-semibold">900 ج.م</p>
            </a>
          </li>
          <li className="rounded-2xl border border-primary-300 shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a
              target="_blank"
              href="https://wa.me/+201080458323"
              className="p-10 block">
              <h3 className="text-xl lg:text-3xl">3شهور </h3>
              <p className="text-xl lg:text-3xl font-semibold">1200 ج.م</p>
            </a>
          </li>
          <li className="rounded-2xl border border-primary-300 shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a
              target="_blank"
              href="https://wa.me/+201080458323"
              className="p-10 block">
              <h3 className="text-xl lg:text-3xl">6شهور  </h3>
              <p className="text-xl lg:text-3xl font-semibold">2100 ج.م</p>
            </a>
          </li>
        </ul>
        <a
          target="_blank"
          href="https://wa.me/+201080458323"
          className="px-10 py-4 bg-secondary-300 text-white text-xl inline-block mt-10 rounded-2xl border border-secondary-400 active:scale-90 hover:scale-110 hover:bg-white hover:text-secondary-400 transition duration-300">
          اشترك الان
        </a>
      </div>
    </section>
  );
};

export default OffersSection;
