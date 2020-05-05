export const environment = {
  production: false,
  nav: [
    {
      id: 'marriage',
      url: '/',
      name: 'Marriage'
    },
    {
      id: 'aboutme',
      url: '/aboutme',
      name: 'About Me'
    },
    {
      id: 'login',
      url: '/login',
      name: 'Login'
    },
    {
      id: 'register',
      url: '/signup',
      name: 'Register'
    }
  ],
  loginOptions: [
    {
      id: 'emailId',
      placeholder: 'Enter Username',
      label: 'Username',
      type: 'email',
      error: 'Please enter a valid username'
    },
    {
      id: 'password',
      placeholder: 'Enter Password',
      label: 'Password',
      type: 'password'
    }
  ]
};
