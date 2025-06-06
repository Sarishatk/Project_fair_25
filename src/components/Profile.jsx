import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);
  const [profileData, setprofileData] = useState({
    username: "", password: "", email: "", github: "", linkedin: "",profile: ""
  })
  const [existingImage, setexistingImage] = useState("")
  const [preview, setPreview] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setprofileData({ ...profileData, username: user.username, password: user.password, email: user.email, github: user.github, linkedin: user.linkedin ,profile: user.profile}
      )
      setexistingImage(user.profile)
    }
  },[])

  useEffect(()=>{
if(profileData.profile){
   setPreview(URL.createObjectURL(profileData.profile))
}else{
  setPreview("")
}
  },[profileData.profile])
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
              src={preview?preview:`${BASE_URL}/uploads/${existingImage}`}
              alt="Profile"
            />
          </label>          <div className="mt-3">
            <input

              type="text"
              className="form-control form-control-lg mb-2 rounded-3"
              placeholder="Username"
              style={{
                border: '1px solid #dee2e6',
                background: '#ffffff',
                color: '#495057'
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-2 rounded-3"
              placeholder="GitHub"
              style={{
                border: '1px solid #dee2e6',
                background: '#ffffff',
                color: '#495057'
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg rounded-3"
              placeholder="LinkedIn"
              style={{
                border: '1px solid #dee2e6',
                background: '#ffffff',
                color: '#495057'
              }}
            />
          </div>
          <div>
            <button
              className='btn btn-success mt-2 w-100 rounded-3 py-2'
              style={{
                background: 'linear-gradient(135deg, #52a447 0%, #2f7a24 100%)',
                border: 'none'
              }}
            >
              Update Profile
            </button>
          </div>

          <style>
            {`
              .form-control::placeholder {
                color: #6c757d !important;
                opacity: 0.8;
              }
              .form-control:focus {
                background: #ffffff;
                border-color: #52a447;
                box-shadow: 0 0 0 0.2rem rgba(82, 164, 71, 0.25);
              }
            `}
          </style>
        </div>
      </Collapse>

    </div>
  );
}

export default Profile;

