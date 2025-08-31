
import "./globals.css"

export const metadata = {
  title: "Project Hub - Showcase Your Projects",
  description: "A modern platform to showcase, manage and discover amazing projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`}
      >
        
          <div className="relative min-h-screen">
            {children}
          </div>
        
      </body>
    </html>
  );
}
