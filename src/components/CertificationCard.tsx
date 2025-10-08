import { motion } from "framer-motion";

interface CertificationCardProps {
  name: string;
  year: string;
  icon: string;
  index: number;
}

const CertificationCard = ({ name, year, icon, index }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary dark:text-white">{name}</h3>
      <p className="text-accent">{year}</p>
    </motion.div>
  );
};

export default CertificationCard;
