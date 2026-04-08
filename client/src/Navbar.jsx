export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <h2>Collaborative Editor</h2>
      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}