// import { useState } from "react";



// const contact = () => {



//   const  change=(event) => {
  
//     const a=event.target.value;
//     console.log("a", a);
//   }
//   return <div>
//     <label>User Id</label>

//     <input type="text" onChange={change}/>

//     <div> {a}</div>
//       </div>
// }

// export default contact;

import React, { useState, useEffect } from "react";

const Counts = () => {

  const [count,setCount]=useState(0);
  const[effectCount,seteffectCount]=useState(0);
  
  const clickme = () => {

    setCount(count+1);

  }

  useEffect ( () => {

    seteffectCount(effectCount+1);
    document.title= + count;
    },[count] )
  return( 
      <div>
        <p>Count : {count} </p>
        <p>effectCount : {effectCount}</p>
        <button onClick={clickme}> Increment </button>    
        <ReactState/>
        <Lifecycle />
      </div>
  )
}

class ReactState extends React.Component {

  constructor() {

    super();

    this.state={

      initialValue:"my name is praveen"
      
    }
  }

  changeValue = () => {

    this.setState({
      initialValue:"Dhamotharan"
    })
  }

  render(){

    return <div>
      <h1>{this.state.initialValue}</h1>
      <button onClick={this.changeValue}> clickme </button>
    </div>
    

  }
  
}

class Lifecycle extends React.Component 
{
  constructor(){
    
    super();
    this.state={

      name:'Mookesh',
      city:'APK'
    }
  }
  componentWillMount() {

    alert('react WillMount');
  }

   changeName = ()=> {

    this.setState({name:'Logesh'});
  }

  render(){
    
    return <div>
        <p> {this.state.name} from {this.state.city}</p>
        <button onClick={this.changeName}>change name</button>
        <button onClick={this.deleteme}>Delete me</button>
      </div>
  }
  componentDidMount(){

    setTimeout(()=>{

      this.setState ({city:"chennai"})
    },5000)
  }
  componentWillUpdate() {

    alert("do you want to update");
  }
  componentDidUpdate() {
    document.getElementById('mydiv').innerHTML="New value updated" + this.state.city;
  }
  deleteme = ()=> {
    this.setState({name:false,city:false})
  }
}

export default Counts;