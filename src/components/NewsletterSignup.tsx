import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup = ({ className = "" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, this would be an actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-[600px] mx-auto p-8 rounded-lg bg-black border border-zinc-800 ${className}`}
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white text-center"
        >
          <span className="text-amber-500">JOIN</span> THE FREEFALL
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-center italic"
        >
          "Fall Free or Don't Fall At All"
        </motion.p>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="relative">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 h-12"
              disabled={isSubmitting || status === "success"}
            />

            {status === "error" && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                <AlertCircle size={18} />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold h-12 transition-all duration-300"
            disabled={isSubmitting || status === "success"}
          >
            {isSubmitting
              ? "SUBMITTING..."
              : status === "success"
                ? "SUBSCRIBED"
                : "SUBSCRIBE FOR DROPS"}
          </Button>
        </motion.form>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 text-green-500"
          >
            <CheckCircle2 size={18} />
            <span>You're in! Watch for our next drop.</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 text-red-500"
          >
            <AlertCircle size={18} />
            <span>Please enter a valid email address.</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-zinc-500 text-center"
        >
          By subscribing, you'll be the first to know about exclusive drops,
          events, and limited releases.
        </motion.div>
      </div>

      {/* Gold accent elements */}
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <motion.div
        className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </motion.div>
  );
};

export default NewsletterSignup;
