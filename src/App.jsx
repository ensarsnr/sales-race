import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
       <span className="navbar-brand ml">Navbar</span>
      </nav>
    <div id="cssportal-grid">
        <div className="rounded bg-info d-flex align-items-center justify-content-center" id="div1">
          <div className="row  w-100 h-75">
            <div className="col d-flex align-items-center justify-content-start">
              <div className="ml-2 text-light w-100 ">
                <span className="h2">İsim Soyisim</span>
              </div>
            </div>
            <div className="col bg-danger rounded"></div>
          </div>
      </div>
      <div className="rounded bg-warning" id="div2">div2</div>
        <div className="rounded bg-danger" id="div3">
          <div className="row w-100">
            <div className="col-12 text-center">
              <h1 className="text-light">Başlık</h1>
            </div>
            <div className="col-12 bg-success">s</div>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
