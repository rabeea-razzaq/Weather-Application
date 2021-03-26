import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import axios from 'axios';
import TableComp from './Table';

class MainPage extends React.Component{
  constructor(){
    super();
    this.state = {
      weatherTarget : '',
      weatherData:{},
      status: false
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(event){
    this.setState({weatherTarget: event.target.value});
  }
   async submitHandler(event){
    event.preventDefault()
    const response= await axios.post('https://fathomless-cliffs-92788.herokuapp.com/get-Weather',{
      weather:this.state.weatherTarget
    });
     
    this.setState({weatherData: response.data,status:true});
    console.log(this.state.weatherData);
  }
  render(){
    let table;
    if(Object.entries(this.state.weatherData).length>0){
      table = <TableComp props={this.state.weatherData} />;
    }
    else{
      table = '';
    }
    return(
      <div className="main-container">
        <div className="main-heading">
          <h1 className="text-white text-center pt-5">Weather Forcast</h1>
          <h6 className="text-white text-center">Know Weather of The Day At Any Time</h6>
        </div>
        <div className="main-body mx-auto">
          <Form className="pt-4" onSubmit={this.submitHandler}>
            <FormGroup>
              <Input type="text" style={{width:'80%',display:"inline"}} onChange={this.changeHandler} value={this.weatherTarget} placeholder="Enter Any City"/>
            </FormGroup>
            <Button type="submit" className="text-muted" style={{backgroundColor:'white'}}>Get Weather</Button>
          </Form>
        </div>
        {table}  
      </div>
    )
  }

}

export default MainPage;


