import Footer from "./Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="pb-16">
          {children}
        </div>
      </body>
    </html>
  );
}
