import React, {useState} from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import './styles.css';
import './styles-priority.css';
import api from '../../Services/api';

function Notes ({data, handleDelete, handleChangePriority}){
    const [changendNote, setChangedNote] = useState  ('');

    function handleEdit (e, priority){
      e.style.cursor ='text';
      e.style.borderRadius = '5px';
      
      if(priority){
        e.style.boxShadow ='0 0 5px white';
      }
      else{
        e.style.boxShadow = '0 0 5px gray';
      }
    }

    async function handleSave(e, notes){
      e.style.cursor ='default';
      e.style.boxShadow = 'none'

      if(changendNote && changendNote != notes){ debugger
        await api.post(`/contents/${data._id}` ,{
          notes: changendNote
        });
      }
    }

    return(
        <>
            <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
              <div>
                <strong>{data.title}</strong>
                <di className= "delete">
                  <AiTwotoneDelete 
                  size={18}
                  onClick = {() => handleDelete(data._id)}
                  />
                </di>
              </div>

              <textarea 
                defaultValue={data.notes}
                onClick={e => handleEdit(e.target, data.priority)}
                onChange= {e => setChangedNote(e.target.value)} // pega o valor do textarea e armazena na var setchangNote
                onBlur={e => handleSave(e.target, data.notes)}
              /> 
              <span><AiOutlineExclamationCircle 
              size={18} 
              onClick={() => handleChangePriority(data._id)}
              />
              </span>
            </li>
   
        </>  //metodo de fraguiment // tag para não quebrar o html // tag vazia // tag fraquimentada//
    )
}


export default Notes;