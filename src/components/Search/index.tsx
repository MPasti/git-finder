import classes from "./style.module.css";

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

type SearchProps = {
  getUser: (userName: string) => Promise<void>;
};

export function Search({ getUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      getUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Pesquisar um usuário: </h2>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Entre o nome do usuário"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            getUser(userName);
          }}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
