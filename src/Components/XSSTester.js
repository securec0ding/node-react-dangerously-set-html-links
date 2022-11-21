// render a query from the browser bar
// send users here via a form on the front page
import React from 'react'
import * as qs from 'query-string'

class XSSTester extends React.Component {
  constructor(props) {
    super()
    this.renderInjection = this.renderInjection.bind(this)
  }

  renderInjection() {
    var injection = qs.parse(window.location.search).injection
    return <div className='injection' dangerouslySetInnerHTML={{ __html: injection }} />
  }

  render() {
    return (
      <div className='XSSTester'>
        <h1>Testing Injection:</h1>
        <p>Injection below:</p>
        {this.renderInjection()}
        <form action='/testXSS'>
          <p>Test XSS payloads here:</p>
          <input name='injection' />
          <button type='submit'>Test XSS</button>
        </form>
      </div>
    )
  }
}

export default XSSTester