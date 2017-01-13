import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import Main from './entry'

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('app')
)