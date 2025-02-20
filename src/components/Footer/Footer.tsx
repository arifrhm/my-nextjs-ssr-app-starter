// src/components/Footer/Footer.tsx
import Image from "next/image";

const footerLinks = [
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    icon: "/file.svg",
    label: "Learn"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    icon: "/window.svg",
    label: "Examples"
  },
  {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    icon: "/globe.svg",
    label: "Go to nextjs.org →"
  }
];

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      {footerLinks.map((link, index) => (
        <a
          key={index}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={link.icon}
            alt={link.label + " icon"}
            width={16}
            height={16}
          />
          {link.label}
        </a>
      ))}
    </footer>
  );
}