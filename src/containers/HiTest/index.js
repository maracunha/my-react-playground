import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function HiTest() {

  const [name, setName] = useState('')
  const [index, setIndex] = useState('')
  const [level, setLevel] = useState('')

  useEffect(() => {
    const result = fetch('https://raw.githubusercontent.com/HiPlatform/prova-frontend/master/data.json')
      .then(response => response.json())
      .then(names => parseNames(names))
      .catch(error => console.error(error))

      
    }, []);

  const parseNames = (names) => {

    for (let index in names) {
      let position = names[index]
      let level = `${position.level}.${index}`;
      // let name = typeof(position) === 'string' ? position : position.name;
      let name = position.name;
      // console.log('level', level);
      // console.log('name', name);
      // console.log(typeof(name))

      // templateCreator(index, name, level)

      // Calls a function which does similar to this for the children
      if(position.children) {
        parseNames(position.children)
      }
    }
  }

  // const templateCreator = (index, name, level) => {
    
  //   return (
  //     <>
  //       <input type="checkbox" id={level} value={index} name={name}/>
  //       <label for={level}>{name} </label> 
  //     </>
  //   )
  // }

 return(
  <>
    <h1>Coisa linda!!</h1>
    {/* <input type="checkbox" id={level} value={index} name={name}/>
    <label htmlFor={level}>{name} </label>  */}
  </>
  )

}

export default HiTest;
