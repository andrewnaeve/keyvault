import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import Csv from './components/csv'
import AbletonVault from './components/ableton_vault'

const Main = React.createClass({
  render() {
    let style = {
      height: '100vh'
    }
    return (
      <div style={style}>
        <h1>FNI Code Bank</h1>
        <AbletonVault />
      </div>
    )
  }
})

export default Main