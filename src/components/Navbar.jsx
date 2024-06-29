const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Samachar Times</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              "business",
              "entertainment",
              "health",
              "science",
              "sports",
              "technology",
            ].map((category) => (
              <li className="nav-item" key={category}>
                <div className="nav-link" onClick={() => setCategory(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
