import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Info,
  ShoppingBag,
  Instagram,
  LogIn,
  UserPlus,
  Shirt,
  Palette,
  Lightbulb,
  Music,
} from "lucide-react";
import { Button } from "./ui/button";

interface FloatingNavigationProps {
  className?: string;
}

const FloatingNavigation = ({ className = "" }: FloatingNavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 ${className}`}>
      <div className="bg-black rounded-full shadow-lg flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleNavigation}
          className="h-14 w-14 rounded-full text-gold-500 hover:text-white hover:bg-black/50"
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 top-0 w-72 bg-black border border-gold-500/20 rounded-lg shadow-xl p-6"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gold-500">FreeFall</h3>
                <p className="text-sm text-gray-300">
                  Fall Free or Don't Fall At All
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-white">Our Story</h4>
                  <p className="text-xs text-gray-400">
                    Born from the creative energy of Accra's streets, FreeFall
                    elevates Ghanaian identity through exclusive, collectible
                    streetwear that blends traditional symbolism with
                    contemporary design.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-white">
                    Current Drop
                  </h4>
                  <p className="text-xs text-gold-500">
                    FIGURE OF ART: BLACK GOLD
                  </p>
                  <p className="text-xs text-gray-400">
                    Inspired by Ghana's cultural wealth and creative energy.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <NavItem icon={<Info size={16} />} label="About" />
                <NavItem icon={<ShoppingBag size={16} />} label="Shop" />
                <NavItem icon={<Instagram size={16} />} label="Instagram" />
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold text-gold-500/80 uppercase tracking-wider mb-2 pl-1">
                  SECTION
                </div>
                <div className="flex flex-col space-y-2">
                  <NavItem icon={<LogIn size={16} />} label="Login" />
                  <NavItem icon={<UserPlus size={16} />} label="Sign Up" />
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold text-gold-500/80 uppercase tracking-wider mb-2 pl-1">
                  Categories
                </div>
                <div className="flex flex-col space-y-2">
                  <NavItem icon={<Shirt size={16} />} label="Fashion" />
                  <NavItem icon={<Palette size={16} />} label="Art" />
                  <NavItem icon={<Lightbulb size={16} />} label="Design" />
                  <NavItem icon={<Music size={16} />} label="Music" />
                  <NavItem icon={<ShoppingBag size={16} />} label="Lifestyle" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavItem = ({ icon, label, onClick = () => {} }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 transition-colors py-2 px-3 rounded-md hover:bg-black/50 w-full text-left"
    >
      <span className="text-gold-500/70">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default FloatingNavigation;
