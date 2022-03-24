export default {
  login: user => {
    return fetch('/user/login', {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status !== 401) {
        return res.json().then(data => data);
      } else {
        return {isAuthenticated: false, user:{username:""}, message:{msgBody:"Incorrect username or password", msgError: true}}
      }
    })
  },
  register: user => {
    return fetch('/user/register', {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => data);
  },
  logout: () => {
    return fetch('/user/logout')
      .then(res => res.json())
      .then(data => data);
  },
  isAuthenticated: () => {
    return fetch('/user/authenticate')
      .then(res => {
        if(res.status !== 401) {
          return res.json().then(data => data);
        } else {
          return {isAuthenticated: false, user:{username:""}}
        }
      })
  }
}