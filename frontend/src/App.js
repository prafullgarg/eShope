import React from "react";
import p1 from "./assets/p1.jpg";
function App() {
  return (
    <React.Fragment>
      {/*grid-container class will give page a grid layout */}
      <div className="grid-container">
        {/*class row will keep all the childs if header in row using flex-box model*/}
        {/*Creating header */}
        <header className="row">
          <div>
            <a href="./index.html" className="brand">
              Eshope
            </a>
            {/*intentionaly defines class brand to give it different styling then other ancher tags*/}
          </div>
          <div>
            <a href="./cart.html">Cart</a>
            <a href="./sigin.html">Sign In</a>
          </div>
        </header>
        {/*creating main section*/}
        <main className="row center">
          {/*main will follow flex box model because of row class and keep content center aligned*/}
          {/*Creating Product Card*/}
          <div className="card">
            <a href="./product.html">
              <img
                className="medium"
                src={p1}
                alt="Denis Lingo shirt"
              />
            </a>
            <div className="card-body">
              <a href="./product.html">
                <h2>Denis Lingo</h2>
              </a>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star`"></i>
                </span>
              </div>
              <div className="price">$200</div>
            </div>
          </div>
        </main>
        {/*Creating footer of the application */}
        {/*row is the parent class and center is child class */}
        <footer className="row center">All rights are reserved</footer>
      </div>
    </React.Fragment>
  );
}

export default App;
