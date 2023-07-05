import './css/App.css'
import { useState, useEffect } from 'react'

export default function App() {
  // getting us covid data from api and storing it in state
  const [covidData, setCovidData] = useState(null)
  const [country, setCountry] = useState('Egypt')
  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
      .then(res => res.json())
      .then(data => setCovidData(data[0]))
  }, [])

  return (
    <>

    </>
  )
}
