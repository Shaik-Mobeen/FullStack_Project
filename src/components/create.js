import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Websites from './websites';

const Create = () => {
   const baseURL = "http://localhost:3000/websites";


  const navigate = useNavigate();

  const [enteredWebsiteName, setWebsiteName] = useState('');
  const [enteredUrl, setUrl] = useState('');


  const websitenameChangeHandler = (event) => {
    setWebsiteName(event.target.value);
  };

  const urlChangeHandler = (event) => {
    setUrl(event.target.value);
  };


  const submitActionHandler = (event) => {
  
    event.preventDefault();

    axios.post(baseURL, {
        name: enteredWebsiteName,
        url: enteredUrl
      })
      .then((response) => {
        alert("Website "+ enteredUrl +" added!");
        navigate("/");
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setWebsiteName('');
    setUrl('');
    navigate("/");

  }
    return(
      <>
       <div className = "container">
                        <div className = "row">
                        <h1>Add a Website</h1>
                            
                                <div className = "card-body">


                                    <form onSubmit={submitActionHandler}>
                                        <div className = "form-group">
                                            <label> Website Name: </label>
                                            <input placeholder="Website Name"  className="form-control" 
                                                value={enteredWebsiteName} onChange={websitenameChangeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> URL: </label>
                                            <input placeholder="URL" className="form-control" 
                                                value={enteredUrl} onChange={urlChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Qualification: </label>
                                            <input placeholder="Qualification" className="form-control" 
                                                value={enteredUrl} onChange={urlChangeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stream: </label>
                                            <input placeholder="Qualification" className="form-control" 
                                                value={enteredUrl} onChange={urlChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Percentage: </label>
                                            <input placeholder="Qualification" className="form-control" 
                                                value={enteredUrl} onChange={urlChangeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <input placeholder="Qualification" className="form-control" 
                                                value={enteredUrl} onChange={urlChangeHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" >Save</button>
                                        <button className="btn btn-danger" onClick={cancelHandler} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>


                               
                            </div>
                        </div>
                        </div>

                        <Websites/>
                        </>
    );
}
export default Create;

