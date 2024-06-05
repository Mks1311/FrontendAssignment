import './App.css'
import Banner1 from './components/Banner/Banner1'
import Banner2 from './components/Banner/Banner2'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto box-border'>
      <Navbar/>
      <Banner1/>
      <Banner2/>
    </div>
  )
}

export default App
