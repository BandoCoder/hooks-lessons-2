import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function DataFetching() {
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch(
          "https://jsonplaceholder.typicode.com/possrgts/1"
        );
        if (!res.ok) throw new Error(res.status);
        let fetchedPost = await res.json();
        setLaoding(false);
        setPost(fetchedPost);
        setError("");
      } catch (error) {
        setLaoding(false);
        setPost({});
        setError(`Something Went Wrong - ${error}`);
      }
    }
    getPost();
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        post.title
      )}
      {error ? error : null}
    </div>
  );
}

export default DataFetching;
