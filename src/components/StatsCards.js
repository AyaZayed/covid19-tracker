import React from 'react'
import CountUp from 'react-countup'

export default function StatsCards({ infected, recovered, deceased, date }) {

    return (
        <div className='stats-cards'>
            <div className='card'>
                <h6>Infected</h6>
                <h4><CountUp start={0} end={infected} duration={1} separator=',' /></h4>
                <h6>{date}</h6>
                <p>Number of active cases of Covid-19</p>
            </div>
            <div className='card'>
                <h6>Recovered</h6>
                <h4><CountUp start={0} end={recovered} duration={1} separator=',' /></h4>
                <h6>{date}</h6>
                <p>Number of recoveries from Covid-19</p>
            </div>
            <div className='card'>
                <h6>Deceased</h6>
                <h4><CountUp start={0} end={deceased} duration={1} separator=',' /></h4>
                <h6>{date}</h6>
                <p>Number of deaths caused by Covid-19</p>
            </div>
        </div>
    )
}
