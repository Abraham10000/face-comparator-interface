import { url } from 'inspector'
import background from '../images/bg-2.jpg' ;
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css';

// La fonction du page Login

export function Login() {
    return (            
<div>
    <div className="limiter">
		<div className="container-login100" style={{backgroundImage : `url(${background})`}}>
			<div className="wrap-login100 p-t-30 p-b-50">
				<span className="login100-form-title p-b-41" style={{color : "#FCAF3B"}}>
					Account Login
				</span>
				<form className="login100-form validate-form p-b-33 p-t-5">

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="username" placeholder="User name"/>
						<span className="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>

					<div className="container-login100-form-btn m-t-32">
					<Link to="/home"><button className='button'><h6>Login</h6></button></Link>
					</div>

				</form>
			</div>
		</div>
	</div>
	<div id="dropDownSelect1"></div>
</div>
    )
}