"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function CardContent() {
  const sp = useSearchParams();
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    const savedImg = localStorage.getItem("userProfileImg");
    if (savedImg) setProfileImg(savedImg);
  }, []);


  const data = {
    ovog: (sp.get("ovog") || "БОРЖИГОН").toUpperCase(),
    surname: (sp.get("surname") || "ЛХАГВАСҮРЭН").toUpperCase(),
    givenName: (sp.get("givenName") || "УЯНГА").toUpperCase(),
    sex: (sp.get("sex") || "ЭМЭГТЭЙ").toUpperCase(),
    Number: sp.get("Number") || "392346426872",
    dob: sp.get("dob") || "2004/11/29",
    expiryDate: sp.get("expiryDate") || "2029/11/29",
    issueDate: sp.get("issueDate") || "2021/01/28",
  };

  // Figma загварын тогтмол стилүүд
  const brandColor = "text-[#025C8C]"; // Тэрхүү өвөрмөц цэнхэр өнгө
  const labelBase = `${brandColor} text-[10.5px] font-bold leading-[1.1] tracking-tight`;
  const englishLabel = `${brandColor} text-[10px] font-normal italic ml-1`;
  const valueText = "text-[#1E1E1E] text-[11.5px] font-semibold mt-0.5 mb-1 uppercase tracking-tight";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-12 py-16 font-inter">
      
      {/* FRONT SIDE - Үнэмлэхний урд тал */}
      <div 
        className="relative w-[450px] h-[282px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        style={{ 
          backgroundImage: "url('/images/IdCard.png')", 
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat' 
        }}
      >
        {/* Толгойн бичвэр */}
        <div className="absolute top-[22px] left-[132px] flex flex-col items-start">
          <h1 className={`${brandColor} text-[12.5px] font-extrabold leading-none tracking-normal`}>
            МОНГОЛ УЛСЫН ИРГЭНИЙ ҮНЭМЛЭХ
          </h1>
          <h2 className={`${brandColor} text-[10.5px] font-semibold leading-none mt-[3px]`}>
            CITIZEN IDENTITY CARD MONGOLIA
          </h2>
        </div>

        {/* Цээж зураг - */}
        <div className="absolute top-[75px] left-[26px] w-[105px] h-[132px] bg-white border-[0.5px] border-gray-300 overflow-hidden shadow-sm">
          {profileImg ? (
            <img src={profileImg} className="w-full h-full object-cover shadow-inner" alt="Citizen" />
          ) : (
            <div className="w-full h-full bg-[#F3F4F6] flex items-center justify-center text-[10px] text-gray-400">PHOTO</div>
          )}
        </div>

        <div className="absolute top-[72px] left-[146px] flex flex-col w-[270px]">
          <div className="h-[36px]">
            <p className={labelBase}>Овог <span className={englishLabel}>Family name</span></p>
            <p className={valueText}>{data.ovog}</p>
          </div>

          <div className="h-[36px]">
            <p className={labelBase}>Эцэг/ эх /-ийн нэр <span className={englishLabel}>Surname</span></p>
            <p className={valueText}>{data.surname}</p>
          </div>
          
          <div className="h-[36px]">
            <p className={labelBase}>Нэр <span className={englishLabel}>Given name</span></p>
            <p className={valueText}>{data.givenName}</p>
          </div>

          <div className="flex gap-10 h-[36px]">
            <div>
              <p className={labelBase}>Хүйс <span className={englishLabel}>Sex</span></p>
              <p className={valueText}>{data.sex}</p>
            </div>
            <div>
              <p className={labelBase}>Төрсөн он, сар, өдөр <span className={englishLabel}>Date of birth</span></p>
              <p className={valueText}>{data.dob}</p>
            </div>
          </div>

          <div className="mt-1">
            <p className={labelBase}>Иргэний бүртгэлийн дугаар <span className={englishLabel}>Civil identification</span></p>
            <p className="text-[#1E1E1E] text-[13.5px] font-bold mt-1 tracking-[0.15em]">
              {data.Number}
            </p>
          </div>
        </div>
      </div>


      {/* BACK SIDE - Үнэмлэхний ар тал */}


      <div 
        className="relative w-[450px] h-[282px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        style={{ 
          backgroundImage: "url('/images/IdCardBack.png')", 
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Олгосон байгууллагын мэдээлэл */}
        <div className="absolute top-[20px] w-full text-center space-y-[1px]">
          <p className={`${brandColor} text-[9.5px] font-medium`}>Олгосон байгууллага Issuing authority</p>
          <p className={`${brandColor} text-[13px] font-extrabold uppercase`}>Улсын Бүртгэлийн Ерөнхий Газар</p>
          <p className={`${brandColor} text-[9.5px] font-medium`}>The General Authority for State Registration</p>
        </div>

        {/* Ар талын огноонууд */}
        <div className="absolute top-[92px] left-[155px] space-y-6">
          <div>
            <p className={labelBase}>Олгосон он, сар, өдөр <span className={englishLabel}>Date of issue</span></p>
            <p className="text-[12px] font-bold text-[#1E1E1E] mt-1">{data.issueDate}</p>
          </div>
          <div>
            <p className={labelBase}>Хүчинтэй хугацаа <span className={englishLabel}>Date of expiry</span></p>
            <p className="text-[12px] font-bold text-[#1E1E1E] mt-1">{data.expiryDate}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
export default function Card() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Уншиж байна...</div>}>
      <CardContent />
    </Suspense>
  );
}