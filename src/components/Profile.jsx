import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
useState
function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: '500px', height: '400px' }} className="container-fluid   p-4 mb-2 me-2">
      <div className="d-flex justify-content-between">
        <h2 className='overflow-hidden'>MY Profile</h2>
        <button onClick={() => setOpen(!open)} className="btn btn-outline-info">
        <i className="fa-solid fa-chevron-down overflow-hidden"></i>
        </button>
                                                                                                                                                                                                                                                                                 
        </div>
       <Collapse in={open}>
          <div className="row justify-content-center mt-2">
            {/* Upload profile */}
            <label className="text-center">
              <input style={{ display: 'none' }} type="file" />
              <img
                style={{ height: '200px', width: '200px' }}
                src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
                alt="Profile"
              />
            </label>
            <div className="mt-3">
              <input type="text" className="form-control mb-2" placeholder="Username" />
              <input type="text" className="form-control mb-2" placeholder="GitHub" />
              <input type="text" className="form-control" placeholder="LinkedIn" />
            </div>
            <div>
            <button className='btn btn-success mt-2 w-100'>Update</button>
            </div>
          </div>
       </Collapse>

    </div>
  );
}

export default Profile;

