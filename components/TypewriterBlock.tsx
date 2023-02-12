"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { ReactElement } from "react";
import { useEffect, useState } from "react";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

const TypewriterBlock: React.FC = (): ReactElement => {
  const text01 = "  1   const sayHello = () = {";
  const text02 = "  2      console.log('hello')";
  const text03 = "  3   //This prints out Hello World";
  const text04 = "  4   }";
  const text05 = "  5   ";
  const text06 = "  6   sayHello()";
  const text07 = "  7   ";
  const text08 = "  8   const MyPerson = {";
  const text09 = "  9      name: 'Emelito',";
  const text010 = " 10      age: 22,";
  const text011 = " 11      languages: ['German', 'English'] ";
  const text012 = " 12      location: 'Cologne'";
  const text013 =
    " 13      technologies: ['Node.js', 'Docker', 'SQL/NoSQL', 'Networks']";
  const text014 =
    " 14      ProgrammingIn: ['JavaScript', 'TypeScript', 'Python', 'C++']";
  const text015 =
    " 15      InterestedIn: 'everything thats consuming bits and bytes'";
  const text016 = " 16     }";
  const text017 = " 17   ";
  const text018 = " 18   const isOpenMinded = () => {";
  const text019 = " 19     return true;";
  const text020 = " 20   };";
  const text021 = " 21   ";
  const text022 = " 22   const hasSenseOfHumor = () => {";
  const text023 = " 23     return undefined;";
  const text024 = " 24   };";
  const text025 = " 25   ";
  const text026 = " 26   const isCreative = () => {";
  const text027 = " 27     return false;";
  const text028 = " 28   };";
  const text029 = " 29   ";
  const text030 = " 30   const isCurious = () => {";
  const text031 =
    " 31     console.log('I enjoy trying new things and taking risks!');";
  const text032 = " 32   };";
  const text033 = " 33   ";
  const text034 = " 34   const randomFacts = async () => {";
  const text035 =
    " 35     const facts = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');";
  const text036 = " 36     const data = await facts.json();";
  const text037 = " 37     console.log(data.text);";
  const text038 = " 38   };";
  const text039 = " 39   ";
  const text040 = " 40   if (isCurious()) {";
  const text041 = " 41     randomFacts();";
  const text042 = " 42   }";
  const text043 = " 43   ";
  const text044 = " 44   const new Promise((resolve, reject) => {";
  const text045 = " 45     setTimeout(() => {";
  const text046 = " 46       resolve('Contact me');";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");
  const [text11, setText11] = useState("");
  const [text12, setText12] = useState("");
  const [text13, setText13] = useState("");
  const [text14, setText14] = useState("");
  const [text15, setText15] = useState("");
  const [text16, setText16] = useState("");
  const [text17, setText17] = useState("");
  const [text18, setText18] = useState("");
  const [text19, setText19] = useState("");
  const [text20, setText20] = useState("");
  const [text21, setText21] = useState("");
  const [text22, setText22] = useState("");
  const [text23, setText23] = useState("");
  const [text24, setText24] = useState("");
  const [text25, setText25] = useState("");
  const [text26, setText26] = useState("");
  const [text27, setText27] = useState("");
  const [text28, setText28] = useState("");
  const [text29, setText29] = useState("");
  const [text30, setText30] = useState("");
  const [text31, setText31] = useState("");
  const [text32, setText32] = useState("");
  const [text33, setText33] = useState("");
  const [text34, setText34] = useState("");
  const [text35, setText35] = useState("");
  const [text36, setText36] = useState("");
  const [text37, setText37] = useState("");
  const [text38, setText38] = useState("");
  const [text39, setText39] = useState("");
  const [text40, setText40] = useState("");
  const [text41, setText41] = useState("");
  const [text42, setText42] = useState("");
  const [text43, setText43] = useState("");
  const [text44, setText44] = useState("");
  const [text45, setText45] = useState("");
  const [text46, setText46] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(text01.slice(0, text1.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1]);

  setTimeout(() => {
    if (text1 === text01) setText2(text02.slice(0, text2.length + 1));
    else return;
  }, 50);

  setTimeout(() => {
    if (text2 === text02) setText3(text03.slice(0, text3.length + 1));
    else return;
  }, 50);

  setTimeout(() => {
    if (text3 === text03) setText4(text04.slice(0, text4.length + 1));
    else return;
  }, 50);

  setTimeout(() => {
    if (text4 === text04) setText5(text05.slice(0, text5.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text5 === text05) setText6(text06.slice(0, text6.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text6 === text06) setText7(text07.slice(0, text7.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text7 === text07) setText8(text08.slice(0, text8.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text8 === text08) setText9(text09.slice(0, text9.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text9 === text09) setText10(text010.slice(0, text10.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text10 === text010) setText11(text011.slice(0, text11.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text11 === text011) setText12(text012.slice(0, text12.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text12 === text012) setText13(text013.slice(0, text13.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text13 === text013) setText14(text014.slice(0, text14.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text14 === text014) setText15(text015.slice(0, text15.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text15 === text015) setText16(text016.slice(0, text16.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text16 === text016) setText17(text017.slice(0, text17.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text17 === text017) setText18(text018.slice(0, text18.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text18 === text018) setText19(text019.slice(0, text19.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text19 === text019) setText20(text020.slice(0, text20.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text20 === text020) setText21(text021.slice(0, text21.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text21 === text021) setText22(text022.slice(0, text22.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text22 === text022) setText23(text023.slice(0, text23.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text23 === text023) setText24(text024.slice(0, text24.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text24 === text024) setText25(text025.slice(0, text25.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text25 === text025) setText26(text026.slice(0, text26.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text26 === text026) setText27(text027.slice(0, text27.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text27 === text027) setText28(text028.slice(0, text28.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text28 === text028) setText29(text029.slice(0, text29.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text29 === text029) setText30(text030.slice(0, text30.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text30 === text030) setText31(text031.slice(0, text31.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text31 === text031) setText32(text032.slice(0, text32.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text32 === text032) setText33(text033.slice(0, text33.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text33 === text033) setText34(text034.slice(0, text34.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text34 === text034) setText35(text035.slice(0, text35.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text35 === text035) setText36(text036.slice(0, text36.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text36 === text036) setText37(text037.slice(0, text37.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text37 === text037) setText38(text038.slice(0, text38.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text38 === text038) setText39(text039.slice(0, text39.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text39 === text039) setText40(text040.slice(0, text40.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text40 === text040) setText41(text041.slice(0, text41.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text41 === text041) setText42(text042.slice(0, text42.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text42 === text042) setText43(text043.slice(0, text43.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text43 === text043) setText44(text044.slice(0, text44.length + 1));
    else return;
  }, 50);
  setTimeout(() => {
    if (text44 === text044) setText45(text045.slice(0, text45.length + 1));
    else return;
  }, 50);

  return (
    <>
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
        >
          {text4}
        </SyntaxHighlighter>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text5}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text6}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text7}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text8}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text9}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text10}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text11}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text12}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text13}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text14}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text15}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text16}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text17}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text18}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text19}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text20}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text21}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text22}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text23}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text24}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text25}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text26}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text27}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text28}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text29}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text30}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text31}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text32}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text33}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text34}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text35}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text36}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text37}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text38}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text39}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text40}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text41}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text42}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text43}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text44}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text45}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {text46}
      </SyntaxHighlighter>
    </>
  );
};

export default TypewriterBlock;
