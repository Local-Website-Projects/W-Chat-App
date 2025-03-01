import React from "react";
import {Link} from "react-router-dom";
function PasswordReset() {
    return (
        <>
            <div className="main-layout card-bg-1">
                <div className="container d-flex flex-column">
                    <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <h1 className="font-weight-bold">Password Reset</h1>
                            <p className="text-dark mb-3">Enter your email address to reset password.</p>
                            <form className="mb-3">
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <input type="email" className="form-control form-control-md" id="email"
                                           placeholder="Enter your email"/>
                                </div>
                                <button
                                    className="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold"
                                    type="submit">Send Reset Link
                                </button>
                            </form>
                            <p style={{color:'#fff'}}>Already have an account? <Link className="font-weight-semibold" to="/Login">Sign
                                in</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordReset