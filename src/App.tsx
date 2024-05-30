import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Blog } from "./types";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/blogs");
      setBlogs(data.blogs);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {blogs.length && blogs.map((blog) => <p>{blog.title}</p>)}
    </>
  );
}

export default App;
