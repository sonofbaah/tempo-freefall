import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CountdownTimerProps {
  targetDate?: Date;
}

const CountdownTimer = ({
  targetDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-white">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase tracking-wider">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase tracking-wider">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase tracking-wider">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  );
};

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  dropName?: string;
  targetDate?: Date;
}

const HeroSection = ({
  title = "FREEFALL",
  subtitle = "FIGURE OF ART",
  tagline = "Fall Free or Don't Fall At All",
  dropName = "BLACK GOLD",
  targetDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Adinkra symbols background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 opacity-20">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-2/3 right-1/3 h-48 w-48 opacity-15">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-2/3 h-40 w-40 opacity-20">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path
              d="M20 20 L80 20 L80 80 L20 80 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M35 35 L65 35 L65 65 L35 65 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-sm font-light tracking-widest"
        >
          {subtitle}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 text-center text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 text-xl font-light italic tracking-wide"
        >
          {tagline}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold">{dropName}</h2>
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Next Drop In
          </p>
          <div className="mt-4">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="outline"
            className="border-gold-500 bg-transparent text-gold-500 hover:bg-gold-500/10"
            style={{ borderColor: "#D4AF37", color: "#D4AF37" }}
          >
            EXPLORE COLLECTION
          </Button>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
    </section>
  );
};

export default HeroSection;
