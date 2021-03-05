import Button from '../Component/Button';
import './route.css';


const Cashsl = () => {
    return (  
        <div class='cashsl'>
           
            <div class='cashsl_entry'>
                <h1>Salas on cash</h1>
                <input type='date'/>
                <input type='text' placeholder='invoice no.'/>
                <input type='text'placeholder='name of the customer'/>
                <input type='text' placeholder='Discount'/>
                <input type='text' placeholder='value'/>
                <Button text='Add entry'/>
            </div>
            <div class='query_cashsl'>
                <div class='query_search'>
                    <h2>Query Box</h2>
                    <div>
                        <input type='text' id='query_search' placeholder='invoice no.'/>
                        <Button text='Search'/> 
                    </div>
                </div>
                <div class='query_update'>
                
                        <input type='date'/>
                        <input type='text' placeholder='invoice no.'/>
                        <input type='text'placeholder='name of the customer'/>
                        <input type='text' placeholder='Discount'/>
                        <input type='text' placeholder='value'/>
                        <Button text='update'/>
                        <Button text='Delete'/>
                    
                </div>
                <div class='query_table'>
                    <div>
                        <div>date</div>
                        <div>invoice no</div>
                        <div>name</div>
                        <div>discount</div>
                        <div>value</div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
 
export default Cashsl;