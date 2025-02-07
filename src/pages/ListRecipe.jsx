import { useState, useEffect } from "react";
import axios from "axios";

export default function ListRecipe() {
  const [articlesList, setArticlesList] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3005/posts").then((res) => {
      setArticlesList(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="col">
          <ul>
            {articlesList.map((article) => (
              <li key={article.id}>
                <strong>{article.title}</strong>
                <br />
                <div>
                  <img src={article.image} alt="" />
                </div>
                <em>
                  {article.content} {article.category}
                </em>
                <button onClick={() => deleteArticle(article.id)}>
                  Cancella
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
