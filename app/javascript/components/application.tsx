import * as React from "react";
import * as ReactDOM from "react-dom";
import ExampleComponent from "./exampleComponent";

interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  return (
    <div>
      <ExampleComponent arg="This is the example component" />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App arg="Rails 7 with ESBuild/React" />, rootEl);
});
