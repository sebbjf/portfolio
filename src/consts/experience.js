// Dates are "YYYY-MM" and are formatted per language in Experience.astro.
// endDate: null for a single month, "present" for a current role.
const experience = [
  {
    name: "Institut Baix Empordà",
    position: "IT Technician (Internship)",
    description: "IT support for teachers and students.",
    startDate: "2025-01",
    endDate: "2025-04",
    translation: {
      es: {
        position: "Técnico informático (prácticas)",
        description: "Soporte informático a profesorado y alumnado.",
      },
    },
  },
  {
    name: "IFIXIT NOW",
    position: "IT Technician (Erasmus+)",
    location: "Greece",
    description: "WordPress websites and systems support.",
    startDate: "2024-05",
    endDate: null,
    translation: {
      es: {
        position: "Técnico informático (Erasmus+)",
        location: "Grecia",
        description: "Webs WordPress y soporte de sistemas.",
      },
    },
  },
];

export default experience;
