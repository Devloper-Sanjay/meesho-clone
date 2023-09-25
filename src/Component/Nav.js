import React from "react-dom";

function Nav() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              meesho
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Try saree,kurthi or Search by product code"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
