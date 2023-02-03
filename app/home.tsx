import SyntaxHighlighter from "react-syntax-highlighter";
import { ReactElement } from "react";
import { useEffect, useState } from "react";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home: React.FC = (): ReactElement => {
  const first_text = "1   const sayHello = () = {";
  const second_text = "2      console.log('hello')";
  const third_text = "3   //This prints out Hello World";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1]);

  setTimeout(() => {
    if (text1 === first_text) setText2(second_text.slice(0, text2.length + 1));
    else return;
  }, 50);

  setTimeout(() => {
    if (text2 === second_text) setText3(third_text.slice(0, text3.length + 1));
    else return;
  }, 50);
  return (
    <div className="container">
      <div className="App">
        <div className="box">
          <span>
            <div className="line1 blinking-cursor">
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                customStyle={{ padding: 1, backgroundColor: "transparent" }}
              >
                {text1}
              </SyntaxHighlighter>
            </div>
            <div className="line2 blinking-cursor">
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                customStyle={{ padding: 1, backgroundColor: "transparent" }}
              >
                {text2}
              </SyntaxHighlighter>
            </div>
            <div className="line3 blinking-cursor">
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                customStyle={{ padding: 1, backgroundColor: "transparent" }}
              >
                {text3}
              </SyntaxHighlighter>
            </div>
            <div className="line4 blinking-cursor">
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                customStyle={{ padding: 1, backgroundColor: "transparent" }}
              >{`4   }`}</SyntaxHighlighter>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
