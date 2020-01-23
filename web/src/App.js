import React, { useState, useEffect }from 'react';
import api from'./services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

//componente = função que retorna qualquer conteudo 
//estado =  atributo para componentes (ex.: title) )( informações que um componente 
//pai passa para o filho
//propriedade = informação que o componente vai manipular )
//( informações mantidas pelo componente (lembrar imutabilidade)



function App(){ //componente pai

  const [devs, setDevs]=useState([]);
  
  

   useEffect(()=>{
      async function loadDevs(){
        const response = await api.get('/devs');

        setDevs(response.data); 
      }

      loadDevs();
   },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs',data)

    

    setDevs([...devs, response.data]);
  }

  return(
    <div id="app"> 
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      


      <main>

        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
             
        </ul>

      </main>
    </div>
  );
}

export default App;