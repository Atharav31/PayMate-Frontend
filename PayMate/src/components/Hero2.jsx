import { motion } from "framer-motion";
import feature2 from "../assets/feature2.jpg";

const Hero2 = () => {
  return (
    <>
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.5 }} // Trigger animations every time section enters view
                className="feature-card flex flex-col items-center"
              >
                <img
                  src={feature2}
                  className="max-w-sm rounded-lg shadow-2xl mb-4"
                  alt={`Feature ${index + 1}`}
                />
                <h1 className="text-3xl font-bold">Feature {index + 1}</h1>
                <p className="py-4 text-center">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Hero2;
