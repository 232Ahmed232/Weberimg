import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Body from './components/Body/Body'
import SearchContextProvider from './context/search/SearchContextProvider'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <SearchContextProvider>
      <Header />
      <Outlet/>
       
    </SearchContextProvider>
  )
}

export default App
