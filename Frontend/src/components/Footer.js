import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-10">
      {/* Main Footer */}
      <footer className="footer xl:px-24 py-10 px-4 text-base-content flex flex-wrap justify-between">
        <aside className="mb-6 text-4xl">
          <h1>EduSphere</h1>
        </aside>

        <nav className="mb-6">
          <h3 className="footer-title text-black font-semibold mb-2">
            Useful Links
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="link link-hover">
                About us
              </a>
            </li>
            <li>
              <a
                target="_"
                href="https://www.linkedin.com/in/subhashprasad/"
                className="link link-hover"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_"
                href="https://github.com/subhashdippu"
                className="link link-hover"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="/faq" className="link link-hover">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <nav className="mb-6">
          <h3 className="footer-title font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="mailto:subhashprasad2001@email.com"
                className="link link-hover"
              >
                subhashprasad2001@email.com
              </a>
            </li>
            <li>
              <a href="tel:+919354450840" className="link link-hover">
                +91-9354450840
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Social media
              </a>
            </li>
          </ul>
        </nav>
      </footer>

      <hr />

      {/* Bottom Footer */}
      <footer className="footer items-center xl:px-24 px-4 py-4 flex justify-between">
        <p>Copyright © 2025 - All rights reserved</p>

        <nav className="flex gap-4">
          <a href="#" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..."></path>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0 ..."></path>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4 ..."></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
