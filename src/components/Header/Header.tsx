import React, { useEffect } from "react";
import { getTodos } from "../../modules/services/todoService";

const Header: React.FC = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <header className=" text-white p-4 text-center font-montserrat">
      <h1 className="text-4xl">TODO List</h1>
    </header>
  );
};

export default Header;
