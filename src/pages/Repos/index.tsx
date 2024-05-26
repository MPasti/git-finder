import { ReposProps } from "../../types/repos";

import { useParams } from "react-router-dom";
import classes from "./repos.module.css";
import { BackButton } from "../../components/BackButton";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import { Repo } from "../../components/Repo";

export const Repos = () => {
  const { username } = useParams<{ username: string }>();

  const [repos, setRepos] = useState<ReposProps[] | []>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async (username: string) => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await res.json();
        // let orderedRepos = data.sort(
        //   (a: ReposProps, b: ReposProps) =>
        //     b.stargazers_count - a.stargazers_count
        // );

        // orderedRepos = orderedRepos.slice(0, 5);

        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      loadRepos(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!repos && loading) return <Loader />;

  return (
    <div className={classes.repos}>
      <BackButton />
      <h2>Veja os repositórios deste usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className={classes.container}>
          {repos.map((repo: ReposProps) => (
            <Repo {...repo} key={repo.name} />
          ))}
        </div>
      )}
    </div>
  );
};
