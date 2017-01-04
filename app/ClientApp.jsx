import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router'

import { Match, Miss, Link, Router } from 'react-router'

import Navbar from './components/navbar'
import Vault from './components/vault'
import AbletonMain from './components/ableton/ableton_main'
import CodeObject from './components/ableton/code_object'
import CodeTable from './components/ableton/code_table'
import Csv from './components/ableton/csv'
import ShowAllAbleton from './components/ableton/show_all_ableton'

render(
  <HashRouter hashType="noslash">
    <Navbar />
  </HashRouter>,
  document.getElementById('app')
)
