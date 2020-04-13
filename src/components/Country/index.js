import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './Country.module.css'

import {fetchcountries} from '../../api';

const Country = ({handleCountryChange}) => {
    const [fetchCountries,setfetchCountries]=useState([])

    useEffect(()=>{
        const fetchApi=async()=>{
            setfetchCountries(await fetchcountries());
        }


        fetchApi();
    },[setfetchCountries])
    return (  
       <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
       </FormControl>
    )
}

export default Country
