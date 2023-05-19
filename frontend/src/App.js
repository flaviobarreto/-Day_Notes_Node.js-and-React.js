import React, { useState, useEffect } from "react";
//react hooks -- pesquisar sobre
import api from './Services/api'

import './app.css'
import './global.css'
import './sidebar.css'
import './main.css'
import Notes from './Components/Notes'; // não precisa passar o index, porque ele vem por default
import RadioButton from "./Components/RadioButton";


//Componente = è uma estrutura de codigo que returna um html, css ou js.
//Propriedades = são informações que um componente Pai, passa para um componente filho.
//estados = Função que armazena uma informações e manipula a informação.

function App() {

  const [selectedValue, setSelectedValue] = useState('all');
  const [ title, setTitles ] = useState('')
  const [ notes, setNotes ] = useState('')
  const [ allNotes, setallNotes ] = useState([])

  useEffect(() => {
    getAllNotes()
  }, []) 

  async function getAllNotes(){
    const response = await api.get('/annotations', );
    setallNotes(response.data)
  }

  async function loadNotes (option){
      const params = {priority: option};
      const response = await api.get('/priorities', {params}); //params query JSON

      if(response){
        setallNotes(response.data);
      }
  } 

  async function handleChange(e){
    setSelectedValue(e.value);

    if(e.checked && e.value != 'all'){
      loadNotes(e.value);
    }
    else{
      getAllNotes();
    }
  }

  async function handleDelete(id){ debugger
    const deletedNote = await api.delete(`/annotations/${id}`); ///Aspas simples INVERTIDA// tomar cuidado ??

    if(deletedNote){
      setallNotes(allNotes.filter(note => note._id != id));
    }
  }

  async function handleChangePriority (id){
    const  note = await api.post (`/priorities/${id}`);

    if(note && selectedValue != 'all'){
      loadNotes(selectedValue);
    }
    else if(note){
      getAllNotes();
    }
  }

  async function handleSumit(e){ 
    ///e.preventDefalt(); estava causando um erro

    const response = await api.post('/annotations',{ 
      title,
      notes,
      priority: false
    });

    setTitles('')
    setNotes('')

    setallNotes([...allNotes, response.data])
   
    if(selectedValue != 'all'){
      getAllNotes();
    } 
    else{
      setallNotes([...allNotes, response.data])
    }
    setSelectedValue('all');
  }

  useEffect(()=>{
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background = "#FFD3CA"
      if(title && notes){
       btn.style.background = "#EB8F7A"
      }
    }
    enableSubmitButton()
  }, [title, notes])

  return( 
    <div id="app">
      <aside>
        <strong>Carderno de notas</strong>
        <form onSubmit={handleSumit}>
            <div className="input-block">
                 <label htmlFor="title">Titulo da Anotação</label>
                 <input
                 required
                 maxLength="30"
                 value={title}
                 onChange={e => setTitles(e.target.value)}
                 />
            </div>
            <div className="input-block">
                <label htmlFor="nota">Anotação</label>
                <textarea 
                required
                value={notes}
                onChange={e => setNotes(e.target.value)}
                />
            </div>

            <button id="btn_submit" type="submit">Salvar</button>
        </form>
        <br/>
        <RadioButton
        selectedValue ={selectedValue}
        handleChange = {handleChange}
        />
      </aside>

      <main>
          <ul>
            {allNotes.map (data => (
              <Notes 
              key={data._id} 
              data ={data}
              handleDelete={handleDelete}
              handleChangePriority ={handleChangePriority}
              />
            ))}
         </ul>
      </main>

    </div>

)
 
}

export default App;
