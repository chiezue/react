import * as React from "react";

function PostList() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const first10 = data.slice(0, 10);
        setPosts(first10);
      })
      .catch((err) => {
        setError(err.message || "Haku epäonnistui");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Ladataan postauksia...</p>;
  }

  if (error) {
    return <p>Tapahtui virhe: {error}</p>;
  }

  return (
    <div>
      <h3>10 ensimmäistä postausta (title)</h3>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default PostList;
