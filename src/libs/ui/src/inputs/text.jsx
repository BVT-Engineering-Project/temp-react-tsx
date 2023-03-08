import React from "react";

const Text = (props) => {
  const type = props.type || "text";
  return (
    <input
      type={type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Text;
