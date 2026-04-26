import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";   // ✅ এটা আছে?
import Home from "./pages/home";
import Blog from "./pages/blog";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
};
function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ এটা Routes এর উপরে আছে? */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/dashboard/projects" element={<Projects />} />


<Route path="/dashboard" element={
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
} />

<Route path="/dashboard/projects" element={
  <PrivateRoute>
    <Projects />
  </PrivateRoute>
} />




      </Routes>
    </Router>
  );
}

export default App;