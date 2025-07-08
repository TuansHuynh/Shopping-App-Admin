import '../style/login.scss'

export default function Login(){
    return (
        <div className="login">
            <div className="login_form">
                <p>Sign In</p>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Password Confirm" />
                <button>Log In</button>
            </div>
        </div>
    )
}