import './css/App.css'
import { useState, useEffect } from 'react'
import CountryPicker from './components/CountryPicker'
import StatsCards from './components/StatsCards'
import Chart from './components/Chart'

export default function App() {
  const url = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'

  const [covidData, setCovidData] = useState(null)
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('Algeria')
  const [infected, setInfected] = useState(0)
  const [recovered, setRecovered] = useState(0)
  const [deceased, setDeceased] = useState(0)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCovidData(data)
        setCountries(data.map(country => country.country))
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (covidData) {
      const country = covidData.find(country => country.country === selectedCountry)
      setInfected(country.infected)
      setRecovered(country.recovered)
      setDeceased(country.deceased)
    }
  }, [selectedCountry, covidData])


  const headerImg = new URL('../public/header.svg', import.meta.url)
  console.log(infected, recovered, deceased)
  return (
    <>
      <header>
        <img src={headerImg} alt="covid 19" />
      </header>
      <StatsCards infected={infected} recovered={recovered} deceased={deceased} />
      <CountryPicker countries={countries} setSelectedCountry={setSelectedCountry} />
      <Chart infected={infected} recovered={recovered} deceased={deceased} selectedCountry={selectedCountry} />
    </>
  )
}
