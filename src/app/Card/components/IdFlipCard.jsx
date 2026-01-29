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
      className="w-full flex justify-center items-center"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        // max-w-г 450 байсныг 500 болгож сунгаад, үндсэн өргөнийг 92% болгов
        className="relative w-[92vw] max-w-[500px] aspect-[1.58/1]"
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
          {/* scale-ийг бүрэн устгасан. IdCardFront-оо w-full болгож өгөх хэрэгтэй */}
          <div className="w-full h-full">
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
          <div className="w-full h-full">
            <IdCardBack />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
