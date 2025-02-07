import { useState } from "react";
import axios from "axios";

export default function AddRecipe({ setArticlesList }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "FrontEnd",
    avaible: "",
  });

  const formField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3005/posts", formData).then((res) => {
      setArticlesList((currentList) => [...currentList, res.data]);
    });
    setFormData({
      title: "",
      content: "",
      category: "",
      avaible: "",
    });
  };
  return (
    <div className="container">
      <h1>Aggiungi Articolo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titolo">Titolo</label>

        <input
          type="text"
          placeholder="Inserisci il titolo"
          value={formData.title}
          onChange={(e) => formField("title", e.target.value)}
          required
        />
        <label htmlFor="contenuto">Contenuto</label>

        <textarea
          type="text"
          placeholder="Inserisci il contenuto"
          value={formData.content}
          onChange={(e) => formField("content", e.target.value)}
          required
        />
        <label htmlFor="categoria">Seleziona una categoria</label>
        <select
          value={formData.category}
          onChange={(e) => formField("category", e.target.value)}
          required
        >
          <option value="" disabled>
            Scegli un opzione
          </option>
          <option value="Primi">Primi</option>
          <option value="Secondi">Secondi</option>
          <option value="Dolci">Dolci</option>
        </select>
        <label htmlFor="Pubblicalo">Lo vuoi Pubblicare?</label>

        <input
          type="checkbox"
          checked={formData.avaible}
          onChange={(e) => formField("avaible", e.target.checked)}
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
