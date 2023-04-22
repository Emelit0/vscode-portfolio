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
      <p>
        I am a certified IT specialist for system integration, which means that
        I have the skills to integrate various systems and technologies into a
        seamless network. I have experience in both codingand networking, which
        has allowed me to develop a broad range of technical skills.
      </p>
      <p>
        While I am interested in all aspects of technology, my main interest
        lies in cyber security. With the increasing number of cyber attacks and
        security breaches, I believe it's essential to understand how to protect
        computer systems and networks from these threats. I am always looking to
        expand my knowledge in this area and stay up to date with the latest
        security trends and best practices.
      </p>
    </>
  );
};

export async function getStaicProps() {
  return { props: { title: "About" } };
}

export default AboutPage;
