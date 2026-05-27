import "./globals.css";

export const metadata = {
  title: "Europa Foods - Premium Dehydrated Foods & Spices",
  description:
    "30+ years of expertise. Zero chemicals. International certifications. Premium dehydrated foods and spices for global trade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

