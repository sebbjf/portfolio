// Dates are "YYYY-MM" and are formatted per language in Experience.astro.
// endDate: null for a single month, "present" for a current role.
const experience = [
  {
    name: "Institut Baix Empordà",
    position: "IT Technician (Internship)",
    description: "Resolving technical issues for teaching staff and students, writing documentation and inventory tasks.",
    startDate: "2025-01",
    endDate: "2025-04",
    translation: {
      es: {
        position: "Técnico Informático (Prácticas)",
        description:
          "Resolución de incidencias técnicas para profesorado y alumnado, redacción de documentación y tareas de inventario.",
      },
    },
  },
  {
    name: "IFIXIT NOW",
    position: "IT Assistant (Internship)",
    description:
      "Erasmus+ Experience. Tasks such as support and maintenance of computer equipment, Server management and Web development.",
    startDate: "2024-05",
    endDate: null,
    translation: {
      es: {
        position: "Asistente Informático (Prácticas)",
        description:
          "Experiencia Erasmus+. Tareas como soporte y mantenimiento de equipos informáticos, gestión de servidores y desarrollo web.",
      },
    },
  },
];

export default experience;
