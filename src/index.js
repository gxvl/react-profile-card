import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Takai Gonçalves Lima"
          paragraph="Oi, meu nome é Takai, tenho 8 anos e sou um Akita. Infelizmente não sei ler tampouco programar, mas minhas habilidades são as seguintes: "
        />
        <SkillList></SkillList>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="takai.jpg" alt="foto-avatar" />;
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
  return (
    <div className="skill-list">
      <Skill skill="Correr" emoji="🏃" color="cyan" />
      <Skill skill="Brincar" emoji="🪀" color="yellow" />
      <Skill skill="Mimir" emoji="😴" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
