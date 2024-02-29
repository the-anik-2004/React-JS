import MyFn from "./myReact"
function App() {
  const userName="MR. ANIK PAL"
  return (
    <>
    <h1>React with VITE |{userName}</h1>
    <MyFn/>
    </>
  )
}

/**NOTE:-
 * 
 * 1.In JSX you cannot export more than one component so in case if
 *  you want to export more than one component you have to wrap
 *  it on in the one component.Here you can use relative element to 
 * wrap all the componentsOr you can use "<>...</>" [known as FRAGMENTS]
 * 
 * 2.Evaluated expression-return (<h1>{username}</h1>)
 * It is called evaluated expression because you can't write any javascript code here.
 * You can only evaluated expression. you can only write the code which is preevaluated by the Javascript.
 */

export default App
