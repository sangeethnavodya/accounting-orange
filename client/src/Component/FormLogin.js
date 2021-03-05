import Button from "./Button"
import './formlogin.css'
import {Link} from 'react-router-dom';


const FormLogin =() => {
    return (  
        <div>
        <form>
            <h2>Login</h2>
            <input type='text' placeholder='email or username'/>
            <input type='password' placeholder='Password'/>
            <div>            
            <Button text='Login'/>
            <span><Link to='/register'>Register</Link></span>
            </div>
        </form>
        </div>

     
   );
}
 

export default FormLogin