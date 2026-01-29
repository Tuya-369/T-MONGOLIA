// components/IdFlipCard.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import IdCardFront from "../IdCardFront";
import IdCardBack from "../IDCardBack";

export default function IdFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full flex justify-center items-center overflow-hidden"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full max-w-[450px] aspect-[1.58/1]"
        style={{ transformStyle: "preserve-3d", perspective: "2000px" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 w-full h-full flex justify-center items-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="scale-[0.7] xs:scale-[0.8] sm:scale-100 origin-center transition-transform">
            <IdCardFront />
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 w-full h-full flex justify-center items-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="scale-[0.7] xs:scale-[0.8] sm:scale-100 origin-center transition-transform">
            <IdCardBack />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
