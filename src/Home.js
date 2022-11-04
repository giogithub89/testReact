import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const [searchInput, setSearch] = useState('')
    const [list, setList] = useState([])

    const search =  async () =>  {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
        const json = await response.json()
        setList({...json.list})
        console.log(list)
    }

  return ( 
    <div>
        <input placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={searchInput}/>
        <button onClick={search}>Search</button>

        <div>
            {list && list.map((item, id) =>{
                return <Link to={`/${item.idMeal}`} ><li key={id}> {item.strMeal} </li></Link>
            } )}
        </div>

        {/* return <Link to={`/${item.idMeal}`}><li key={id}> {item.strMeal} </li></Link> 
        onClick={() => navigate('/details')}
        */}
    </div>
  )
}
