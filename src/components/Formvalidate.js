// import React from "react";
// import './form.css';
// import { useState } from "react";

// const FormsValidate=()=> {

//     const [inputs, setInputs] = useState({});

//     const handleChange=(event)=> {

//         const name=event.target.name;
//         const value=event.target.value;
       
//         setInputs(values => ({...values, [name]: value}))


//        console.log(name,value);
//         if(value.card){

//             alert("fields required");
//             console.log(value);
//         }
       
       
//     }

//     const clickme=()=> {

//         console.log("called");
//     }
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         console.log(inputs);
//         console.log("caleed");
//       }
//     return(
//         <div className="container  mt-2">
//           <form onSubmit={handleSubmit}>
//             <div className="card">
//               <div className="card-body row">
//               <label className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 text-des">Card Applied</label>
//               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 was-validated">
//               <input type="text" className="form-control" 
//                 name="card"  
//                 onChange={handleChange} 
//                 value={inputs.card || ""}
//                 required
//                 />
//                   {/* <div>Name is: {inputs}</div> */}
//               <div className="invalid-feedback">Please enter  Card Type.</div>
//               </div>
//             </div>
//             </div>
//             {/* 2nd card */}
//             <div className="card mt-4">
//               <div className="card-body">
//               <div className="text-des d-flex justify-content-between">
//                     <h4>Personal Deatails</h4>
//                     <h4>Note:All fields Required</h4>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3 was-validated">
//                         <label>Title</label>
//                         <input type="text" 
//                             onChange={handleChange}
//                             className="form-control " 
//                             name="title" 
//                             value={inputs.title}
//                             // required
//                         />
//                          <div className="invalid-feedback">Please Enter title</div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>First Name</label>
//                         <input type="text" 
//                             className="form-control" 
//                             onChange={handleChange}
//                             name="fname"
//                             value={inputs.fname}
//                         />
//                         <div className="invalid-feedback">Please Enter First Name</div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Last Name</label>
//                         <input type="text" 
//                             className="form-control" 
//                             onChange={handleChange}
//                             name="sename"
//                             value={inputs.sename}
//                         />
//                          <div className="invalid-feedback">Please Enter title</div>
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3 was-validated">
//                         <label>Mobile Number</label>
//                         <input type="number" 
//                             className="form-control"
//                             onChange={handleChange}
//                             name="mobile"
//                             value={inputs.mobile}
//                             // required
//                         />
//                           <div className="invalid-feedback">Please enter mobile number</div>
//                     </div>
//                     <div className="col-md-4 mb-3 was-validated">
//                         <label>Date of birth</label>
//                         <input type="date" 
//                             className="form-control"
//                             onChange={handleChange}
//                             name="date"
//                             value={inputs.date}
//                             // required
//                         />
//                           <div className="invalid-feedback">Please select date of birth</div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Email</label>
//                         <input type="email"
//                             className="form-control" 
//                             onChange={handleChange}
//                             name="email"
//                             value={inputs.email}        
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3 was-validated">
//                         <label>Gender</label>
//                         <input type="text" className="form-control" 
//                             name="gender"
//                             value={inputs.gender}   
//                             onChange={handleChange} 
//                             // required
//                         />
//                         <div className="invalid-feedback">Please enter gender.</div>
//                     </div>
//                     <div className="col-md-4 mb-3 was-validated">
//                     <label>Maritial Status</label>
//                     <input type="text" className="form-control" onChange={handleChange}

//                             name="maritial"
//                             value={inputs.maritial}
//                             // required
//                         />
//                         <div className="invalid-feedback">Please enter maritial stattus.</div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Emergency Contact Phone</label>
//                         <input type="number" className="form-control"
//                             onChange={handleChange}
//                             name="conpho"
//                             value={inputs.conpho}
//                             // required
//                         />
                        
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3 was-validated">
//                         <label>Emergency Telephone Number</label>
//                         <input type="number" className="form-control" 
//                             onChange={handleChange}
//                             name="telpho"
//                             value={inputs.telpho}
//                             // required
//                         />
//                         <div className="invalid-feedback">Please enter emergency contact number.</div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Passport No</label>
//                         <input type="text" className="form-control"

//                         onChange={handleChange}
//                         name="passport"
//                         value={inputs.passport}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Passport Issued Date</label>
//                         <input type="date" className="form-control" 

//                             onChange={handleChange}
//                             name="issuedate"
//                             value={inputs.issuedate}/>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3">
//                         <label>ID Type</label>
//                         <input type="text" className="form-control passport"
                            
