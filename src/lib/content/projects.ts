const getId = (() => {
  let id = 0;
  return () => ++id;
})();

const projectsSection = {
  title: "Projects",
  projects: [
    {
      id: getId(),
      name: "Vinit Portfolio",
      url: "https://vinitgiri.vercel.app/",
      repo: "https://github.com/Vinitgiri37/vinit-portfolio",
      img: "/portfolio-pic.png",
      year: 2025,
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ],
};

export default projectsSection;