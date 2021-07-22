import React, {useState, useEffect} from "react";
import { Route, Switch, Redirect } from "react-router";
import PublishedBlog from './pages/PublishedBlog';
import Drafts from './pages/Drafts';
import Emails from './pages/Emails';
import Applications from './pages/Applications';
import createArticle from './pages/createBlog';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import AdminManagement from './pages/AdminManagement';
import Testimonial from './pages/testimonial';
import auths from './store/token';
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({component:Component,path, ...rest})=>{
  const auth = auths();
  const [isAuthenticated, setIsAuthenticated] = useState(null)  
  useEffect(() => {
    let token = localStorage.getItem('accessJWT')
        if(token){
            let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }else{
                setIsAuthenticated(true)
            }
        } else {
           setIsAuthenticated(false)
        }
  }, [auth])
  if(isAuthenticated === null){
    return <></>
  }
return (
  <Route 
  path={path}
    {...rest}
    render ={props=>
      isAuthenticated?(
        <Redirect
        to={{
            pathname:"/",
            state:{from:props.location}
        }}
        />
      ) : (
        <Component {...props}/>
      )

    }
 />
)
}

export default function Body() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={CreateUser} />
        <PrivateRoute exact path="/admin"  component={PublishedBlog} />
        <PrivateRoute exact path="/admin/create-article"  component={createArticle} />
        <PrivateRoute  path="/admin/draft-article"  component={Drafts} />
        <PrivateRoute path="/admin/emails"  component={Emails} />
        <PrivateRoute  path="/admin/applications" component={Applications} />
        <PrivateRoute  path="/admin/user-management" component={AdminManagement} />
        <PrivateRoute   path="/admin/testimonial" component={Testimonial } />
      </Switch>
    );
  }