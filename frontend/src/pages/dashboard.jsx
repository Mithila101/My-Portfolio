import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <h4>Admin Panel</h4>

        <ul className="nav flex-column mt-4">

          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
          </li>


          
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/dashboard/projects">Projects</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/dashboard/blog">Blog</Link>
          </li>
         <button
  className="btn btn-danger"
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  }}
>
  Logout
</button>


        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">

        <h2>Dashboard Overview</h2>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Total Projects</h5>
              <h3>0</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Total Blogs</h5>
              <h3>0</h3>
            </div>
          </div>

        </div>
        

      </div>

    </div>
  );
}

export default Dashboard;