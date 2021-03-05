import Button from '../Component/Button';

const Creditpr = () => {
    return (  
        <div class='cashsl'>
           
            <div class='cashsl_entry'>
                <h1>Purchase on Credit</h1>
                <input type='date'/>
                <input type='text' placeholder='invoice no.'/>
                <input type='text'placeholder='Creditor Name'/>
                <input type='text' placeholder='Quantity'/>
                <input type='text' placeholder='Unit price'/>
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
                        <input type='text'placeholder='Creditor'/>
                        <input type='text' placeholder='Quantity'/>
                        <input type='text' placeholder='Unit Price'/>
                        <input type='text' placeholder='Discount'/>
                        <input type='text' placeholder='value'/>
                        <Button text='update'/>
                        <Button text='Delete'/>
                    
                </div>
                <div class='query_table_creditsl'>
                    <div>
                        <div>date</div>
                        <div>invoice no</div>
                        <div>name</div>
                        <div>Quantity</div>
                        <div>Unit Price</div>
                        <div>discount</div>
                        <div>value</div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
<h1>Credit Purchase Page</h1> 

export default Creditpr;