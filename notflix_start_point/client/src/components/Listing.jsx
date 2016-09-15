const React = require ('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const Show = require('./Show')

const Listing = React.createClass({

  getInitialState(){
    return {searchQuery: '', shows:[]}
  },

  componentDidMount(){
    const url = 'http://localhost:5000/api/shows'
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true

    request.onload = function() {
        if (request.status === 200) {
            const jsonString = request.responseText
            const data = JSON.parse(jsonString)
            this.setState({shows: data})
        } else {
          console.log('not logged in')
          browserHistory.goBack()
        }
    }.bind(this)
    request.send(null)
  },

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  render(){
    return(
        <div className="listing">
          <nav>
            <Link className='title' to="/">NotFlix</Link>
            <input className='search-box' type='text' placeholder='search....' 
            value={this.state.searchQuery} onChange={this.doSearch}/>
          </nav>
          <div className='shows-container'>
            {
              this.state.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0).map((show)=>(
                <Show {...show} key={show.programmeID}/>
                ))
            }
          </div>
        </div>
      )
  }
})
module.exports = Listing