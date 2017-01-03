import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'

import { Match, Miss, Link, Router } from 'react-router'
import Csv from './components/ableton/csv'
import AbletonVault from './components/ableton/ableton_vault'
import AllAbleton from './components/ableton/all_ableton'
import Navbar from './components/navbar'

render(
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>,
  document.getElementById('app')
)
