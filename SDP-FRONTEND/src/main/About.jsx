import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          ABOUT US
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Welcome to <span className="font-semibold">LL-Art</span>, your
          creative hub for discovering and owning inspiring artworks. We are
          dedicated to showcasing authentic creations, supporting talented
          artists, and offering a seamless art-buying experience at accessible
          prices.
        </motion.p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Component */}
          {[
            {
              title: "Our Mission",
              text: "To make art accessible and inspiring for everyone by connecting passionate creators with art enthusiasts worldwide.",
            },
            {
              title: "Why Choose Us?",
              text: "Authentic and original artworks, diverse collections across styles and mediums, and dedicated support for a seamless art journey.",
            },
            {
              title: "Our Vision",
              text: "To be a global hub for creativity, empowering artists and enriching lives through the beauty and value of art.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-300"
            >
              {/* Card Title */}
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                {item.title}
              </h2>
              {/* Card Description */}
              <p className="text-gray-600 text-center">{item.text}</p>

              {/* Blue Line Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-b-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
