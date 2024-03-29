/* eslint-disable react/no-unescaped-entities */

const Login = () => {
  return (
    <div className="fromContainer">
      <div className="formWrapper">
          <span className="logo">Chatter</span>
          <span className="title">Login</span>
          <form>
            
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            
            <button>Sign in</button>
          </form>
          <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login