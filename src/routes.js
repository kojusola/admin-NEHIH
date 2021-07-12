import React from "react";
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

export const PrivateRoute = ({component:Component,path, ...rest})=>(
  <Route 
    path={path}
      {...rest}
      render ={props=>
        sessionStorage.getItem("accessJWT")?(
          <Component {...props}/>
        ) : (
          <Redirect
          to={{
              pathname:"/",
              state:{from:props.location}
          }}
          />
        )

      }
   />
)

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