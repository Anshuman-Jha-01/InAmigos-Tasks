import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api.js";

function Blog() {
  let { slug } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    api
      .getBlog(slug)
      .then((data) => {
        setArticle(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        className="section"
        style={{
          background: "white",
          borderRadius: "1.5rem",
          margin: "1.6rem",
          padding: "2rem",
          boxShadow: "1px 1px 3px black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3 className="h3" style={{ fontSize: 26, textAlign: "center" }}>
          {article.title}
        </h3>

        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: article.body }}
        ></div>

        <div style={{ marginTop: "2rem" }}>
          <span style={{ fontSize: 13 }}>
            <b>Author:</b> {article.author}
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontSize: 13 }}>
            <b>Tags:</b> {article.tag}
          </span>
        </div>
      </section>
    </div>
  );
}

export default Blog;
