//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import store
import './store'
//import Account
import Account from './Account'
import { Form } from './Form';

function App(){
  return(
    <div className='container text-center mt-5'>
      {/* <h1 className='display-4'>Hello Welcome</h1> */}
         <Form/>
    <Account />
 
    </div>
  )
}

export default App;