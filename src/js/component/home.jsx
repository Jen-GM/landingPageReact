import React from "react";
import Navbar from "./navbar";

const style = {
  width: "18rem",
};

const styleFont = {
  color: "white",
};

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="bg-light rounded-3">
          <div className="container-fluid mb-3 py-4">
            <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ad
              sapiente ratione distinctio ullam expedita sed perferendis soluta
              aperiam, cupiditate sequi, excepturi perspiciatis dolorum veniam.
              Adipisci officiis doloremque veritatis modi..
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Call to action!
            </button>
          </div>
        </div>
        <div className="d-flex flex-row mb-3">
          <div className="card" style={style}>
            <img
              src="https://picsum.photos/500/325?random=2"
              clasName="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="card" style={style}>
            <img
              src="https://picsum.photos/500/325?random=4"
              clasName="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="card" style={style}>
            <img
              src="https://picsum.photos/500/325?random=0"
              clasName="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="card" style={style}>
            <img
              src="https://picsum.photos/500/325?random=1"
              clasName="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer bg-dark" style={styleFont}>
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <span> MyWebsite.com</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
