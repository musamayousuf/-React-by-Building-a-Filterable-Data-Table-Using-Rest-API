import React from "react";
import DataTable from "react-data-table-component"; 
import axios from 'axios';
import {useState, useEffect} from 'react';


const CountriesTable = () => {

    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all')
        setCountries(response.data);
  
      }
      catch (error) {
  
        console.log(error);
      }
    };
  
  
  const columns =[
    {
  
      name: "Country Name",
      selector: (row)  => row.name,
  
    },
    {
  
      name: "Country Native Name",
      selector: (row)  => row.nativeName,
  
    },
    {
  
      name: "Country Capital",
      selector: (row)  => row.capital,
  
    },
    {
  
      name: "Country Flag",
      selector: (row)  =>   <img width={50} height= {50} src={row.flag}/>
  
    },
  
  ]
    useEffect(() => {
    getCountries();
    }, [])
  
  


  return 
      <DataTable columns={columns} data ={countries}/>;
  
}

export default CountriesTable