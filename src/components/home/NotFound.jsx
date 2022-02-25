import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound({ nameSearch }) {
  return (
    <section className="page_404 datalist  mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">{nameSearch} Not Found</h3>
                <Link className="button btn btn-primary" to="/">
                  <i className="icon-home" /> Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="notFound datalist  mx-auto ">
    //   <h1>404</h1>
    //   <p>{nameSearch} Not Found</p>

    // </div>
  );
}
