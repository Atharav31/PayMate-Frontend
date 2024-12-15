import { motion } from "framer-motion";
import image1 from "../assets/feature1.jpg";
import image2 from "../assets/feature2.jpg";

const Hero2 = () => {
  const features = [
    {
      image: image1,
      title: " Expense Tracking",
      description: "Add expenses easily and assign them to group members.",
    },
    {
      image: image2,
      title: "Fair Bill Splitting",
      description: "Automatically calculates how much each person owes.",
    },
    {
      image: image2,
      title: "No Sign-Up ",
      description:
        "Start using PayMate instantly without needing to create an account.",
    },
    {
      image: image2,
      title: "Free to Use",
      description: "No charges or subscriptions—PayMate is completely free.",
    },
  ];

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
          {features.map(({ image, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }} // Trigger animations every time section enters view
              className="feature-card flex flex-col items-center"
            >
              <img
                src={image}
                className="max-w-sm rounded-lg shadow-2xl mb-4"
                alt={`Feature ${index + 1}`}
              />
              <h1 className="text-3xl font-bold text-center">{title}</h1>
              <p className="py-4 text-center">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero2;
