import React from 'react';
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DetailOverview = (props) => {
    return (
        <section className="com" >
            <div style={{ width:'80%',float:'left'}}>
                <div className='Overview-a' style={{ backgroundColor:'rgb(13, 210, 245)'}}>
                    <FontAwesomeIcon icon="truck" className="common1"  />
                    {props.Details.vehicleNo}
                </div>
                <div className='Overview-a' style={{ backgroundColor:'rgb(231, 183, 24)'}}>
                    <FontAwesomeIcon icon="truck"  className="common1" />
                   Total Trips: {props.Details.totalTrips}
                </div>
                <div className='Overview-a' style={{ backgroundColor:'rgb(31, 49, 126)'}}>
                    <FontAwesomeIcon icon="tachometer-alt" className="common1"/>
                    Total KM:{props.Details.totalKm}
                </div>
                <div className='Overview-a' style={{ backgroundColor:'rgba(6, 177, 49, 0.863)'}}>
                    <FontAwesomeIcon icon="clock" className="common1"/>
                    Total Time:{props.Details.totalTime}
                </div>
                <div className='Overview-a' style={{ backgroundColor:'rgba(165, 5, 144, 0.863)'}}>
                    <FontAwesomeIcon icon="clock" className="common1"/>
                    Total Time:{props.Details.totalTripTime}
                </div>
                <div className='Overview-a' style={{ backgroundColor:'rgba(151, 93, 5, 0.863)'}}>
                    <FontAwesomeIcon icon="wallet" className="common1"/>
                   Total Expenses: {props.Details.totalExpences}
                </div>
            </div>
            <div className="com2">
               <FontAwesomeIcon icon="wallet"className="common1"/>
                Other Expenses:{props.Details.otherExpenses}
            </div>
        </section>
    )
}

export default DetailOverview
