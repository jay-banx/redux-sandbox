import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { bindActionCreators } from "redux";

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

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const value = Math.floor(Math.random() * 10) + 1;
      rnd(value);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
