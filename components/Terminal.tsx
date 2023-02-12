import { ReactElement } from "react";

const Terminal: React.FC = (): ReactElement => {
  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="tabs">
          <p>PROBLEMS</p>
          <p>OUTPUT</p>
          <p>DEBUG CONSOLE</p>
          <p>TERMINAL</p>
        </div>
        <div className="options"></div>
      </div>
      <div className="terminal__body"></div>
    </div>
  );
};

export default Terminal;
