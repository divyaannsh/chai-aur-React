import React from "react";
 import  ReactDOM  from "react-dom/client";

//  React ELement

const heading = React.createElement("h1",{id: "heading"},"Namaste React");


const root = React.createElement(document.getElementById("root"));

root.render(heading)
