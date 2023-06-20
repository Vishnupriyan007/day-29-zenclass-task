import React from 'react'

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
     Tech Company
          </a>
          <span className="text-muted">© 2022 Tech Company, Inc.</span>
        </div>

        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#" style={{ fontSize: '30px' }}>
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#" style={{ fontSize: '30px' }}>
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#" style={{ fontSize: '30px' }}>
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </li>
        </ul> */}

          <div className='Footer'>
          <a href = 'https://github.com/Jagadeesh-Kumar-Initial-Is-S' target = '_blank' >Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</a>
          </div>
      </footer>
    </div>
  )
}

export default Footer