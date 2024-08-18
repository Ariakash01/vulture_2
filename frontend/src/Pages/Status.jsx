import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
const Status = () => {
  return (
    <div className='down'>
    <h5>Appointments</h5>
    <table>
      <thead>
        <tr>
          <span className='space'>Patient  </span>
          <span className='space'>  Date  </span>
          <span className='space'>  Doctor  </span>
          <span className='space'>  Department  </span>
          <span className='space'>  Status  </span>
         
        </tr>
      </thead>
      <tbody> 
    
              <tr >
                <span className='spa'>Abcd S  </span>
                <span className='spa'>12-08-2024  </span>
                <span className='spa'>DR.XYZ </span>
                <span className='spa'>ENT  </span>

                <span className='green spac'>    Accepted  </span>
              </tr>
           
      </tbody>
    </table>


  </div>
  )
}

export default Status