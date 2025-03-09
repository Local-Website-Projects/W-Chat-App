import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Signup () {
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [marketplace, setMarketplace] = useState('');

    const [success, setSuccess] = useState(false)
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if(value.length < 8){
            setValidPassword(false);
        } else
            setValidPassword(true);
    };

    const handleSignupSubmit = (e) => {
        const url = '/api/user_signup.php';
        let fData = new FormData();
        fData.append('name', name);
        fData.append('phone', phone);
        fData.append('email', email);
        fData.append('marketplace', marketplace);
        fData.append('password', password);

        axios.post(url,fData).then(response => {
            setName('');
            setPhone('');
            setEmail('');
            setMarketplace('');
            setPassword('');
            if(response.data.status === 'Success'){
                setSuccess(true);
            }
            if(response.data.status === 'error'){
                alert(response.data.message);
            }
        })
            .catch(error => {
                console.error('Error:',error);
                alert('Network error occurred');
            })


    };

    const handleAlert = () =>{
        setSuccess(false);
    }

    return (
        <>
            <div className="main-layout card-bg-1">
                <div className="container d-flex flex-column">
                    {success && (
                        <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                            <strong>Congratulation!</strong> Your account is created successfully. Please check your
                            email and activate your account.
                            <button type="button" className="close" onClick={handleAlert}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    )}

                    <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <h1 className="font-weight-bold">Sign up</h1>
                            <p className="text-dark mb-3">We are Different, We Make You Different.</p>
                            <form className="mb-3" action="#" onSubmit={(e) => {
                                e.preventDefault();
                                handleSignupSubmit();
                            }}>
                                <div className="form-group">
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input type="text" className="form-control form-control-md" id="name"
                                           placeholder="Enter your name" autoComplete="off" required={true} value={name}
                                           onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="sr-only">Contact Number</label>
                                    <input type="text" className="form-control form-control-md" id="name"
                                           placeholder="Enter your contact number" autoComplete="off" required={true}
                                           value={phone}
                                           onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <input type="email" className="form-control form-control-md" id="email"
                                           placeholder="Enter your email" autoComplete="off" required={true}
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="sr-only">Marketplace</label>
                                    <input type="text" className="form-control form-control-md" id="name"
                                           placeholder="Enter marketplace name" autoComplete="off" required={true}
                                           value={marketplace}
                                           onChange={(e) => setMarketplace(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" className="form-control form-control-md" id="password"
                                           placeholder="Enter your password" value={password}
                                           onChange={handlePasswordChange} required={true}/>
                                    {!validPassword && (
                                        <span style={{fontSize: "12px", color: "red"}}>Minimum length of the password is 8 character.</span>
                                    )}
                                </div>
                                <button className="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                                        type="submit" disabled={!validPassword}>Sign up
                                </button>
                            </form>

                            <p style={{color: '#FFF'}}>Already have an account? <Link className="font-weight-semibold"
                                                                                      to="/Login">Sign
                                in</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup