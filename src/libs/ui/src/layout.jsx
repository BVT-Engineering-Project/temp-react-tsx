import React from "react";

export default function Layout(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
}
