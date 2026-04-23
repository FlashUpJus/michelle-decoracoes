import '../styles/Team.css';

const team = [
  { nome: "João", funcao: "Frontend", cor: "#fbcfe8" },
  { nome: "Maria", funcao: "UX Designer", cor: "#bae6fd" },
  { nome: "Ana", funcao: "Product Manager", cor: "#bbf7d0" },
  { nome: "Carlos", funcao: "Backend", cor: "#fde68a" },
  { nome: "Lucas", funcao: "DevOps", cor: "#ddd6fe" },
  { nome: "Fernanda", funcao: "QA", cor: "#fecaca" },
  { nome: "Rafael", funcao: "Mobile", cor: "#a7f3d0" },
  { nome: "Juliana", funcao: "UI Designer", cor: "#fde68a" },
];

export default function Team() {
  return (
    <section className="team">
      <h1>Nossa Equipe</h1>
      <p>Conheça nosso time</p>

      <div className="carousel">
        <div className="carousel-track">
          {[...team, ...team].map((membro, index) => (
            <div
              key={index}
              className="team-card"
              style={{ backgroundColor: membro.cor }}
            >
              <div className="card-content">
                <div className="avatar" />

                <div className="info">
                  <h3>{membro.nome}</h3>
                  <span>{membro.funcao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}