const menuActions = [
  {
    id: "aboutme",
    name: "About me",
    shortcut: ["s", "a"],
    keywords: "me",
    section: "navigation",
    perform: () => (window.location.href = localizePath(window.location.pathname, "/#")),
  },
  {
    id: "experience",
    name: "Experience",
    shortcut: ["s", "e"],
    keywords: "xp",
    section: "navigation",
    perform: () => (window.location.href = localizePath(window.location.pathname, "/#experience")),
  },
  {
    id: "projects",
    name: "Projects",
    shortcut: ["s", "p"],
    keywords: "works",
    section: "navigation",
    perform: () => (window.location.href = localizePath(window.location.pathname, "/#projects")),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["s", "c"],
    keywords: "email hi hello",
    section: "contact",
    perform: () => (window.location.href = localizePath(window.location.pathname, "/#contact")),
  },
  {
    id: "email",
    name: "Email",
    shortcut: ["e", "m"],
    keywords: "hi hello contact",
    section: "contact",
    perform: () => window.open("mailto:hi@sebastianjf.com", "_blank"),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    shortcut: ["l", "i"],
    keywords: "contact li",
    section: "contact",
    perform: () => window.open("https://www.linkedin.com/in/sebastian-jf/", "_blank"),
  },
  {
    id: "github",
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "repo",
    section: "links",
    perform: () => window.open("https://github.com/sebbjf/", "_blank"),
  },
];

export default menuActions;

function localizePath(pathname, destination) {
  const paths = pathname.split("/").filter(Boolean);
  const locale = paths.length > 0 && paths[0].length == 2 ? paths[0] : "";

  return `${locale.length > 0 ? "/" + locale : ""}${destination}`;
}