import React from 'react';
import './App.css';
import {  Table} from 'reactstrap';


class TableComp extends React.Component{
    render(){
        console.log(this.props)
        return(
          <div className="result-display mx-auto pt-4 pb-4">
          <h1 className="text-white text-center font-weight-bold temerature">{this.props.props.temperature} º</h1>
         <div className="text-center pb-3">
         <img src={this.props.props.weather_icon} alt="" className="text-center"/>
         <h5  className="text-white text-center font-weight-bold">{this.props.props.weather_description}</h5>
         <span className="text-white text-center font-weight-bold">{this.props.props.location}</span>
         </div>
          <h4 className="text-white text-center">Further Details</h4>
         <Table className="table-content">
             <thead className="text-center">
               <tr >
                 <th>Attributes</th>
                 <th>Description</th>
               </tr>
             </thead>
             <tbody className="text-center">
                <tr>
                    <td>feels Like </td>
                    <td>{this.props.props.feelslike}</td>
                </tr>
                <tr>
                    <td>Wind Speed </td>
                    <td>{this.props.props.wind_speed}m/s</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{this.props.props.humidity}%</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{this.props.props.wind_pressure} Pa</td>
                </tr>
                <tr>
                    <td>Precipitation </td>
                    <td>{this.props.props.precip}%</td>
                </tr>
             </tbody>
         </Table>
        </div>
        )
    }
}
export default TableComp;