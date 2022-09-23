import { useEffect, useState,  useContext } from 'react';
import TextoContext from '../../context'
import getIpa from '../../utils';

const TextoIpa = () => {
  const [textoIpa, setTextoIpa] = useState()
  const { texto } = useContext(TextoContext) 

  const fSymbol = (arr) => {
      const finalArr = []
      let word = ''
      for(let i=0; i<arr.length; i++){
          if(arr[i].match(/[|\\/~^:.,;?!&%$@*+\-\(\)\[\]]/)){
              finalArr.push([getIpa(word)])
              finalArr.push([arr[i]])
              word = ''
          } else { 
              word += arr[i]
          }
      }
          finalArr.push([getIpa(word)])   
          return finalArr.join('')
  } 


  useEffect(()=> {
      if(texto !== undefined) {
          const arr    = texto.toLowerCase().split(' ')
          const regexp = /[|\\/~^:.,;?!&%$@*+\-\(\)\[\]]/
          let i = 0
          let finalArr = []

          while(i<arr.length) {
              if(regexp.test(arr[i])){
                let a =  fSymbol(arr[i])
                finalArr.push([a])
              } else {
                finalArr.push([getIpa(arr[i])])
              }
              i++
          }

          setTextoIpa(finalArr.join(' ')) 
      }
  },[texto])  

  return (
            <div className="words">
                <p className="texto">{textoIpa}</p>
                <p className="texto">{texto}</p>
            </div>
    )
}


export default TextoIpa;
