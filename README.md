<!-- =========================
README.md
========================= -->

<h1 align="center">
  vinit-portfolio-three.vercel.app
</h1>

<p align="center">
  A portfolio website i.e.
  <a href="https://vinit-portfolio-three.vercel.app" target="_blank">
    vinit-portfolio-three.vercel.app
  </a>
  built with
  <a href="https://nextjs.org/" target="_blank">Next.js</a>
  and hosted with
  <a href="https://vercel.com/" target="_blank">Vercel</a>
</p>

<p align="center">
  <a href="https://choosealicense.com/licenses/mit/">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen"/>
  </a>
  <img src="https://img.shields.io/badge/Version-2.0.0-blue"/>
</p>

<br>

[![My Portfolio](https://user-images.githubusercontent.com/68834718/214532356-7c56cdbd-0136-4d24-a532-d27e160ae72d.png)]
(https://vinit-portfolio-three.vercel.app/)

## Contact

- Website – https://vinit-portfolio-three.vercel.app  
- Email – vinitgiri2007@gmail.com  
- GitHub – https://github.com/Vinitgiri37  
- LinkedIn – https://www.linkedin.com/in/vinitgiri2007/

[Scroll to Top](#--vinit-portfolio-threevercelapp)

---

<!-- =========================
src/lib/content/contact.ts
========================= -->

export const contactSection = {
  subtitle: "What's Next?",
  title: "Get In Touch",
  paragraphs: [
    "I’m currently looking for new opportunities and collaborations.",
    "Whether you have a question or just want to say hi, my inbox is always open.",
  ],
  email: "vinitgiri2007@gmail.com",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Vinitgiri37",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vinitgiri2007/",
    },
  ],
};

---

<!-- =========================
src/lib/content/index.ts
========================= -->

export { contactSection } from "./contact";

---

<!-- =========================
src/styles/animations.ts
========================= -->

export const getSectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

---

<!-- =========================
src/containers/Contact.tsx
========================= -->

import { contactSection } from "@/lib/content";
import { Wrapper } from "@/components";
import { getSectionAnimation } from "@/styles/animations";

const Contact = () => {
  const { subtitle, title, paragraphs, email, socialLinks } = contactSection;

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm text-accent">
        {subtitle}
      </p>

      <h2 className="mb-6 text-3xl font-bold text-white">
        {title}
      </h2>

      {paragraphs.map((text, index) => (
        <p key={index} className="mb-4 text-gray-400">
          {text}
        </p>
      ))}

      <a
        href={`mailto:${email}`}
        className="inline-block mt-6 rounded-md border border-accent px-6 py-3 text-accent transition hover:bg-accent hover:text-black"
      >
        Say Hello
      </a>

      <div className="mt-6 flex justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </Wrapper>
  );
};

export default Contact;
