import './App.css'
import PropsRecap from './components/PropsRecap'
import PropDrilling from './components/PropDrilling';
import ContextAPII from './components/ContextAPII';
import UpdateValues from './components/UpdateValues';
import { GlobalContext } from './components/GlobalContext';

function App(){
  return(
    <div className='container py-4' style={{maxWidth:600}}>
      <h2 className='text-center mb-4 text-primary'>React Context</h2>
      <div className='card p-4 mb-4'><PropsRecap /></div>
      <div className='card p-4 mb-4'><PropDrilling/></div>
      <div className='card p-4 mb-4'><ContextAPII/></div>
      <div className='card p-4 mb-4'><UpdateValues/></div>
      <div className='card p-4 mb-4'><GlobalContext/></div>
      
      
    </div>
  )
}

export default App;