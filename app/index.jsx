import React from 'react'
import { render } from 'react-dom'
import App from './container'
import { createStore } from 'redux';
import {reducer} from './reducer'

const store = createStore(reducer)

render(
	<App store={store}></App>,
    document.getElementById('root')
)
