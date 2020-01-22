
import axios from "axios";
import React, { useState, Component } from "react";
import useForm from "./useForm";
import validate from "./validationRules";

 const  App = (props)=>  {

  const { values, handleChange, handleSubmit, errors } = useForm(submit, validate);
  const [gender, setGender] = useState("");
  
  

  function submit(){
    
    let data ={
      firstName: values.name,
      lastName: values.lastName,
      email:values.email,
      number:values.number,
      gender:gender,
      dob: `${values.day}-${values.month}-${values.year}`,
      comments: values.comment
    }
   

    axios.post('/', data
    
  )
  .then(function (response) {
    console.log(response);
    
})
.catch(function (error) {
   console.log(error);
   
});


 
    
  }


  
  

 return (
      <>
     <ul className="collapsible">
        <li className="active">
          <div className="collapsible-header">Step 1: Your details</div>
          <div className="collapsible-body">
             <div className="container">
                  <div>
                     <label>First name</label>
                  <input className="browser-default" type="text" name="name" value={values.name || ''} onChange={handleChange}/>
                  {errors.empty && (
                  <p className="is-danger">{errors.empty}</p>

                    )}
                  </div>
                  <div><label>Last name</label>
                  <input className="browser-default" type="text" name="lastName" value={values.lastName || ''} onChange={handleChange}/>
                  {errors.empty && (
                  <p className="is-danger">{errors.empty}</p>

                    )}
                   </div>
                   
                   <div><label>Email</label>
                  <input  className="browser-default" type="text" name="email" value={values.email || ''} onChange={handleChange}/>
                  {errors.email && (
                  <p className="is-danger">{errors.email}</p>

                    )}
                </div>
                  
                 <a id="first"    className="browser-default btn" >Next></a>
                 
             </div>
               
          </div>
          </li>
        <li className="two">              
          <div className="collapsible-header">Step 2: More comments</div>
          <div className="collapsible-body">
            <div className="container">
                   <div>
                   <label>Telephone number</label>
                <input className="browser-default" type="text" name="number" value={values.number || ''} onChange={handleChange}/>
                { errors.number && (
                  <p className="is-danger">{errors.number}</p>

                    )}
                </div>
                <div>
                    <label >Gender</label>
                    <select onClick={(e)=>setGender(e.target.value)} className="browser-default">
                        <option value="male">M</option>
                        <option value="female">F</option>
                        <option value="not_specified">Prefer not to say</option>
                        
                      </select>
            </div>
                 
                 <div>
                <label >Date of birth</label>
                <div className="dob">
                    <input  className="browser-default" type="text" name="day" value={values.day || ''} onChange={handleChange}/>
                    
                  
                    <input className="browser-default" type="text" name="month" value={values.month || ''} onChange={handleChange}/>
                    
                    <input className="browser-default" type="text" name="year" value={values.year || ''} onChange={handleChange}/>
                   
                </div>
                <div>
                {errors.dob && (
                  <p className="is-danger">{errors.dob}</p>

                    )}
                </div>
                

              </div>
                
              <a id="second"   className="browser-default btn" >Next></a>
            </div>
            
           
                
          </div>
        </li>
        <li className="three">
          <div className="collapsible-header">Step 3: Final comments</div>
          <div className="collapsible-body">
            <div className="container">

                 <div>
                   <label  >Comments</label>
                   <textarea name="comment" value={values.comment || ''} onChange={handleChange}   cols="30"></textarea>
                </div>
               <a id="third" onClick={handleSubmit} type="submit" className="browser-default btn">Next></a>
            </div>
            
             
               
          </div>
          
        </li>
      </ul>
      </>
    );
  
}

export default App;
