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
    </section>
  );
};

export default OffersSection;
