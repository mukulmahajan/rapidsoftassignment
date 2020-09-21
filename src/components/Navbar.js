import React,{useState} from 'react'
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAlert } from 'react-alert'

const Navbar = () => {
    const [formData, setFormData]=useState({
        fromDate:'',
        toDate:''
    });
    const {fromDate,toDate}=formData;
    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value});
    const alert = useAlert()
    return (
        <section className="navo" >
            <div className="navb">
                <p style={{ margin:'0'}}><b>Trip Summary</b></p>
                <p style={{ margin:'0',fontSize:'10px'}}>Dashboard/Trip Summary</p>
            </div>

            <div className="navb2" > 

            From 
            
            <input type="date" data-date=""
            data-date-format="DD MMMM YYYY"
            name="fromDate" 
            value={fromDate} 
            onChange={e=>onChange(e)} 
            className="navIn" />

            To

            <input type="date" 
            data-date="" 
            data-date-format="DD MMMM YYYY" 
            name="toDate" 
            value={toDate} 
            onChange={e=>onChange(e)} 
            className="navIn" />
            
            <button className="navbu" onClick={() => {alert.show('Button Pressed!')}}>
                <FontAwesomeIcon icon='search' />
            </button>
            <button className="navbu2" onClick={() => {alert.show('Button Pressed!')}}>
                <FontAwesomeIcon icon='power-off' style={{color:'white'}}/>
                Export
            </button>
                      
            </div>
            

        </section>
    )
}

export default Navbar
