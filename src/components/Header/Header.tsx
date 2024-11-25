import React, { useEffect } from "react";
import { getTodos } from "../../modules/services/todoService";

const Header: React.FC = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <header className=" text-white p-4 text-center">
      <h1 className="text-4xl">To-do List</h1>
      <h2 className="text-2xl mt-2">Erick Vera</h2>
      <h4 className="text-lg mt-1">
        <a
          href="http://www.erickvcoder.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          www.erickvcoder.com
        </a>
      </h4>
    </header>
  );
};

export default Header;
