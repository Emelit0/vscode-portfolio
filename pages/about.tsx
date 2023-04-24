const AboutPage = () => {
  return (
    <>
      {" "}
      <h3>A Little Bit About Me</h3>
      <p>
        Hi there! My name is Kevin Stoll, and I am currently studying Applied
        Computer Science. I have a passion for technology and have always been
        interested in what goes on inside of computer.V
      </p>
    </>
  );
};

export async function getStaicProps() {
  return { props: { title: "About" } };
}

export default AboutPage;
