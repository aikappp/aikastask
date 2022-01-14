import React from "react";

const Ingredients = ({ data }) => {
  console.log(data);
  return (
    <ol>
      <h2>{data.name}</h2>
      <li>{data.ll}</li>
      <li>{data.kk}</li>
      <li>{data.hh}</li>
      <img width={400} src={data.img} alt="" />
    </ol>
  );
  
};

export default Ingredients;
