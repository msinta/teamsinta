import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
  arg: string;
}

const ExampleComponent = ({ arg }: Props) => {
  return <div>{`Hello! ${arg}!`}</div>;
};

export default ExampleComponent;
