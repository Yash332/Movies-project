import React from "react";
import Api from "../Api";


const Home = (props) => {
  return (
    <div
      style={{
        backgroundColor: "darkSalmon",
        borderTop: "2px solid black",
        paddingBottom: "20px",
      }}
    >
      <h2
        className="pt-3 "
        style={{
          fontFamily: "Rubik Dirt, cursive",
          fontSize: "45px",
          color: "DarkSlateGray",
        }}
      >
        Your selected Movies
      </h2>
      

      <Api firstvalue={props.firstvalue}/>
    </div>
  );
};
export default Home;
