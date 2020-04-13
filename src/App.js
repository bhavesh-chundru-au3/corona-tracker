import React  from "react";
import './App.css';
import Cards from './components/Cards';
import Chart from './components/Chart';
import Country from './components/Country';

import {fetchData} from './api' 

import coronaimage from './images/coronaimage.png';

class App extends React.Component{
   state={
       data:{},
       country:'',
   }
    async componentDidMount(){
        const fetchedData =await fetchData()
        this.setState({data:fetchedData});
    }

    handleCountryChange=async(country)=>{
       const fetchedData = await fetchData(country);
        //console.log(fetchedData)
    this.setState({data:fetchedData,country:country});
    }

    render(){
        const {data ,country}=this.state;

        return (
        <div className="container">
            <img className="image" src={coronaimage} alt="COVID-19" />
            <Cards data={data} />
            <Country handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/ >
            <p>Above data is real time data which is constantly updated and monitered by W.H.O</p>
        </div>
        )
    }
}
 export default App