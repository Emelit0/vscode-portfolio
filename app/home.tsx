import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TypewriterComponent from "typewriter-effect";

const Home: React.FC = (): ReactElement => {
  return (
    <div className="container">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        <TypewriterComponent
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        >
          <h1 className="title">Hello World</h1>
        </TypewriterComponent>
      </SyntaxHighlighter>
    </div>
  );
};
