import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 cursor-pointer ${className}`}
        style={{ ...style, display: "block", background: "red",  }}
        onClick={onClick}
      />
    );
  }


  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export { SampleNextArrow, SamplePrevArrow };
