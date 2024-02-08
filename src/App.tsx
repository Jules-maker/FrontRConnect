import { useState } from 'react'
import './App.css'
import getGeolocalisation from './utils/getGeolocalisation'
import getDistanceBetweenCords from './utils/getDistanceBetweenCords'
import reactLogo from './assets/react.svg'
import ButtonComponent from './components/buttonComponent'
import Cards from './components/CardsComponent'

function App() {
  const [dist, setDist] = useState(0)
  

  const handleClick = async() => {
    try{

      const geo = await getGeolocalisation();
      console.log(geo);

      const {latitude, longitude} = geo.coords;
      const distance = getDistanceBetweenCords(latitude, longitude, 0, 0);
      setDist(distance);
      
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <h1 className='bold'>R-connect</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>Distance {dist}</p>
        <ButtonComponent label="Get Geo" handleClick={handleClick} icon={<img src={reactLogo} className="h-5 w-5" alt="React logo" />} />
        <Cards title="Card 1" imgSrc="https://source.unsplash.com/random/320x320" className='w-32 h-32'/>
      </div>
    </>
  )
}

export default App
