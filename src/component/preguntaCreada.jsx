import Pregunta from "./pregunta";

export default function PreguntaCreada({ preguntas }) {
  return (
    <div>
      <ul>
      <li>
          {preguntas.map((p) => {
            return <Pregunta key={p.id} pregunta={p} />;
          })}
      
        </li>
        
      </ul>
    </div>
  );
}
