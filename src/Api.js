import React, { useEffect, useState } from "react";
import "./App.css";

import Button from '@mui/material/Button';



const Api = (props) => {
  const [loader, setloader] = useState(true);
  const [apidata, setapiData] = useState([]);
  const [btnData,setbtnData]=useState(false)
  
  
  

  const getapiData = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${props.firstvalue === '' ? 'student' : props.firstvalue }&apikey=cedb3c4d`
    );
    const data = await response.json();
    setapiData(data.Search);

    setTimeout(() => {
      setloader(false);
    }, 400);
  };

  

  useEffect(() => {
    getapiData();
  },[props.firstvalue]);

   const onclicktoshow=(showData)=>{
     const newlist = apidata.find((id)=>{
      
      return( id.imdbID===showData)
     })
    //  console.log( 'abc',newlist);
    //  console.log( 'abc',showData);
     setbtnData(newlist);
   } 

  if (loader) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
       
      </>
    );
  }
  return (
    <div className="mt-4">
     
 <div
 className="container px-5 py-3 "
 style={{ backgroundColor: "ghostWhite" }}
>
{!btnData?(
 <div className="row d-flex justify-content-center align-item-center">
  
  

   {apidata?.length ? ( 
     apidata.map((element, index) => {
       return (
         
           <div key={index} className="col-md-4 px-5 mt-3 ">
             <div
               className="card mx-4 movie-card "
               style={{ width: "100%" }}
             >
               <img
                 src={element.Poster}
                 className="card-img-top"
                 alt="..."
                 height="200px"
               />
               <div className="card-body">
                 <h6 className="card-title ">{element.Title}</h6>
                 <div className=" py-2 d-flex justify-content-center align-item-center">
                  
                  
                 </div>
                 <Button className="btn btn-danger mr-auto" variant="contained" onClick={()=>onclicktoshow(element.imdbID)}>Info</Button>
               </div>
             </div>
           </div>
         
       );
     })
   ) : (
     <h2>Sorry No Movie Found</h2>
   )}
 </div>

     ):(
     
     <div className="card mb-3 mx-auto" style={{ maxWidth: 900 }}>
     <div className="row no-gutters">
       <div className="col-md-4">
         <img src={btnData.Poster} alt="..." />
       </div>
       <div className="col-md-8">
         <div className="card-body">
           <h2 className="card-title py-3">{btnData.Title}</h2>
           <h4 className="card-text py-2">
            Year of  Releasing : {btnData.Year}
           </h4>
           <h5 className="card-text pb-2">
            Movie ID :  {btnData.imdbID}
            
           </h5>
           <h6 className="card-text pb-2">
            Type : {btnData.Type}
            
           </h6>
           <Button variant="contained">Go Back</Button>
          
         </div>
       </div>
     </div>
   </div>
   
   
   )}
   </div>
    </div>
  );
};

export default Api;
