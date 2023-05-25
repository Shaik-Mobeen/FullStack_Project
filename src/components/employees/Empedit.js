import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Empedit() {
    
    const {empid} = useParams();

    // const[empdata,empdatachange] = useState({});
    const[id,idchange] =useState("")
    const[name,namechange] =useState("")
    const[email,emailchange] =useState("")
    const[phone,phonechange] =useState("")
    const[active,activechange] =useState(true)


    const navigate=useNavigate();
   //    handle submit function
      const handlesubmit = (e)=>{
          e.preventDefault();
      const empdata={id,name,email,phone,active};
       fetch("http://localhost:8000/employee/"+empid,{
method :"PUT",
headers:{"content-type":"application/json"},
body: JSON.stringify(empdata)
       }).then((res)=>{
           alert('Saved Successfully') ;
           navigate('/');
       }).catch((err)=>{
          console.log(err.message); 
       })
      }


  useEffect(() => {
      fetch("http://localhost:8000/employee/"+empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.active)
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, []);
  
    
    return (
        <div>
           <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{textAlign:"left"}}>
              <div className="card-title">
                <h2> Employee Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>Id</label>
                        <input value={id} disabled ="disabled"  className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input required value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>email</label>
                        <input  value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>Phone</label>
                        <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                       <input type="check-box" className="form-check-input"></input>
                       <label  checked={active} onChange={e=>activechange(e.target.checked)} className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Save</button>
                        <Link to="/" className="btn btn-danger">Back </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}

export default Empedit
