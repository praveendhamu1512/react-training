import React, { Component } from 'react';

class form extends Component {
    
    constructor() {
        super();

        this.state={
            username:"",
            age:" ",
            errmsg:""
        }
    }
    changeValue = (event)=> {

        let n=event.target.name;
        let v=event.target.value;
        let l=v.legnth;
        console.log(l);
        let err=" ";

        if(n==="age") {

            if(v!=="" && !Number(v)) {

                err=<strong> please type number</strong>
            }
        }

        if(n==="username") 
        {
            if(v!=="" && v.legnth<=4) {

                err=<strong>must be more than 5 charactesr</strong>
            }

            console.log(v.legnth);
        }
        console.log(n);
       this.setState({errmsg:err})
        this.setState({[n]:v})
    }

    sumbit=(Event) => {

        alert('your name'  +this.state.username);
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.sumbit}>
                <h5>hello {this.state.name} {this.state.age}</h5>
                Enter your Name : <input type="text" name='username' onChange={this.changeValue}></input><br/>
                Enter your age: <input type="text" name='age' onChange={this.changeValue}></input> {this.state.errmsg}
                <input type="submit"></input>
            </form>
            <Demo />
            </div>
        );
    }
}

const Demo=()=> {
    
    return(
        <div>
            <h4>haiii i am praveen</h4>
            <input type="text"
            name="inputs"
            value="value"
            />
        </div>
    )

}

export default form;   