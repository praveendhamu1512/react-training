
import React, { useEffect, useRef, useState } from "react";
import './Page.css';
class Eventbind extends React.Component {
    
    constructor() {
        super()
        
        this.state = {

            movie:'The Bat Man'
        }
    }

    changeName = (flim) => {

        this.setState({
            movie:flim
            
        })
     
    }

    render() {

        return <div>
                    <h1> {this.state.movie}</h1>
                    <button onClick={()=>this.changeName('moon knight')}>changeName</button>
                    <Useeffect /><br></br>
                    <Ref />
                    <Obj />
                    <Stopwatch />
                    <Tr/>
                </div>

    }
}

export default Eventbind;

const Useeffect = () => {

    const [values,setValues] = useState([]);
    const [name,setName]= useState();

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setValues([json]))
        
     },[name]
)
    const clickme = ()=> {

        setName("praveen")
    }
    return (    
        <>
              <h3>Use Effect</h3>
            {   
                
                values.map(a => <table className="table-class1" style={{width:"100%", marginTop:"5px"}}>     
                    <tr className="table-class2">
                        <th>Id</th>
                        <th>Title</th>
                        <th>User Id</th>
                       
                    </tr>
                    <tr className="table-class2">
                        <td> {a.id} </td>
                        <td> {a.title} </td>
                        <td> {a.userId} </td>
                        
                    </tr>
                </table>)
            }
            {name}
            <button onClick={clickme}>Click Me </button>
        
        </>
        
        
    )
}

const Ref = ()=> {

    const[input,setInput]=useState('');

    const focus=useRef();
    

    function showDom(){
        
        console.log(focus.current);
    }
    useEffect(()=>{

        focus.current.focus();
    },[])
    
    return(
        <>
        <input type="text"
            ref={focus}
            placeholder="use ref"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
        />
        {input}
        <button onClick={showDom}>show dom</button>
        </>
    )
}


const Obj = ()=> {

    const Objts=[1,2,3,4,5,6,7];

    const objt=Objts.map((obj)=>obj*3);

    

    return(

        <div>
            <h5>{objt}</h5>
        </div>
        
        )
}


function Stopwatch() {
    
    var sec = 0;
    var tenss = 0;
    var interval;

    var appendSeconds=document.getElementById('seconds');
    var appendTens=document.getElementById('tens');
    var buttonStart=document.getElementById('button-start');
    var buttonStop=document.getElementById('button-stop');
    var buttonReset=document.getElementById('button-reset');

     buttonStart=()=> {
    
        clearInterval(interval);
         interval = setInterval(startTimer, 10);
      }
      
        buttonStop=()=> {
           clearInterval(interval);
      }
      
    
      buttonReset=()=> {
         clearInterval(interval);
            tenss = "00";
            sec = "00";
        appendTens.dangerouslySetInnerHTML = tenss;
          appendSeconds.dangerouslySetInnerHTML = sec;
      }
      
       
      
      function startTimer () {
        tenss++; 
        
        if(tenss <= 9) {
          appendTens= "0" + tenss;

        }
        
        if (tenss > 9){
          appendTens.dangerouslySetInnerHTML = tenss;
          
        } 
        
        if (tenss > 99) {

          sec++;
          appendSeconds.dangerouslySetInnerHTML = "0" + sec;
          tenss = 0;
          appendTens.dangerouslySetInnerHTML = "0" + 0;
        }
        
        if (sec > 9){
          appendSeconds.dangerouslySetInnerHTML = sec;
        }
      
      }
      

    
  
    return(
        <div>
            <h5>Stop watch</h5>
            <p><span id="seconds">00</span>:<span id="tens">00</span></p>
            <button id="button-start" onClick={buttonStart}>Start</button>
            <button id="button-stop" onClick={buttonStop}>Stop</button>
            <button id="button-reset" onClick={buttonReset}>Reset</button>
        </div>
    )
}

const Tr=()=>{

    var numbers=[1,2,3,4,5,6,7,8,9,0];

    const lists=numbers.map((number)=>number*2)
    return <div>  
          
        <li>
            {lists}
        </li>
        </div>
}