"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import IdCardFront from "../IdCardFront";
import IdCardBack from "../IDCardBack";

export default function IdFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flex justify-center items-center py-4 cursor-pointer select-none" 
      style={{ perspective: "2000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-[340px] h-[215px] sm:w-[450px] sm:h-[282px]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <div className="absolute inset-0 z-10" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          <IdCardFront />
        </div>

        {/* Back side */}
        <div 
          className="absolute inset-0" 
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <IdCardBack />
        </div>
      </motion.div>
    </div>
  );
}