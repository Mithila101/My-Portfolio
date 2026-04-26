import { useEffect, useState } from "react";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [image, setImage] = useState(null);

  // ✅ Load projects
  const fetchProjects = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/projects/");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Add Project
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("github_link", github);
    formData.append("live_link", live);
    formData.append("image", image);

    const res = await fetch("http://127.0.0.1:8000/api/projects/add/", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Added ✅");
      fetchProjects();
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/projects/delete/${id}/`, {
      method: "DELETE",
    });

    fetchProjects();
  };

  return (
    <div className="container mt-4">

      <h2>Manage Projects</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card p-3">

        <input className="form-control mb-2" placeholder="Title"
          onChange={(e) => setTitle(e.target.value)} />

        <textarea className="form-control mb-2" placeholder="Description"
          onChange={(e) => setDescription(e.target.value)} />

        <input className="form-control mb-2" placeholder="GitHub"
          onChange={(e) => setGithub(e.target.value)} />

        <input className="form-control mb-2" placeholder="Live"
          onChange={(e) => setLive(e.target.value)} />

        <input type="file" className="form-control mb-2"
          onChange={(e) => setImage(e.target.files[0])} />

        <button className="btn btn-success">Add Project</button>
      </form>

      {/* LIST */}
      <div className="mt-4">
        <h4>Project List</h4>

        {projects.map((p) => (
          <div key={p.id} className="card p-3 mb-3">

            <h5>{p.title}</h5>
            <p>{p.description}</p>

            {p.image && (
              <img
                src={`http://127.0.0.1:8000${p.image}`}
                width="200"
                alt=""
              />
            )}

            <button
              className="btn btn-danger mt-2"
              onClick={() => handleDelete(p.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;