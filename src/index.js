import { login } from './login';
import { signup } from './signup';
import axios from 'axios';
import * as blogview from './blogview';
import * as userview from './userview';
import * as usrview from './usrview';

import Blogs from './blog';
import Users from './getusers';
import User from './getuser';

import { user } from '../controller/viewcontroller';

const loginForm = document.querySelector('.login-form');
const users = document.querySelector('.allusers');
const profile = document.querySelector('.profile');
const refresh = document.querySelector('.d2');

const signupForm = document.querySelector('.signup-form');
const blogss = document.querySelector('.head1');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordmatch = document.getElementById('passwordmatch').value;
    signup(name, email, password, passwordmatch);
  });
}

const blogloder = async obj => {
  await obj.getblogs();
  try {
    blogview.renderblogs(obj.result);
  } catch (error) {
    console.log(error);
  }
};

const usersloader = async obj => {
  try {
    await obj.getusers();
    console.log(obj.result.data);
    userview.renderusers(obj.result.data.users);
  } catch (error) {
    console.log(error);
  }
};
const userloader = async obj => {
  try {
    await obj.getuser();
    usrview.renderuser(obj.result.data.user);
  } catch (error) {
    console.log(error);
  }
};
if (blogss) {
  const blg = new Blogs();
  blogloder(blg);
}
if (users) {
  const usr = new Users();
  usersloader(usr);
}

if (profile) {
  console.log('kbh');
  const us = new User();
  userloader(us);
}
refresh.addEventListener('click', function() {
  const blg = new Blogs();
  blogloder(blg);
});
