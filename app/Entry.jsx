import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import Csv from './components/csv'
import AbletonVault from './components/ableton_vault'
import AllAbleton from './components/all_ableton'

const Main = React.createClass({
  render() {
    let style = {
      height: '100vh'
    }
    return (
      <div style={style}>
        <h1>FNI Code Bank</h1>
        <AllAbleton />
      </div>
    )
  }
})

export default Main