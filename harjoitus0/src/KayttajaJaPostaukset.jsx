import { useEffect, useState } from "react";

function KayttajaJaPostaukset() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const userRes = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        if (!userRes.ok) throw new Error("Käyttäjän haku epäonnistui");
        const userData = await userRes.json();

        const postRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );
        if (!postRes.ok) throw new Error("Postausten haku epäonnistui");
        const postData = await postRes.json();

        setUser(userData);
        setPosts(postData);
      } catch (err) {
        setError(err.message);
        setUser(null);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  const prevUser = () => {
    if (userId > 1) setUserId(userId - 1);
  };

  const nextUser = () => {
    if (userId < 10) setUserId(userId + 1);
  };

  return (
    <div>
      <h2>Käyttäjä ja postaukset</h2>

      <button onClick={prevUser}>Edellinen</button>
      <button onClick={nextUser}>Seuraava</button>

      {loading && <p>Ladataan...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && user && (
        <div>
          <h3>{user.name}</h3>
          <p>Kaupunki: {user.address.city}</p>

          <h4>Postaukset:</h4>
          <ul>
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default KayttajaJaPostaukset;
