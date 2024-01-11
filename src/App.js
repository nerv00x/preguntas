
import './App.css';
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
    
    
  }

  return (
    <div>
    <FormularioPregunta
    aniadePregunta={addQuestion}
    ></FormularioPregunta>

    <PreguntaCreada
    preguntas ={preguntas}
    ></PreguntaCreada>
    
  </div>
  )
}


export default App;
