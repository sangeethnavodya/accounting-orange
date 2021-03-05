import ReactDOM from 'react-dom';
import Navbar from './Component/Navbar'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './routs/Home';
import Cashsl from './routs/Cashsl';
import Login from './routs/Login';
import Creditsl from './routs/Creditsl';
import Cashpr from './routs/Cashpr';
import Salesre from './routs/Salesre';
import Purchasere from './routs/Purchasere';
import Creditpr from './routs/Creditpr';
import Register from './routs/Register';

//hello


const App = () => {

return(
    <div>
        
        <Router>
            <Navbar/>  
            <Route  path='/home'><Home/></Route>

       
            <Route exact path='/'><Login/></Route>
            <Route path='/register'><Register/></Route>
    
            <Route path='/cash.sale'><Cashsl/></Route>
        
        
            <Route path='/credit.sale'><Creditsl/></Route>
   
            <Route path='/cash.purchase'><Cashpr/></Route>

            <Route path='/sales.return'><Salesre/></Route>

            <Route path='/purchase.return'><Purchasere/></Route>
 
            <Route path='/credit.purchase'><Creditpr/></Route>
        </Router>

    </div>
)

}

export default App;