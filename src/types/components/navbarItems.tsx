import { LogIn, User } from "lucide-react";

export const navbarItems = [
  { link: "#home", label: "Inicio" },
  { link: "#cars", label: "Autos" },
  { link: "#services", label: "Servicios" },
  { link: "#about", label: "Nosotros" },
  { link: "#contact", label: "Contacto" },
];

export const authItems = [
  {
    link: "/login",
    label: "Iniciar Sesión",
    icon: <LogIn className="h-4 w-4" />,
    stylesDesktop:
      "flex items-center space-x-2 px-4 py-2 text-white hover:text-emerald-300 transition-colors duration-300",
    stylesMobile:
      "flex items-center space-x-2 px-4 py-2 text-white hover:text-emerald-300 transition-colors duration-300",
  },
  {
    link: "/register",
    label: "Registrarse",
    icon: <User className="h-4 w-4" />,
    stylesDesktop:
      "flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg",
    stylesMobile:
      "flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-lg text-white font-medium",
  },
];
