"use client";

const menu = [
  { title: "Төрд байгаа миний мэдээлэл", icon: "🧾" },
  { title: "Цахим хэтэвч", icon: "💳" },
  { title: "Үйлчилгээний түүх", icon: "📄" },
  { title: "Үндэсний шуудан", icon: "📦" },
  { title: "Талархал", icon: "💬" },
  { title: "Судалгаа", icon: "📊" },
  { title: "Санал, судалгаа", icon: "✍️" },
  { title: "Баталгаажуулалт", icon: "🔐" },
];

export default function ProfileMenu() {
  return (
    <div className="space-y-3">
      {menu.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white rounded-[14px] px-4 py-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-[36px] h-[36px] rounded-full bg-[#F2F6FF] flex items-center justify-center">
              <span>{item.icon}</span>
            </div>
            <p className="text-[15px] font-medium">{item.title}</p>
          </div>
          <span className="text-gray-400">{">"}</span>
        </div>
      ))}

      <div className="bg-white rounded-[14px] px-4 py-4 shadow-sm">
        <p className="text-red-500 font-medium">Системээс гарах</p>
      </div>
    </div>
  );
}
