import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Recipe() {
  const [articlesList, setArticlesList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/posts/${id}`).then((res) => {
      setArticlesList(res.data);
    });
  }, [id]);

  return (
    <div className="container">
      <h1>{articlesList.title}</h1>
      <img src={articlesList.image} alt="articlesList.title" />
      <p>{articlesList.content}</p>
    </div>
  );
}
