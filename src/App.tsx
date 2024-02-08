import { useState } from 'react'
import getGeolocalisation from './utils/getGeolocalisation'
import getDistanceBetweenCords from './utils/getDistanceBetweenCords'
import reactLogo from './assets/react.svg'
import Cards, { CardsProps } from './components/CardsComponent'
import ListView from './components/ListComponent'
import ButtonComponent from './components/ButtonComponent'

const cardsList:CardsProps[]  = [
  {
    title: 'Card 1',
    to: '#',
    imgSrc: 'https://source.unsplash.com/random/320x320',
    className: 'w-32 h-32'
  },
  {
    title: 'Card 2',
    to: '#',
    imgSrc: 'https://source.unsplash.com/random/320x320',
    className: 'w-32 h-32'
  },
  {
    title: 'Card 3',
    to: '#',
    imgSrc: 'https://source.unsplash.com/random/320x320',
    className: 'w-32 h-32'
  }
];

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
        <Cards title="Card 1" imgSrc="https://source.unsplash.com/random/320x320" className='w-32 h-32' to='#'/>
        <ListView items={cardsList} renderItem={(item) => <Cards {...item} />} className='grid-cols-2'/>
      </div>
    </>
  )
}

export default App
