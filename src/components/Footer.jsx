import React from 'react'
import '../App.css';

const Footer = () => {
  //  const footericon=({isActive})=>{
  //   // return {
  //   //   fontWeight: isActive ? "bold" : "normal",
  //   //   color: isActive ? "red" : "#282c34",
  //   //   //  backgroundColor: isActive ? 'light':'dark',
  //   //   textDecoration: isActive ? "underline" : "none",
  //   // };

  //  }
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
          <h1 className="heading">Movies</h1>
          {/* <img src='../flogo.jpg'/> */}
          </div>
          <div className='col-md-6'>
            <h5>Follow us</h5>
            <ul className="list-group" style={{listStyle:'none'}}>
              <li >
              <a href='/' ><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
              </li>
              <li >
              <a href='/' ><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
              <li >
              <a href='/' ><i className="fa fa-youtube-square" aria-hidden="true"></i>
</a>
              </li>
            </ul>
           
            

          </div>
          <div className='col-md-4'>
            <input type='email'  name='email' placeholder='E-mail'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
