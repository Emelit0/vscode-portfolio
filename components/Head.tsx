import Head from "next/head";

const MetaHead = ({ title }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Emelito is a AI student with a passion for computer science and valid skills in full stack web development"
      />
      <meta
        name="keywords"
        content="Emelito, Emelit0, web developer, Emelit0 web developer, vscode-portfolio, computer science, student, software engineering"
      />
      <meta property="og:title" content="Emelito's Portfolio" />
      <meta
        property="og:description"
        content="Applied Computer Science Student with full stack webdevelopment skills"
      />
      #need to add image
      <meta property="og:url" content="" /> need to add html_url
    </Head>
  );
};

export default MetaHead;

MetaHead.defaultProps = {
  title: "Emelito",
};
