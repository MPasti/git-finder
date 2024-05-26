import { UserProps } from "../../types/user";
import { Search } from "../../components/Search";

import { useState } from "react";
import { User } from "../../components/User";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getUser = async (userName: string) => {
    setLoading(true);
    setUser(null);
    setError(false);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following, bio } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      bio,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search getUser={getUser} />
      {loading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
}
