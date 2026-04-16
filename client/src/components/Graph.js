import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import Labels from './Labels';
import { chart_Data, getTotal } from '../helper/helper'
import {default as api} from '../store/apiSlice';

Chart.register(ArcElement);

export default function Graph() {

  const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
  let graphData;

  

  if(isFetching){
    graphData = <div>Fetching</div>;
  }else if(isSuccess){
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  }else if(isError){
    graphData = <div>Error</div>
  }


  return (
    <div className="panel-card graph-panel">
        <div className="section-header">
            <div>
                <p className="section-eyebrow">Spending overview</p>
                <h2>See your money at a glance.</h2>
            </div>
            <span className="section-badge section-badge-strong">Live chart</span>
        </div>

        <div className="chart-card">
            <div className="chart relative">
                {graphData}
                <div className='chart-center'>
                    <span className='chart-label'>Total</span>
                    <span className='chart-value'>${getTotal(data) ?? 0}</span>
                    <span className='chart-note'>Across all categories</span>
                </div>
            </div>
        </div>

        <div className="label-stack">
            <Labels />
        </div>
    </div>
  )
}
