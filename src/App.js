//Sempre lembrar de importar o React;
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
//Importa a API
import api from './services/api'

//Importa o CSS
import './App.css';
//Importa a imagem
import backgroundImage from './assets/background.jpg';

//É importante manter o nome da função igual ao nome do arquivo.
function App() {

    /** useState retorna um array com 2 posições 
     * 1. Variável com o valor inicial;
     * 2. Função para atualizarmos esse valor
    */
   const [projects, setProjects] = useState([]);

   /** Busca os dados do backEnd usando o método get */
   useEffect(() => {
       api.get('projects').then(response => {
           setProjects(response.data)
       });
   },
   []);

    async function handleAddProject(){
        //Por conta da imutabilidade, não devemos usar o método push
        //projects.push(`Novo projeto ${Date.now()}`);

        /** Usamos o spread operator ("...") para copiar todos os dados do array 
         * para dentro de um novo array com a informação nova */
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Henrique Fockink"
        });

        const project = response.data;

        setProjects([...projects, project]);
        console.log(projects);
    }
    /**As tags "vazias" são fragments. Fragments são necessário quando 
     * queremos repetir componentes
     */
    return (
        <>
            <Header title="Projects" />
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;