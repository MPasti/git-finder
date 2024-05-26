import { BsCodeSlash } from "react-icons/bs";
import { ReposProps } from "../../types/repos";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";

import classes from "./repo.module.css";

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: ReposProps) => {
  return (
    <div className={classes.repo}>
      <h3>{name}</h3>
      <p className={classes.language}>
        <BsCodeSlash /> {language}
      </p>
      <div>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={classes.repo_btn}>
        <span>Visualizar repositório</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export { Repo };
