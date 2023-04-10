const AboutPage = () => {
  return (
    <>
      {" "}
      <h3>A Little Bit About Me</h3>
      <p>
        Hi there! My name is Kevin Stoll, and I am currently studying Applied
        Computer Science. I have a passion for technology and have always been
        fascinated by how computers work. In addition to my studies, I am proud
        to work for Cisco, a company that has been at the forefront of the
        technology industry for many years.
      </p>
    </>
  );
};

export async function getStaicProps() {
  return { props: { title: "About" } };
}

export default AboutPage;
