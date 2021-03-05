import './navbar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Navbar = () => {

    const [sales,setSales]=useState('');
    const [purchase,setPurchase]=useState('');

    const saleslink=(e)=>
    {
        switch(e.target.value)
        {
            case 'Sales on cash':
                setSales('/cash.sale');
                break;
            case 'on credit':
                setSales('/credit.sale');
                break;
            case 'Sales return':
                setSales('/sales.return');
                break;
        }
    }

    const purchaselink=(e)=>
    {
        switch(e.target.value)
        {
            case 'cash Purchase':
                setPurchase('/cash.purchase');
                break;
            case 'on credit':
                setPurchase('/credit.purchase');
                break;
            case 'Purchase return':
                setPurchase('/purchase.return');
                break;
        }
    }

    return (
        <div className='nav-div'>
        <h1 className='main-title'>Accountina</h1>  
        <nav>
        <Link to='/home'><span>Home</span></Link>
            <span><Link to={sales}><select onChange={(e)=>saleslink(e)}>
                    <option>Sales</option>
                    <option>Sales on cash</option>
                    <option> on credit</option>
                    <option>Sales return</option>
                </select></Link></span>
                <span><Link to={purchase}><select onChange={(e)=>purchaselink(e)}>
                    <option>Purchase</option>
                    <option>cash Purchase</option>
                    <option>on credit</option>
                    <option>Purchase return</option>
                </select></Link></span>
                <Link to='/'> <span class='spanlink'>Login</span> </Link>
        </nav>
        </div>
    );
}
 
export default Navbar;
