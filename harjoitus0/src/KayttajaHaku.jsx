import { useEffect, useState } from "react";

function KayttajaHaku() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId || userId < 1 || userId > 10) return;

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );

        if (!response.ok) {
          throw new Error("Haku epäonnistui");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  return (
    <div>
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Anna numero 1-10"
        onChange={(e) => setUserId(Number(e.target.value))}
      />

      {loading && <p>Ladataan...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && user && (
        <div>
          <p>Nimi: {user.name}</p>
          <p>Kaupunki: {user.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default KayttajaHaku;
