import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import LookbookGrid from "./LookbookGrid";
import FloatingNavigation from "./FloatingNavigation";
import NewsletterSignup from "./NewsletterSignup";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background pattern with subtle Adinkra symbols */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=20')] bg-repeat bg-[length:200px_200px] pointer-events-none z-0"></div>

      {/* Floating Navigation */}
      <FloatingNavigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
        </motion.section>

        {/* Lookbook Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="text-amber-500">freefall14:</span> BLACK GOLD
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Inspired by Ghana's cultural wealth and creative energy. Each piece
            tells a story of heritage reimagined through a contemporary lens.
          </p>
          <LookbookGrid />
        </motion.section>

        {/* Brand Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-900"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  FreeFall Ghana was born from the intersection of global
                  streetwear culture and rich Ghanaian heritage. We create
                  exclusive, collectible pieces that elevate Ghanaian creative
                  identity while speaking the universal language of street
                  fashion.
                </p>
                <p className="text-gray-300">
                  Each drop is a limited edition story, meticulously crafted to
                  honor our roots while pushing boundaries. We don't just make
                  clothes—we create cultural artifacts for the bold and the
                  visionary.
                </p>
              </div>
              <div className="relative h-80 md:h-auto overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&q=80"
                  alt="Accra street scene"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="py-20 px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <NewsletterSignup />
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">FreeFall Ghana</h3>
            <p className="text-gray-500 text-sm mt-1">
              Fall Free or Don't Fall At All.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="mt-6 md:mt-0 text-gray-500 text-sm">
            © {new Date().getFullYear()} FreeFall. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
