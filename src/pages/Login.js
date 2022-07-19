/*import { useState } from 'react';

export default function Login() {

    const [inputs, setInputs]=useState({});
  
    function handleChange(event) {
      
      const name=event.target.value
      
      const value = event.target.value;

      setInputs(values => ({...values, [name]: value}))
      
    }
  
      const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      if(inputs.username==="p"&&inputs.fullname==="r"&& inputs.email==="a"&&inputs.phonenumber===9524313582)
      alert("hiiiii");
      else{
          alert("wrong user");
      }
    }
  
    return <div>
        <form onSubmit={handleSubmit}>
          <table>
          <tr>
            <td> <label> User Name</label></td>
           <td><input type="text" name="username" value={inputs.username} onChange={handleChange}></input></td> 
            <td><label> Name</label>  </td>
            <td><input type="text" name="name" value={inputs.fullname} onChange={handleChange}></input></td> </tr>
            <tr>
            <td> <label> Email</label>      </td>
            <td><input type="text" name="email" value={inputs.email} onChange={handleChange}></input></td> 
            <td> <label> Phone number</label>      </td>
            <td><input type="text" name="phonenumber" value={inputs.phonenumber} onChange={handleChange}></input></td> 
              <td><button>sumbit</button></td>            
              </tr>
          </table>
          </form>
    </div>
  }  */

  
import { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {

  let history = useNavigate();

  // console.log(history);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.fullname);
    console.log("caleed");
    
    if(inputs.fullname==="praveenkumar" && inputs.username==="praveen15" && inputs.mail==="praveen@gmail.com" && inputs.password==="amazon@123"){
      alert('login sucessfully');
      history('/Apidata');
    }

    else {
      
      alert('wrong user')
      const myWindow = window.open();
      myWindow.document.write("<h1> 404 error</h1>");
      setInputs("");

    }
  }

  return (
    
    <form onSubmit={handleSubmit} className="login">
      <div className="form-design">
    <table>
    <tr>
    <td>Enter your name: </td>
     <td> <input type="text" name="fullname" value={inputs.fullname || ""} onChange={handleChange} required/></td>
     <td>User Name:</td>
     <td><input type="text" name="username" value={inputs.username || ""} onChange={handleChange} required/></td>
     <td> Mail-Id: </td>
     <td> <input type="text" name="mail" value={inputs.mail || ""} onChange={handleChange} required/></td>        
    </tr>
     <tr>
        <td>Enter your PassWord </td>
        <td> <input type="password" name="password" value={inputs.password || ""} onChange={handleChange} required/>
        </td>
        <td></td>
        <td><input type="submit" />
        </td>       
        </tr>
    </table>
  </div>      
    </form>
  )
}


export default Login;