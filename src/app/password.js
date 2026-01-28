"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Password() {
  const inputsRef = useRef([]);
  const router = useRouter();
  const [error, setError] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);

  // useEffect - focus хийх
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
    if (error) setError("");
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSOS = () => {
    const fullPin = pin.join("");
    if (fullPin.length < 4) {
      setError("ПИН кодоо гүйцэд оруулна уу.");
      return;
    }
    if (fullPin === "1216") {
      router.push("/Login");
    } else {
      setError("ПИН код буруу байна.");
      setPin(["", "", "", ""]);
      inputsRef.current.forEach((input) => {
        if (input) input.value = "";
      });
      inputsRef.current[0]?.focus();
    }
  };

  const inputBaseClass =
    "w-[65px] h-[85px] text-center text-3xl font-light bg-[#E1E9F4] border-[1.5px] rounded-2xl transition-all duration-200 outline-none shadow-sm";
  const inputErrorClass = error
    ? "border-red-500"
    : "border-transparent focus:border-[#4285F4] focus:bg-white";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9F2FF] via-[#F4F9FF] to-white flex flex-col items-center justify-between py-24 px-10">
      <div className="mt-6">
        <p className="font-bold text-center text-[#2D3142] text-[17px] leading-tight max-w-[260px]">
          Та пин кодоо оруулж системд нэвтэрнэ үү
        </p>
      </div>

      <div className="flex flex-col items-center gap-14 w-full">
        <div className="flex gap-2.5">
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              autoComplete="off"
              className={`${inputBaseClass} ${inputErrorClass}`}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <div className="flex flex-col items-start w-full max-w-[280px] gap-5">
          <button className="text-[#2D3142] font-semibold text-[15px] tracking-tight">
            Пин кодоо мартсан?
          </button>
          <button className="text-[#2D3142] font-semibold text-[15px] tracking-tight">
            Өөр хэрэглэгчээр нэвтрэх
          </button>
        </div>
      </div>

      <div className="w-full max-w-xs flex flex-col items-center gap-4">
        {error && (
          <p className="text-red-500 font-bold text-sm mb-2">{error}</p>
        )}

        <button
          className="w-full h-[58px] bg-[#D64635] text-white font-bold text-[16px] rounded-xl active:scale-95 transition-all duration-200 shadow-md uppercase tracking-widest"
          onClick={handleSOS}
          type="button"
        >
          SOS
        </button>
      </div>
    </div>
  );
}
