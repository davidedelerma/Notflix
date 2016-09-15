const React = require ('react')
const LoginBox = require('./auth/LoginBox')
const { Link } = require('react-router')

const Home = () => (
  <div className = "home">
    <h1 className='title'> Notflix </h1>
    <LoginBox url='http://localhost:5000/' />
    <Link className='shows-link' to='/shows'>View Shows</Link>
  </div>
)

module.exports = Home