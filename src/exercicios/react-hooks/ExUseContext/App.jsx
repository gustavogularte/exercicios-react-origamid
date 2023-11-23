import React from 'react'
import { GlobalStorage } from './GlobalContext'
import ExUseContext from './ExUseContext'
import Limpar from './Limpar'

const App = () => {
  return (
    <GlobalStorage>
      <ExUseContext />
    </GlobalStorage>
  )
}

export default App
