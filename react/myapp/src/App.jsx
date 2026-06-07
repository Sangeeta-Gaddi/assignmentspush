
import ProductTab from "./ProductTab.jsx";
//import ProductTab from "./ProductTab";
import MessageBox from "./MessageBox.jsx";
import CardTab from "./CardTab.jsx"
function App(){
  return(
    // <div className="App">
    //   <h1>HEllo World!</h1>
    //   <h2>How are you</h2>
    // </div>

//use empty framgments to group the elemnts ,if u don't want hirerachy(<> </>)
    <>
     {/* <h1>HEllo World!</h1>
      <h2>How are you</h2>
      <ProductTab /> 
      <MessageBox userName="Sangeeta" textColor="Red"/> */}

      <CardTab />
    </>
      
  )
}

export default App;