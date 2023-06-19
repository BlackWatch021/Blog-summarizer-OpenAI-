import Hero from './component/Hero'
import Demo from './component/Demo'
import './App.css'

const App = () => {
  return (
    <main>
        <div id='container' className='main'>
            <div className='gradient'></div>
        </div>
        <div className='app'>
            <Hero/>
            <Demo/>
        </div>
    </main>
  )
}

export default App