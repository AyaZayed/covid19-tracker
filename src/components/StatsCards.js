import React from 'react'

export default function StatsCards({ infected, recovered, deceased }) {
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className='stats-cards'>
            <div className='card'>
                <h6>Infectd</h6>
                <h4>{infected || 'NA'}</h4>
                <h6>{today}</h6>
                <p>Number of active cases of Covid-19</p>
            </div>
            <div className='card'>
                <h6>Recovered</h6>
                <h4>{recovered || 'NA'}</h4>
                <h6>{today}</h6>
                <p>Number of recoveries from Covid-19</p>
            </div>
            <div className='card'>
                <h6>Deceased</h6>
                <h4>{deceased || 'NA'}</h4>
                <h6>{today}</h6>
                <p>Number of deaths caused by Covid-19</p>
            </div>
        </div>
    )
}
