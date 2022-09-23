import {useState, createContext} from 'react';
const TextoContext = createContext();

export const TextoProvider =  ({children}) => {
  const [texto, setTexto]        = useState()    
  const [word, setWord]        = useState()    
  const [ipaWord, setIpaWord]  = useState()    
  const [vocabulary, setVocabulary] = useState([]);

  const addItem  = palabra =>  {
        if(!vocabulary.some( item => item.palabra === palabra.palabra)) { 
            setVocabulary(prevState => [...prevState,
                          {
                           qt:1, 
                           palabra: palabra.palabra, 
                           ipaPalabra: palabra.ipaPalabra}]); 
        } else {
            setVocabulary(prevState => {
                const  a = prevState.find(item => item.palabra === palabra.palabra)  
                const  b = prevState.filter(item => item.palabra !== palabra.palabra)  
                let temp = [{...a, qt: a.qt + 1}, ...b,]
                return temp.sort((a,b) => b.qt - a.qt)
            })
        }
    } 

     
    return (
        <TextoContext.Provider 
            value={{
                setTexto,
                texto,
                setWord,
                word,
                setIpaWord,
                ipaWord,
                addItem,
                vocabulary,
            }}>
            {children}
        </TextoContext.Provider>
    );
}
     

export default TextoContext;
