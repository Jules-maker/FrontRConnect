import { useState } from 'react'
import './App.css'
import getGeolocalisation from './utils/getGeolocalisation'
import getDistanceBetweenCords from './utils/getDistanceBetweenCords'

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
        <button onClick={handleClick}>get Geo</button>
      </div>
    </>
  )
}

export default App
