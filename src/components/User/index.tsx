import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../../types/user";
import { Link } from "react-router-dom";
import classes from "./user.module.css";

export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  bio,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.bio}>
        <div>{bio}</div>
      </div>
      <div className={classes.stats}>
        <div>
          <p>
            Seguidores: <p className={classes.number}>{following}</p>
          </p>
        </div>
        <div>
          <p>
            Seguindo: <p className={classes.number}>{followers}</p>
          </p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver repositórios</Link>
    </div>
  );
};
