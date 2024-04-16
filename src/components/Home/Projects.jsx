import "../../styles/Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Code Clicker",
      desc: "Code clicker est un jeu dans le style de cookie clicker le but du jeu est d'avoir le plus de ligne de code possible !",
      link:"https://code-clicker-theta.vercel.app/"
    }
  ];
  return (
    <div className="Projects">
      <div className="title">
        <h1>Projets</h1>
        <p>
          Quand j&apos;ai le temps j&apos;essaie de créer ou d&apos;avancer sur
          des projets pour monter en compétences
        </p>
      </div>
      <div className="articles">
        {projects.map(project => (
          <a key={project.id} href={project.link} target="_blank">
            <article>
              <h2><span>{project.id} | </span>{project.name}</h2>
              <p>{project.desc}</p>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
