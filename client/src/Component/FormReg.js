import Button from "./Button"
import './formreg.css'
import {Link} from 'react-router-dom';
const FormReg =({onClick}) => {
    return (  
        <div>
        <form class='reg'>
            <h2>Register</h2>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Mobile number'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm password'/>
            <div>            
            <Button text='Reister'/>
            <span onClick={onClick}><Link to='/'>Login</Link></span>
            </div>
        </form>
        </div>  
   );
}
 

export default FormReg