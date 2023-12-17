import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
  {
    name: "HTML + CSS",
    level: "advanced",
    color: "yellow",
  },
  {
    name: "React",
    level: "beginner",
    color: "blue",
  },
  {
    name: "Java",
    level: "beginner",
    color: "red",
  },
  {
    name: "Figma",
    level: "intermediate",
    color: "purple",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Geraldo Gonçalves Lima"
          paragraph="Estudante de BCC da UFRPE, 20 anos, quinto período. Skateboard Charlie Brown Jr. Tic tac prey miauu "
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="eu.jpg" alt="foto-avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

function SkillList() {
  const numSkills = skillData.length;

  return (
    <div className="skill-list">
      {numSkills > 0 ? (
        <>
          {skillData.map((skill) => (
            <Skill
              name={skill.name}
              level={skill.level}
              color={skill.color}
            ></Skill>
          ))}
        </>
      ) : (
        <p>blud got no skills at all 💀</p>
      )}
    </div>
  );
}

function Skill({ name, color, level }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{name}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
