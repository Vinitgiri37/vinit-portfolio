import { contactSection } from '@/lib/content/contact';

import { Wrapper } from '@/components';

const Contact = () => {
  const { subtitle, title, paragraphs } = contactSection;

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>

      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph: string, i: number) => (
        <p key={i}>{paragraph}</p>
      ))}

      {/* ✅ ALWAYS WORKING GMAIL LINK */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vinitgiri2007@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 mt-12 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition"
      >
        Say Hello
      </a>
    </Wrapper>
  );
};

export default Contact;
