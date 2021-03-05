import Button from "../Component/Button"
import FormLogin from "../Component/FormLogin"
import FormReg from "../Component/FormReg"
import {useState} from 'react';
import './route.css';

const Login = () => { 
    return (  
        <div id='login'>
            <FormLogin/>
        </div>        
    );
}
 
export default Login;