import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props: any) => {
  const dataPointsValues = props.dataPoints.map((dataPoint: any) => dataPoint.value)
  const totalMaximum = Math.max(...dataPointsValues)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint: any) =>
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  )
}

export default Chart
