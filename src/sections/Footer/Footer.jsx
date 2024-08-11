import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section className={styles.container}>
      <p>
        &copy; 2024 Saswat Seth.
        <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
