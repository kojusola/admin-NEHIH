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

export const PrivateRoute = ({component:Component, ...rest})=>(
  <Route 
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
        <PrivateRoute exact path="/admin/draft-article"  component={Drafts} />
        <PrivateRoute exact path="/admin/emails"  component={Emails} />
        <PrivateRoute exact path="/admin/applications" component={Applications} />
        <PrivateRoute exact path="/admin/user-management" component={AdminManagement} />
        <Route exact path="/admin/testimonial" component={Testimonial } />
      </Switch>
    );
  }