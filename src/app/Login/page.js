"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    ovog: "",

    surname: "",

    givenName: "",

    sex: "ЭМЭГТЭЙ",

    civilId: "",

    dob: "",

    issueDate: "",

    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "civilId") {
      const onlyNums = value.replace(/\D/g, "").slice(0, 8);

      setFormData((prev) => ({ ...prev, civilId: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => setImagePreview(reader.result);

    reader.readAsDataURL(file);
  };

  const goToCard = () => {
    const { civilId, dob, issueDate, ovog, givenName } = formData;

    if (civilId.length !== 8 || !dob || !issueDate || !ovog || !givenName) {
      alert("Мэдээллийг бүрэн гүйцэд бөглөнө үү!");

      return;
    }

    if (imagePreview) localStorage.setItem("userProfileImg", imagePreview);

    const query = new URLSearchParams({
      ...formData,

      Number: civilId,

      dob: dob.replace(/-/g, "/"),

      issueDate: issueDate.replace(/-/g, "/"),

      expiryDate: formData.expiryDate
        ? formData.expiryDate.replace(/-/g, "/")
        : "Хугацаагүй",
    }).toString();

    router.push(`/Card?${query}`);
  };

  return (
    <div className="min-h-screen bg-[#0d1421] text-gray-200 flex items-center justify-center p-4 font-sans selection:bg-cyan-500/30">
      {/* Background Glow */}

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-[420px] bg-[#161f30]/60 backdrop-blur-xl border border-white/5 p-6 sm:p-8 rounded-[2rem] shadow-2xl relative">
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium tracking-tight text-white/90">
            Цахим Үнэмлэх
          </h2>

          <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-[0.2em]">
            Мэдээлэл оруулах
          </p>
        </div>

        <div className="space-y-4">
          {/* Photo Picker */}

          <div className="flex justify-center mb-6">
            <label className="relative cursor-pointer group">
              <div className="w-24 h-32 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden transition-all group-hover:border-cyan-500/40">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    className="w-full h-full object-cover"
                    alt="Preview"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                      +
                    </div>

                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">
                      Зураг
                    </span>
                  </div>
                )}
              </div>

              <input
                type="file"
                hidden
                onChange={handleImageChange}
                accept="image/*"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <ModernInput
              label="Овог"
              name="ovog"
              value={formData.ovog}
              onChange={handleChange}
            />

            <ModernInput
              label="Эцэг/Эхийн нэр"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>

          <ModernInput
            label="Өөрийн нэр"
            name="givenName"
            value={formData.givenName}
            onChange={handleChange}
          />

          <div className="space-y-1.5">
            <label className="text-[10px] font-medium text-gray-500 ml-1 uppercase tracking-widest">
              Иргэний бүртгэлийн дугаар
            </label>

            <input
              name="civilId"
              value={formData.civilId}
              onChange={handleChange}
              placeholder="8 оронтой тоо"
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 focus:border-cyan-500/50 focus:bg-white/[0.05] outline-none transition-all font-mono text-sm tracking-widest text-white placeholder:text-gray-700"
              maxLength={8}
            />
          </div>

          <div className="space-y-3 pt-2">
            <ModernDate
              label="Төрсөн огноо"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-3">
              <ModernDate
                label="Олгосон"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />

              <ModernDate
                label="Хүчинтэй"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            onClick={goToCard}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[12px] font-bold rounded-2xl shadow-xl shadow-blue-900/20 active:scale-[0.98] transition-all mt-6 uppercase tracking-widest"
          >
            Үнэмлэх үүсгэх
          </button>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner UI

const ModernInput = ({ label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-medium text-gray-500 ml-1 uppercase tracking-widest">
      {label}
    </label>

    <input
      {...props}
      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 focus:border-cyan-500/50 focus:bg-white/[0.05] outline-none transition-all text-sm text-white"
    />
  </div>
);

const ModernDate = ({ label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-medium text-gray-500 ml-1 uppercase tracking-widest">
      {label}
    </label>

    <input
      type="date"
      {...props}
      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white focus:border-cyan-500/50 outline-none transition-all [color-scheme:dark]"
    />
  </div>
);
