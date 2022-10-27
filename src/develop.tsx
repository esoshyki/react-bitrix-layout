import React from 'react'
import ReactDOM from 'react-dom/client'
import { withBitrixLayout } from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App = withBitrixLayout(() => {

  return (
    <h1>МОЕ ПРИЛОЖЕНИЕ</h1>
  )
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
