import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import Csv from './components/csv'
import AbletonVault from './components/ableton_vault'
import AllAbleton from './components/all_ableton'
import Navbar from './components/navbar'

const Entry = React.createClass({
  render() {
    let style = {
      height: '100vh'
    }
    return (
      <div>
        <Navbar/>

      </div>
    )
  }
})

export default Entry