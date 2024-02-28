import MyFn from "./myReact"
function App() {

  return (
    <>
  
    <h1>React with VITE | Anik Pal</h1>
    <MyFn/>
    </>
  )
}

/**NOTE:-In JSX you cannot export more than one component so in case if you want to export more than one component you have to wrap it on in the one component.
 * Here you can use relative element to wrap all the components
 * Or you can use "<>...</>" [known as FRAGMENTS]
 * 
 */

export default App
