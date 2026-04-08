import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();

  const fetchDocs = async () => {
    try {
      const res = await API.get("/document");
      setDocs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createDoc = async () => {
    try {
      const res = await API.post("/document");
      navigate(`/editor/${res.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Your Documents</h2>

        <button className="button" onClick={createDoc}>
          + Create New Document
        </button>

        {docs.map((doc) => (
          <div
            key={doc._id}
            className="card"
            onClick={() => navigate(`/editor/${doc._id}`)}
          >
            <h3>{doc.title || "Untitled Document"}</h3>
            <p>Click to open</p>
          </div>
        ))}
      </div>
    </>
  );
}