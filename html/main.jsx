var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        };
    }
    
    handleEmailChange=(e)=>{
        this.setState({email:e.target.value})
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value})
    }
    signIn=()=>{
      axios.post('/signin', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });      
    }
    render() {
        return (
          <div>
        <form action="/signin"className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" id="inputEmail" onChange={(e)=>{this.handleEmailChange(e)}}  className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" onChange={(e)=>this.handlePasswordChange(e)} className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={()=>this.signIn()}  type="button"> Sign in
                </button>
            </form>
            <div>
            <Link to="/signup">{'Signup'}</Link>
          </div>
          </div>
        )
    }
}
class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      password:''
    };
   }
  handleNameChange=(e)=>{
    this.setState({name:e.target.value})
  }
  handleEmailChange=(e)=>{
      this.setState({email:e.target.value})
  }   
  handlePasswordChange=(e)=>{
      this.setState({password:e.target.value})
  }
  signUp=()=>{
    axios.post('/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    render() {
        return (
          <div>
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign up</h2>
              <label for="inputName" className="sr-only">Name</label>
              <input type="name" onChange={(e)=>this.handleNameChange(e)} id="inputName" className="form-control" placeholder="Name" required autofocus />
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={(e)=>this.handleEmailChange(e)} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={(e)=>this.handlePasswordChange(e)} id="inputPassword" className="form-control" placeholder="Password" required />
               
              <button className="btn btn-lg btn-primary btn-block" onClick={()=>this.signUp()} type="button">Sign up</button>
            </form>
            <div>
            <Link to="/">{'Signin'}</Link>
          </div>
          </div>
           
        )
      }
  }
ReactDOM.render( <
    Signin / > ,
    document.getElementById('app')
);
ReactDOM.render(
  <Router history={hashHistory}>
      <Route component={Signin} path="/"></Route>
      <Route component={Signup} path="/signup"></Route>
  </Router>,
document.getElementById('app'));