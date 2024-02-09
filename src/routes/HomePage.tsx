import { useState } from 'react'
import Cards, { CardsProps } from '../components/CardsComponent';
import HeaderComponent from '../components/HeaderComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import ListView from '../components/ListComponent';
import { useLoaderData } from 'react-router-dom';


function HomePage() {
  const { cardsList } = useLoaderData() as { cardsList: CardsProps[] }; 

  const [filteredData, setFilteredData] = useState<CardsProps[]>(cardsList);


    const handleSearch = (filteredData: CardsProps[]) => {
      setFilteredData(filteredData);
    };
  return (
    <>
      <HeaderComponent  title='R-Connect' />
      <div className='p-4 flex flex-col gap-3'>
        <SearchBarComponent data={cardsList} onSearch={handleSearch} itemToFilter={'title'}/>
        <h2 className='bold text-black dark:text-white text-xl'>Nouveau Lieu</h2>
        <ListView items={filteredData} renderItem={(item) => <Cards {...item} className='w-full rounded-md'/>} className='grid-cols-2 gap-4 overflow-auto'/>

      </div>
    </>
  )
}

export default HomePage
