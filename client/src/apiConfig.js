let apiUrl
const apiUrls = {
  production: '',
  development: 'http://localhost:3000/advices'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl