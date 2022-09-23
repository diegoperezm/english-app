import { useContext } from 'react';
import TextoContext from '../../context'
import getIpa from '../../utils';

const PalabraIpa = () => {
  const {texto, setWord, word, setIpaWord, ipaWord, addItem} = useContext(TextoContext) 

  const handleMouseUp = () => {
    const palabra     = window.getSelection().toString().toLowerCase();

    if(palabra !== '' &&  palabra.includes(' ') === false ) {
        const palabraConFormato= palabra.replace(/[,.?\[\]]/,'');
        const ipaPalabra = getIpa(palabraConFormato)
        setWord(palabraConFormato)
        setIpaWord(ipaPalabra)
        addItem({palabra: palabraConFormato, ipaPalabra}) 
    } 

   
  }
    
    return (
            <div className="words">
                <p>Palabra:</p>
                <p className="word">{word} </p>
                <p>IPA:</p>
                <p className="ipaWord">{ipaWord}</p>
                <p 
                    className="texto"
                    onMouseUp={handleMouseUp}
                 >
                    {texto} 
                </p>
            </div>
    )
}


export default PalabraIpa;
