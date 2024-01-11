
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/formularioPregunta'
import FormularioPregunta from './component/formularioPregunta';
import PreguntaCreada from './component/preguntaCreada';
import { useState } from 'react';


function App() {
  let idActualPregunta = 1
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) =>{

      nueva.id = idActualPregunta;
      idActualPregunta++;
      setPreguntas([...preguntas, nueva ]);
  }

  const deleteQuestion = (id) =>{
    setPreguntas(preguntas.filter((pregunta) => pregunta.id !== id));
  }

  return (
    <div>
    <FormularioPregunta
    aniadePregunta={addQuestion}

    ></FormularioPregunta>

    <PreguntaCreada
    preguntas ={preguntas}
    deleteQuestion={deleteQuestion}

    ></PreguntaCreada>
    
  </div>
  )
}


export default App;
