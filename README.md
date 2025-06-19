# React + TypeScript + Tailwind + Vite

Dado que estamos usando vite, el comando de ejecucion de react es npm run

forma de hacer los commits
feat: Nueva funcionalidad
fix: Corrección de un bug
refactor: Cambio interno que no agrega ni corrige funcionalidad
chore: Tareas menores (build, configs, limpieza de código)
docs: Cambios en documentación
style: Cambios de estilo (espacios, formato, comas...) sin afectar lógica
test: Agregar o modificar pruebas
perf: Mejora de rendimiento
ci: Cambios en integraciones o CI/CD
build: Cambios que afectan el sistema de construcción o dependencias

Recuerden crean ramas para git, asi manejamos un mejor desarrollo. CUando le vayan a hacer push para unirlo a main, deben crear un pull request (creo que ustedes mismos lo pueden aprobar si no hay errores). les recomiendo que usen github desktop para esto, el resto lo pueden hacer por comandos si quieren.

Arquitectura
├── src/
│ ├── assets/ # Imágenes, íconos, etc.
│ ├── components/ # Componentes reutilizables (Navbar, Footer, Cards)
│ ├── pages/ # LandingPage, Login, Register, Dashboard, etc.
│ ├── services/ # Conexión a Supabase (auth.ts, db.ts)
│ ├── types/ # Tipos de TypeScript (User, Car, etc.)
│ ├── utils/ # Funciones auxiliares (formateo, validaciones)
│ ├── features / # segmentos con funciones (auth/loginForm, registerForm)
│ ├── App.tsx # Componente principal
│ └── main.tsx # Punto de entrada (render)
