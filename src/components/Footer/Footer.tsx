import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-500 text-center text-white py-12 font-montserrat">
      <h2 className="text-4xl">Erick Vera Coder</h2>
      <h4 className="text-lg mt-2">
        <a
          href="http://www.erickvcoder.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          www.erickvcoder.com
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
