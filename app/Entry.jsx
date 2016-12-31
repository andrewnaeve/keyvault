import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import Csv from './components/csv'

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>FNI Code Bank</h1>
        <Csv/>
      </div>
    )
  }
})

export default Main