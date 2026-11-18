import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetRoute | Viajar con tu mascota, más simple",
  description:
    "Planificá los viajes con tu perro o gato: documentación, transporte y tareas en un solo lugar.",
  applicationName: "PetRoute",
  appleWebApp: { capable: true, title: "PetRoute", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
