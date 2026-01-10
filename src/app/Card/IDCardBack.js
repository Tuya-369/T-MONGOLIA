"use client";

import { useSearchParams } from "next/navigation";

export default function IdCardBack() {
  const sp = useSearchParams();

  const issueDate = sp.get("issueDate") || "2021/01/28";
  const expiryDate = sp.get("expiryDate") || "2029/11/29";

  const labelBase =
    "text-[#025C8C] text-[10px] font-semibold leading-[11px]";
  const englishLabel =
    "text-[#025C8C] text-[9.5px] italic ml-[2px]";

  return (
    <div
      className="relative w-[450px] h-[282px] rounded-[18px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/IdCardBack.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-[20px] w-full text-center">
        <p className="text-[#025C8C] text-[9.5px]">
          Олгосон байгууллага Issuing authority
        </p>
        <p className="text-[#025C8C] text-[13px] font-extrabold uppercase">
          Улсын Бүртгэлийн Ерөнхий Газар
        </p>
        <p className="text-[#025C8C] text-[9.5px]">
          The General Authority for State Registration
        </p>
      </div>

      <div className="absolute top-[92px] left-[155px] space-y-[22px]">
        <div>
          <p className={labelBase}>
            Олгосон он, сар, өдөр{" "}
            <span className={englishLabel}>Date of issue</span>
          </p>
          <p className="text-[11px] text-[#2F2F2F] mt-[2px]">
            {issueDate}
          </p>
        </div>

        <div>
          <p className={labelBase}>
            Хүчинтэй хугацаа{" "}
            <span className={englishLabel}>Date of expiry</span>
          </p>
          <p className="text-[11px] text-[#2F2F2F] mt-[2px]">
            {expiryDate}
          </p>
        </div>
      </div>
    </div>
  );
}
