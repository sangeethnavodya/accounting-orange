import Button from '../Component/Button';
const Cashpr = () => {
    return (  
        <div class='cashsl'>
           
            <div class='cashsl_entry'>
                <h1>Purchase on cash</h1>
                <input type='date'/>
                <input type='text' placeholder='voucher no.'/>
                <input type='text'placeholder='Supplier name'/>
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
                        <input type='text' placeholder='voucher no.'/>
                        <input type='text'placeholder='supplier name'/>
                        <input type='text' placeholder='Discount'/>
                        <input type='text' placeholder='value'/>
                        <Button text='update'/>
                        <Button text='Delete'/>
                    
                </div>
                <div class='query_table'>
                    <div>
                        <div>date</div>
                        <div>voucher no</div>
                        <div>name</div>
                        <div>discount</div>
                        <div>value</div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
 
export default Cashpr;