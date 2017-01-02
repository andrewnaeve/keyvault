import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import Csv from './components/csv'
import AbletonVault from './components/ableton_vault'

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>FNI Code Bank</h1>
        <AbletonVault />
      </div>
    )
  }
})

export default Main