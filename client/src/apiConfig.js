let apiUrl
const apiUrls = {
  production: '',
  development: 'https://tbd-wedding-app.herokuapp.com/advices'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl