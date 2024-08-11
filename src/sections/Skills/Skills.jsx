import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="DBMS" />
        <SkillList src={checkMarkIcon} skill="R Language" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Collection" />
        <SkillList
          src={checkMarkIcon}
          skill="Data Cleaning and Transformation"
        />
        <SkillList src={checkMarkIcon} skill="Data Processing" />
        <SkillList src={checkMarkIcon} skill="AI/ML Modeling" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Presentation" />
        <SkillList src={checkMarkIcon} skill="Design Thinking" />
        <SkillList src={checkMarkIcon} skill="Collaboration" />
        <SkillList src={checkMarkIcon} skill="Critical Thinking" />
        <SkillList src={checkMarkIcon} skill="Storytelling" />
      </div>
    </section>
  );
}

export default Skills;
