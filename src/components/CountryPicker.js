import React from 'react'

export default function CountryPicker({ countries, setSelectedCountry }) {
    return (
        <div className='country-picker'>
            <select aria-label='country picker' name="country" id="country" defaultValue='Algeria' onChange={(e) => setSelectedCountry(e.target.value)}>
                {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
        </div>
    )
}
