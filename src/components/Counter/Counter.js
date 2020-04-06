import React from "react";
import { connect } from "react-redux";

const Counter = ({ count, inc, dec, rnd }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn btn-primary" onClick={dec}>
        -
      </button>
      <button className="btn btn-primary" onClick={inc}>
        +
      </button>
      <button className="btn btn-primary" onClick={rnd}>
        ~
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

export default connect(mapStateToProps)(Counter);
