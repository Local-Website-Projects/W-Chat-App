import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const userLogin = (e) => {
        e.preventDefault();
        const url = '/api/user_login.php';
        let fData = new FormData();
        fData.append('email', email);
        fData.append('password',password);
        axios.post(url,fData).then(response => {
            if(response.data.status === 'Success'){
                localStorage.setItem("userToken", response.data.token);
                navigate("/");
            }
            else{
                alert(response.data.message);
            }
        })
            .catch(error => {
                console.error('Error:',error);
                alert('Network error occurred');
            })
    }

    return (
        <>
            <div className="main-layout card-bg-1">
                <div className="container d-flex flex-column">
                    <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <h1 className="font-weight-bold">Sign in</h1>
                            <p className="text-dark mb-3">We are Different, We Make You Different.</p>
                            <form className="mb-3" action="#" onSubmit={userLogin}>
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <input type="email" className="form-control form-control-md" id="email"
                                           placeholder="Enter your email" value={email}
                                    onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" className="form-control form-control-md" id="password"
                                           placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="form-group d-flex justify-content-end">
                                    <Link className="font-size-sm" to="/Password-Reset">Reset password</Link>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                                        type="submit">Sign in
                                </button>
                            </form>

                            <p style={{color:'#fff'}}>Don't have an account? <Link className="font-weight-semibold" to='/SignUp'>Sign up</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login