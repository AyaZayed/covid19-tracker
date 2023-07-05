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
                            //    pastel blue, pastel green, pastel red
                            backgroundColor: [
                                '#bcd4e6',
                                '#b9fbc0',
                                '#ffac81'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgb(52, 218, 68)',
                                'rgba(255, 99, 132, 1)'
                            ],

                            borderWidth: 1
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}
