import React from "react";

interface ILayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
}
