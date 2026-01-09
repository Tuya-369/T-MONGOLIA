import { FileText, Home, QrCode } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
      <div className="flex justify-around items-center h-14 text-sm">
        <Home className=""/><button>Нүүр</button>
        <FileText/><button>Үйлчилгээ</button>
        <div className="mb-10 w-15 h-15 bg-blue-600 rounded-full">
            <QrCode />
        </div>
        <button>Нэмэлт</button>
        <button>Профайл</button>
      </div>
    </footer>
  );
}
