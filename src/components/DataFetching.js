import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error(res.status);
        let fetchedPost = await res.json();
        setLoading(false);
        setPost(fetchedPost);
        setError("");
      } catch (error) {
        setLoading(false);
        setPost({});
        setError(`Something Went Wrong - ${error}`);
      }
    }
    getPost();
  }, []);
  return (
    <div>
      {loading ? <ScaleLoader /> : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetching;
