import React, { useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Latest Food Conspiracies</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
