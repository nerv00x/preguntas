import React from 'react';
import Pregunta  from './pregunta';

const PreguntasCreadas = ({ preguntas, deleteQuestion}) => {
    console.log(preguntas + "array preguntas")
    return (

        <div>
            <ul className="list-group">
                {
                    preguntas.map(p => {
                        return (<Pregunta key={p.id} pregunta={p} deleteQuestion={deleteQuestion} />)
                    })
                }
            </ul>
        </div>
    )


};

export default PreguntasCreadas;  