import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://static2-images.vnncdn.net/files/publish/2022/12/8/meo-1-1416.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Neko</h5>
          <p className="card-text">
            Mèo méo meo mèo meo
          </p>
          <a href="#" className="btn btn-primary">
            Xem mèo khum?
          </a>
        </div>
      </div>
    );
  }
}
