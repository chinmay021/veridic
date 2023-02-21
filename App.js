import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Card from "./Card";

/**
 *
 * cards
 *
 *
 */

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPostData = async () => {
    try {
      const request = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      );
      setPosts(request.data);
      isLoading(false);
      //   console.log(request, posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return posts.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="app-wrapper">
      <h1>Veridic Posts</h1>
      <div className="wrapper">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default App;
