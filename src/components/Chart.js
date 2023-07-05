import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import React from 'react'
import { Chart as chartJS } from 'chart.js/auto'

export default function Chart({ infected, recovered, deceased }) {
    chartJS.register(CategoryScale)
    return (
        <div className='chart'>
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deceased'],
                    datasets: [
                        {
                            label: 'People',
                            data: [infected, recovered, deceased],
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(255, 99, 132, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }}
            />
        </div>
    )
}
