import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="  mx-auto p-6  rounded-t-lg w-full bg-primary-400"
      id="contact"
    >
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto max-w-7xl  px-6 flex-grow">
        {/* Copyright */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base">© 2024 - All rights reserved</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-3xl">
          <Link
            href="https://www.linkedin.com/in/md-al-imran-346315200/"
            target="_blank"
          >
            <Linkedin className="hover:text-primary transition-colors duration-300" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="hover:text-primary transition-colors duration-300" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCOWippB9lssBiuohziDP5Vw"
            target="_blank"
          >
            <Youtube className="hover:text-primary transition-colors duration-300" />
          </Link>
          <Link href="https://www.facebook.com/alimran.sahin/" target="_blank">
            <Facebook className="hover:text-primary transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
