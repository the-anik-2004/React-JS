import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <b>
      <i>it is MyApp Component🎉</i>
    </b>
  )
  /**NOTE:-
   * It is basically JSX file JSX means javascript and html .
   * In react every component use a babble system this bundler
   *  system converts the typical html file into jsx which is in the object format
   */
}
// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:"_blank",
//   },
//   children:'Click me to visit google'
// }

const anotherElement=(
  <a href='https://google.com'>Welcome to google</a>
)

const reactElement=React.createElement(
  'a',
  {href:"https://google.com",
target:'_blank'},
'Click me to visit google🪄'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    //<MyApp />
    /*note:-At the end of the day it is a function so we can declare it in
    link 'MyApp()'---But it is not preferable.*/
  
  // reactElement
  /** ==>As it is a custom made reactElement so we don't exact keys names
   * as a result it fails to render.
  */
  
  // anotherElement
  reactElement //React.createElement()---makes this run as we user the predefined properties

  // </React.StrictMode>,
)
