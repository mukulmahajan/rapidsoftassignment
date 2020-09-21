import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import Table from './table';
import Navbar from './Navbar';
import Header from './Header';
import DetailOverview from './DetailOverview';

const Dashboard=(props)=> {
    const[getObject,setGetObject]=useState([]);

    useEffect( ()=>{
        async function fetchData(){

            const config ={
                headers:{
                    'Content-Type': 'application/json'
                }
            };
            const body=JSON.stringify({
                "clientId": 10,
                "dataRecord": {
                  "userRoleId": 4,
                  "userRoleName": "COMPANY",
                  "userId": 10
                },
                "fromDate": 1577888571659,
                "toDate": 1593613371659,
                "tripId": 36
              });
              const res=await axios.post('http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36',body, config);
            
              setGetObject(res.data.data)
        }
        fetchData();
        
    },[]);

    return (
        <div style={{ width:'100%',backgroundColor:'rgb(235, 235, 235)'}}>
            <Header />
            <Navbar />
            {getObject && <DetailOverview Details={getObject} />}
           {getObject.tripDetails && getObject.tripDetails.map((tr,i) =>(
           <Table rowData={tr} key={i} />
           ))}
        </div>
    )
}


export default Dashboard

