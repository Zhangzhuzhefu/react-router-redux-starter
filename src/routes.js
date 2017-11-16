import React from 'react';
import App from './components/App'
import HomePage from './components/home/HomePage';

const Home = () => <h2>Home</h2>;
const Login = () => <h2>Login</h2>;

const Signup = () => <h2>Signup</h2>;

export const routes = [
    { path: '/',
      component: App
    },
    { path: '/login',
      component: Login
    },
    { path: '/signup',
      component: Signup
    }
  ]
;
