import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Editor() {
  const { id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchDoc = async () => {
      const res = await API.get(`/document/${id}`);
      setText(res.data.content || "");
    };
    fetchDoc();
  }, [id]);

  const saveDoc = async (value) => {
    await API.put(`/document/${id}`, { content: value });
  };

  const handleChange = (e) => {
    setText(e.target.value);
    saveDoc(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container editor-container">
        <div className="sidebar">
          <div className="card">Live Users (coming soon)</div>
        </div>

        <div className="editor">
          <textarea value={text} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}