//                             placeholder="Passport"
//                             onChange={handleChange}
//                             name="idtype"
//                             value={inputs.idtype}
//                             disabled
//                         />
            
//                     </div>
//                     <div className="col-md-4 mb-3">
//                     <label>Passport Expiry Date</label>
//                         <input type="date" className="form-control" 

//                             onChange={handleChange}
//                             name="expiry"
//                             value={inputs.expiry}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Country of ID Issued</label>
//                         <input type="text" className="form-control"

//                             onChange={handleChange}
//                             name="countryid"
//                             value={inputs.countryid}
//                         />
                         
//                         </div>
//                 </div>
//                 </div>
//             </div>
//             {/* 3rd card */}
//             <div className="card mt-4">
//               <div className="card-body">
//               <div className="text-des">
//                     <h4>Residential Address</h4>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3">
//                         <label>Address</label>
//                         <input type="text" className="form-control" 

//                         onChange={handleChange}
//                         name="address"
//                         value={inputs.address}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>City</label>
//                         <input type="text" className="form-control" 

//                             onChange={handleChange}
//                             name="city"
//                             value={inputs.city}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>State</label>
//                         <input type="text" className="form-control"
//                             onChange={handleChange}
//                             name="state"
//                             value={inputs.state}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3">
//                         <label>Postal Code</label>
//                         <input type="number" className="form-control"
//                             onChange={handleChange}
//                             name="postal"
//                             value={inputs.postal}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3 was-validated">
//                         <label>Country</label>
//                         <input type="text" className="form-control"
//                             onChange={handleChange}
//                             name="country"
//                             value={inputs.country}
//                             // required
//                         />
//                         <div className="invalid-feedback">Please enter country </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       </div>
//                 </div>
//                 </div>
//             </div>
//             {/* 4th card */}
//             <div className="card mt-4">
//               <div className="card-body">
//               <div className="text-des d-flex justify-content-between">
//                     <h4>Card Malling Address</h4>
//                     <div>
//                     <input type="checkbox"
//                         style={{marginRight:"8px"}}
//                         className="" 
//                         id="validationCustom02"/>
//                     <label>Tick the name as same</label>
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3">
//                         <label>Address</label>
//                         <input type="text" className="form-control" id="validationCustom01"/>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>City</label>
//                         <input type="text" className="form-control" id="validationCustom02"/>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>State</label>
//                         <input type="text" className="form-control" id="validationCustom02"/>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3">
//                         <label>Postal Code</label>
//                         <input type="number" className="form-control" id="validationCustom01"/>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Country</label>
//                         <input type="text" className="form-control" id="validationCustom02"/>
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                       </div>
//                 </div>
//                 </div>
//             </div>
//             {/* 5th card */}
//             <div className="card mt-4">
//               <div className="card-body">
//                 <div className="form-row mt-4">
//                     <div className="col-md-4 mb-3 ">
//                         <label>Nationality</label>
//                         <input type="text" className="form-control" 
//                             onChange={handleChange}
//                             name="national"
//                             value={inputs.national}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                         <label className="mt-5">Passport Bio Page</label>
//                         <div className="was-validated">
//                         <input type="file" className="form-control-file "

//                             onChange={handleChange}
//                             name="bio"
//                             value={inputs.bio}
//                             // required
//                         />
//                         <div className="invalid-feedback">Please select Passport Bio page.</div>
//                         </div>
//                         <label className="mt-5">Selfie with Passport Bio Page(Ensure non-mirror image)</label>
//                         <div className="was-validated">
//                         <input type="file" className="form-control-file"

//                             onChange={handleChange}
//                             name="selfie"
//                             value={inputs.selfie}
//                             // required
//                         />
//                         <div className="invalid-feedback">Please selcet Selfie with Passport Bio Page.</div>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">    
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <label>Digital Signature (Please sign or upload image)</label>
//                         <textarea className="form-control" 

//                             onChange={handleChange}
//                             name=""
//                              rows="3"></textarea>
//                         <input type="file" className="form-control-file mt-5" 

//                             onChange={handleChange}
//                             name="digisign"
//                             value={inputs.conpho}
//                         />
//                         <div className="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             <div className="text-center">
//             <input type="submit" value="NEXT" className="btn btn-warning mt-3 mb-2"></input>
//             </div>
//                 <button onClick={clickme}>click me</button>
//           </form>
//         </div>
//     )

    
// }

// export default FormsValidate;



import { useState } from "react";


function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
export default MyForm;
