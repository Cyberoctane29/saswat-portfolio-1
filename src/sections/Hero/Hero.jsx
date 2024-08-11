import styles from "./HeroStyles.module.css";
import aboutImg from "../../assets/about.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import resume from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={aboutImg}
          alt="Profile picture of Saswat Seth"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Saswat <br /> Seth
        </h1>
        <h2>Data Aficionado</h2>
        <span>
          <a href="https://github.com/Cyberoctane29" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/saswat-seth-0a782223b/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkeIn icon" />
          </a>
          <a href="https://x.com/cyberoctane29" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about leveraging data to drive insights, solve real-world
          challenges, and optimize decision-making across industries.
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
