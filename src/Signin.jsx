import React from "react";

function Signin()
{
return (
<>
<div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">

<div class="modal-dialog" role="document">
<div className="modal-content rounded-4 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2">Signin for free</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          <div data-lastpass-icon-root="true" style={{position: 'relative !important' ,height:' 0px !important', width: '0px !important', float: 'left !important'}}></div></div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          <div data-lastpass-icon-root="true" style={{position: 'relative !important', height:' 0px !important', width: '0px !important', float:'left !important'}}></div></div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Signin</button>
          <small className="text-body-secondary">By clicking Signin, you agree to the terms of use.</small>
          <hr className="my-4"/>
          <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg className="bi me-1" width="16" height="16"></svg>
            Signin with Twitter
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <svg className="bi me-1" width="16" height="16"></svg>
            Signin with Facebook
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg className="bi me-1" width="16" height="16"></svg>
            Signin with GitHub
          </button>
        </form>
      </div>
    </div></div></div>
</>

);

}
export default Signin