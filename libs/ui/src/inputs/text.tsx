import React from "react";

interface ITextProps {
  label?: string;
  name: string;
  value: string;
  onChange: () => void;
  type?: string;
}

const Text = (props: ITextProps) => {
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
