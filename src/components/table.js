import React ,{useState}from 'react';
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAlert } from 'react-alert'

const Table = (props ) => {
  const [displayTable, toggleTable]=useState(true);


const alert = useAlert()
    return (
    <section className="tab">
        <div className="tab1">
          <div className="tab2">
            Date: {props.rowData.startDay}
          </div>
          <div className="tab3" >
            Total KM:{props.rowData.dailyRunningTime}
          </div>
          <div style={{ width:'20%',float:'right' }}>
          <FontAwesomeIcon icon="minus" onClick={()=>toggleTable(!displayTable)} className="tab4"/>
         </div>
        </div>
           
      {displayTable && <table className="table-o">
        <thead  className="table-h">
          <tr>
          <th>#</th>
            <th>Trip Starts(Node) to Trip Ends(Node)</th>
            <th>Driver Name</th>
            <th>Trip Expenses</th>
            <th>Trip Km</th>
            <th>Trip GPS Km</th>
            <th>Trip Time</th>
            <th>Odometer Reading</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody className="table-b">
          { props.rowData.tripLists && props.rowData.tripLists.map( (trip, i) => {
            
             return (
              <tr key={ i}>
                <td>{i+1}</td>
                <td>{ trip.startPointNode }
                <FontAwesomeIcon icon="long-arrow-alt-right" style={{ color:'rgb(13, 210, 245)'}} />
                {trip.endPointNode}</td>
                <td>{ trip.driverName }</td>
                <td>Rs. {
                  trip.tripExpenses.length>0?  trip.tripExpenses.map((tripp,j)=>{
                    return tripp.amount
                   
                 }): '0'
                  }
                <FontAwesomeIcon icon="info-circle" style={{ color:'rgb(13, 210, 245)',float:'right'}}/></td>
                <td>{trip.totalKm}</td>
                <td>{trip.gpsDistance}</td>
                <td>{trip.tripRunningTime}</td>
                <td>{!trip.startODOMeter ? 'NA':trip.startODOMeter}
                <FontAwesomeIcon icon="long-arrow-alt-right" style={{ color:'rgb(13, 210, 245)'}} />
                {!trip.endODOMeter? 'NA':trip.endODOMeter}</td>
                <td><button className="tablebutton" 
                onClick={() => {alert.show('Button Pressed!')}}>
                   movement report</button>
                <button className="tablebutton"
                onClick={() => {alert.show('Button Pressed!')}}>
                  stoppage report</button></td>
 
              </tr>
            )
           }) }
        </tbody>
      </table>
      
}</section>
     
      
    );
  }
  export default Table;
  