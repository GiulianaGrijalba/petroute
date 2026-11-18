import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PetRoute",
    short_name: "PetRoute",
    description: "Planificá viajes con tu perro o gato.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f2",
    theme_color: "#f7f7f2",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
    lang: "es-AR",
  };
}
