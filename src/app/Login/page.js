// Login.jsx
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
    Number: "",
    dobYear: "",
    dobMonth: "",
    dobDay: "",
    issueYear: "",
    issueMonth: "",
    issueDay: "",
    expiryYear: "",
    expiryMonth: "",
    expiryDay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Иргэний дугаар зөвхөн 12 оронтой
    if (name === "Number") {
      const onlyNums = value.replace(/\D/g, "").slice(0, 12);
      setFormData((prev) => ({ ...prev, Number: onlyNums }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const goToCard = () => {
    if (formData.Number.length !== 12) {
      alert("Иргэний бүртгэлийн дугаар 12 оронтой байх ёстой.");
      return;
    }

    const requiredFields = [
      "ovog","surname","givenName","dobYear","dobMonth","dobDay",
      "issueYear","issueMonth","issueDay","expiryYear","expiryMonth","expiryDay"
    ];
    const isMissing = requiredFields.some(f => !formData[f]);
    if (isMissing) {
      alert("Бүх талбарыг бөглөнө үү.");
      return;
    }

    if (imagePreview) localStorage.setItem("userProfileImg", imagePreview);

    // Огноог YYYY/MM/DD форматад хувиргаж query-д нэмнэ
    const dob = `${formData.dobYear}/${formData.dobMonth.padStart(2,'0')}/${formData.dobDay.padStart(2,'0')}`;
    const issueDate = `${formData.issueYear}/${formData.issueMonth.padStart(2,'0')}/${formData.issueDay.padStart(2,'0')}`;
    const expiryDate = `${formData.expiryYear}/${formData.expiryMonth.padStart(2,'0')}/${formData.expiryDay.padStart(2,'0')}`;

    const query = new URLSearchParams({
      ...formData,
      dob,
      issueDate,
      expiryDate
    }).toString();

    router.push(`/Card?${query}`);
  };

  // Dropdown-д ашиглах жил/сар/өдөр массив
  const years = Array.from({ length: 100 }, (_, i) => 2026 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F9FF] p-4 font-inter">
      <div className="w-full max-w-lg p-8 bg-white rounded-[2.5rem] shadow-xl border border-blue-50">
        <h1 className="text-xl font-bold mb-8 text-[#2D3142] text-center uppercase tracking-wider">
          Иргэний мэдээлэл оруулах
        </h1>

        <div className="space-y-5">
          {/* Image */}
          <div className="flex flex-col items-center">
            <label className="cursor-pointer">
              <div className="w-28 h-36 bg-[#E8EDF4] rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Зураг сонгох</span>
                )}
              </div>
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            </label>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <input name="ovog" value={formData.ovog} onChange={handleChange} placeholder="Овог" className="input" />
            <input name="surname" value={formData.surname} onChange={handleChange} placeholder="Эцэг /эх/ нэр" className="input" />
          </div>

          <input name="givenName" value={formData.givenName} onChange={handleChange} placeholder="Өөрийн нэр" className="input" />

          <div className="grid grid-cols-2 gap-4">
            <input name="Number" value={formData.Number} onChange={handleChange} placeholder="Иргэний дугаар" className="input tracking-widest font-bold" />
            <select name="sex" value={formData.sex} onChange={handleChange} className="input">
              <option value="ЭМЭГТЭЙ">Эмэгтэй</option>
              <option value="ЭРЭГТЭЙ">Эрэгтэй</option>
            </select>
          </div>

          {/* DOB */}
          <div>
            <p className="text-[12px] font-semibold mb-1">Төрсөн он, сар, өдөр</p>
            <div className="grid grid-cols-3 gap-2">
              <select name="dobYear" value={formData.dobYear} onChange={handleChange} className="input">
                <option value="">Он</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <select name="dobMonth" value={formData.dobMonth} onChange={handleChange} className="input">
                <option value="">Сар</option>
                {months.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <select name="dobDay" value={formData.dobDay} onChange={handleChange} className="input">
                <option value="">Өдөр</option>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>

          {/* Issue & Expiry */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[12px] font-semibold mb-1">Олгосон огноо</p>
              <div className="grid grid-cols-3 gap-2">
                <select name="issueYear" value={formData.issueYear} onChange={handleChange} className="input">
                  <option value="">Он</option>{years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <select name="issueMonth" value={formData.issueMonth} onChange={handleChange} className="input">
                  <option value="">Сар</option>{months.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select name="issueDay" value={formData.issueDay} onChange={handleChange} className="input">
                  <option value="">Өдөр</option>{days.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-semibold mb-1">Хүчинтэй хугацаа</p>
              <div className="grid grid-cols-3 gap-2">
                <select name="expiryYear" value={formData.expiryYear} onChange={handleChange} className="input">
                  <option value="">Он</option>{years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <select name="expiryMonth" value={formData.expiryMonth} onChange={handleChange} className="input">
                  <option value="">Сар</option>{months.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select name="expiryDay" value={formData.expiryDay} onChange={handleChange} className="input">
                  <option value="">Өдөр</option>{days.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
          </div>

          <button onClick={goToCard} className="w-full bg-[#025C8C] text-white py-4 rounded-2xl font-extrabold mt-6 uppercase">
            Үнэмлэх үүсгэх
          </button>
        </div>
      </div>
    </div>
  );
}
