import { FileText, Home, User, Grid } from "lucide-react";

export default function Footer() {
  const iconProps = { size: 22, strokeWidth: 1.2 };
  const inactive = "text-[#8E99AF]";
  const active = "text-[#1A5CFF]";

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 px-6 shadow-[0_-2px_15px_rgba(0,0,0,0.02)]">
      <div className="flex justify-between items-center h-[65px] max-w-md mx-auto">
        <div className="flex flex-col items-center flex-1 cursor-pointer">
          <Home {...iconProps} className={inactive} />
          <span className={`mt-1.5 text-[9px] font-medium ${inactive}`}>
            Нүүр
          </span>
        </div>
        <div className="flex flex-col items-center flex-1 cursor-pointer">
          <FileText {...iconProps} className={inactive} />
          <span className={`mt-1.5 text-[9px] font-medium ${inactive}`}>
            Үйлчилгээ
          </span>
        </div>
        <div className="relative flex-1 flex justify-center h-full">
          <div className="absolute -top-7 w-[58px] h-[58px] bg-[#1A5CFF] rounded-full flex items-center justify-center shadow-lg shadow-blue-200 border-[6px] border-[#F4F9FF] active:scale-95 transition-all cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M3 3H9V9H3V3ZM3 15H9V21H3V15ZM15 3H21V9H15V3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15H17V17H15V15ZM18 15H21V17H18V15ZM15 18H17V21H15V18ZM18 18H21V21H18V18Z"
                fill="currentColor"
              />
              <rect x="5.5" y="5.5" width="1" height="1" fill="currentColor" />
              <rect x="17.5" y="5.5" width="1" height="1" fill="currentColor" />
              <rect x="5.5" y="17.5" width="1" height="1" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 cursor-pointer">
          <Grid {...iconProps} className={inactive} />
          <span className={`mt-1.5 text-[9px] font-medium ${inactive}`}>
            Нэмэлт
          </span>
        </div>
        <div className="flex flex-col items-center flex-1 cursor-pointer">
          <User {...iconProps} className={active} />
          <span className={`mt-1.5 text-[9px] font-bold ${active}`}>
            Профайл
          </span>
        </div>
      </div>
    </footer>
  );
}
