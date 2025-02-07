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

  // CANCELLAZIONE ARTICOLO

  const deleteArticle = (articleId) => {
    axios.delete(`http://localhost:3005/posts/${articleId}`).then((res) => {
      setArticlesList((currentList) =>
        currentList.filter((article) => article.id !== articleId)
      );
    });
  };

  return (
    <>
      <div className="container">
        <h2>Lista Ricette</h2>
        <div className="row">
          {articlesList.map((article) => (
            <div className="col" key={article.id}>
              <h3>{article.title}</h3>
              <div>
                <img src={article.image} alt="" />
              </div>
              <p>
                {article.content} {article.category}
              </p>
              <button onClick={() => deleteArticle(article.id)}>
                Cancella
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
