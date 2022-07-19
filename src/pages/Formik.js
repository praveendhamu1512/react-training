import React, { useState } from 'react';
import { Formik, useFormik  } from 'formik';
import './Formik.css';

const validate = values => {

    const errors = { };
    
    if(!values.firstName) {

        errors.firstName="*Required"
        
    }
    else if(values.firstName.length > 5) {
        errors.firstName="*Must be 5 Characters or less"
    }
    if(!values.lastname) {
        errors.lastname="*Required"
    }
    else if(values.lastname.length > 5) {
        errors.lastname="*Must be 5 Characters or less"
    }
    if(!values.mail) {
        errors.mail="*Required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.mail)) {


        errors.mail="*Invalid Email Address";
    }
    
    else {

    }
    if(!values.mobile) {

        errors.mobile="*Required"
    }

    else if(values.mobile.length !== 10) {

        errors.mobile="*Must be 10 Numbers";
        
    }
    
    if(!values.newPassword) {
        errors.newPassword="*Required"
    }
    // else if(values.newPassword.length > 8) {
    //     errors.newPassword="*Maximum 8  Characters";
    // }
    // else if(values.newPassword.length < 8) {
    //     errors.newPassword="*Minimum 4  Characters";
    // }

    else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.newPassword)) {

        errors.newPassword="Must Maximum 8 characters , one lower case, one Upper case, one number";
    }
    

    if(!values.conformpassword) {

        errors.conformpassword="*Required";
    }
    else if(values.newPassword !== values.conformpassword) {
        errors.conformpassword="*password Must Match";
    }
    return errors;
}
const SignUp = () => {

    const handle =() => {

        localStorage.setItem("FirstName", formikForm.values.firstName);
        localStorage.setItem("Last Name", formikForm.values.lastname);
        localStorage.setItem("mail", formikForm.values.mail);
        localStorage.setItem("mobile", formikForm.values.mobile);
        localStorage.setItem("gender", formikForm.values.gender);
        localStorage.setItem("newPassword", formikForm.values.newPassword);
        localStorage.setItem("conform password", formikForm.values.conformpassword);
    }

    const formikForm = useFormik({
        
        initialValues : {
        firstName:'',
        lastname:'',
        mail:'',
        mobile:'',
        gender:'',
        newPassword:'',
        conformpassword:'',
        },
        validate
    });

    console.log(formikForm.values);

    return (
    <div className='form-align'>
        <div>
            <h2>SignUp here</h2>
        </div>
        <Formik>
        <form>
            <input 
                id="firstName" 
                name="firstName" 
                type="text"
                onChange={formikForm.handleChange} 
                onBlur={formikForm.handleBlur} 
                value={formikForm.values.firstName}
                className="form-class-1"
                placeholder='First_Name'
            /> <br></br>

            {
                formikForm.touched.firstName && formikForm.errors.firstName ? (
                <div>{formikForm.errors.firstName}</div>) : null
            } <br></br>

            <input type="text" 
                placeholder="Last_Name" 
                name='lastname'onChange={formikForm.handleChange} 
                value={formikForm.values.lastname} 
                onBlur={formikForm.handleBlur }
                className="form-class-1"    
            /> <br></br>

            {
                formikForm.touched.lastname && formikForm.errors.lastname ? (
                <div>{formikForm.errors.lastname} </div>) : null
            } <br></br>
            <input type="email" 
                placeholder="some@example.com" 
                name='mail' 
                onChange={formikForm.handleChange} 
                value={formikForm.values.mail} 
                onBlur={formikForm.handleBlur}
                className="form-class-1"
            />  <br></br>
            {
                formikForm.touched.mail && formikForm.errors.mail ? (
                <div>{formikForm.errors.mail} </div>) : null
            } <br></br>
            <input 
                type="number" 
                placeholder='9876545678' 
                name='mobile' 
                onChange={formikForm.handleChange} 
                value={formikForm.values.mobile}
                onBlur={formikForm.handleBlur} 
                className="form-class-1"
            />   <br></br>
              {
                formikForm.touched.mobile && formikForm.errors.mobile ? (
                <div>{formikForm.errors.mobile} </div>) : null
            } <br></br>

            <label>Gender</label>
            <input type="radio"
                name="gender" 
                value="Male" 
                onChange={formikForm.handleChange}
                
                
            />
            <label>Male</label>
            <input type="radio"
                name="gender" 
                value="Female" 
                onChange={formikForm.handleChange}
               
            />
            <label>Female</label> <br></br>
            <input type="password" 
                value={formikForm.values.newPassword} 
                placeholder='New Password' 
                name='newPassword' 
                onChange={formikForm.handleChange}
                onBlur={formikForm.handleBlur} 
                className="form-class-1"
            /><br></br>
            {
                formikForm.touched.newPassword && formikForm.errors.newPassword ? (
                <div>{formikForm.errors.newPassword} </div> ) : null
            } <br></br>

            <input type="password" 
                value={formikForm.values.conformpassword} 
                placeholder='Confirm Password' 
                name='conformpassword' 
                onChange={formikForm.handleChange}
                onBlur={formikForm.handleBlur} 
                className="form-class-1"
            /> <br></br>
            {
                formikForm.touched.conformpassword && formikForm.errors.conformpassword ? (
                <div>{formikForm.errors.conformpassword} </div>) : null
            } <br></br>
            <input type="submit" onClick={handle}></input><br></br>
        </form>
        </Formik>
        <Login />
    </div>
    )
}

const Login = () => {

    const [inputs, setInputs]=useState({});
    
    

    const handleChange = (event) => {

        const name =event.target.name;
        const value =event.target.value;
      
        setInputs(values=>({...values , [name]: value}))
      
    }

    

    const handleSubmit = (event) => {

        event.preventDefault();
       console.log(inputs);

        // for (var [key, value] of Object.entries(localStorage)) {

        //         console.log(`${key}: ${value}`);
                
                
        // }

        
        let mailId = JSON.stringify(localStorage.getItem('mail'));
        let password = JSON.stringify(localStorage.getItem('newPassword'));

        console.log(mailId)
        console.log(password)
        

        if(inputs.mail!==mailId && inputs.password!==password) {

            alert('wrong user')
            console.log(mailId)
        }
        else {

            alert("login sucess")
            console.log(mailId);
            console.log(password);
        }

        
    }
    return(

        <div>
            <form onSubmit= {handleSubmit}>
            <input type="mail" 
                    placeholder='your mail Id' 
                    name='mail' 
                    value={inputs.mail || ""} 
                    onChange={handleChange}
                />
                <input type="password" 
                        placeholder='password' 
                        name='password' 
                        value={inputs.password || ""} 
                        onChange={handleChange} 
                    />
                <input type="submit"></input>
            </form>
                
        </div>
    )
}
export default SignUp;

