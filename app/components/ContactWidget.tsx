import styles from "../../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "placeholder@gmail.com",
    href: "placeholder@gmail.com",
  },
  {
    social: "github",
    link: "Emelit0",
    href: "https://github.com/Emelit0",
  },
  {
    social: "linkedin",
    link: "placeholder",
    href: "https://www.linkedin.com/de/placeholder/",
  },
  {
    social: "twitter",
    link: "placeholder",
    href: "https://www.twitter.com/placeholder",
  },
  {
    social: "instagram",
    link: "Emelit0",
    href: "https://www.instagram.com/placeholder",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
