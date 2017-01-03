import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'

import { Match, Miss, Link, Router } from 'react-router'

import Navbar from './components/navbar'
import ShowAllAbleton from './components/ableton/show_all_ableton'

render(
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>,
  document.getElementById('app')
)
