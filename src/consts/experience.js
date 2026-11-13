// Dates are "YYYY-MM" and are formatted per language in Experience.astro.
// endDate: null for a single month, "present" for a current role.
const experience = [
  {
    name: "Institut Baix Empordà",
    position: "IT Technician (Internship)",
    description: "Solved technical issues for teachers and students, wrote documentation and kept the inventory.",
    startDate: "2025-01",
    endDate: "2025-04",
    translation: {
      es: {
        position: "Técnico informático (prácticas)",
        description:
          "Resolución de incidencias técnicas para profesorado y alumnado, redacción de documentación y tareas de inventario.",
      },
    },
  },
  {
    name: "IFIXIT NOW",
    position: "IT Technician (Erasmus+)",
    description: "Erasmus+ internship in Greece. Built and managed WordPress websites, maintained systems and supported users.",
    startDate: "2024-05",
    endDate: null,
    translation: {
      es: {
        position: "Técnico informático (Erasmus+)",
        description: "Prácticas Erasmus+ en Grecia. Desarrollo y gestión de webs con WordPress, mantenimiento de sistemas y soporte a usuarios.",
      },
    },
  },
];

export default experience;
