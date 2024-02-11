import Add from "../../img/addAvatar.png"

const Register = () => {
  return (
    <div className="fromContainer">
      <div className="formWrapper">
          <span className="logo">Chatter</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="Display Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input style={{display:"none"}} type="file" id="file"/>
            <label  htmlFor="file">
               <img src={Add} alt="Add Avatar"/>
               <span> Add an avatar</span>
            </label>
            <button>Sign Up</button>
          </form>
          <p>You dont have an account? Login</p>
      </div>
    </div>
  )
}

export default Register