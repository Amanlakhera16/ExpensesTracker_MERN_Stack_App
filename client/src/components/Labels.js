import React from 'react'
import {default as api} from '../store/apiSlice';
import { getLabels } from '../helper/helper';

export default function Labels() {

   const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
    let Transactions;

    

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
    }else if(isError){
        Transactions = <div>Error</div>
    }

  return (
    <>
        {Transactions}
    </>
  )
}

function LabelComponent({ data }){
    if(!data) return <></>;
    return (
        <div className="label-row">
            <div className="label-left">
                <span className='label-dot' style={{background: data.color ?? '#f9c74f'}}></span>
                <h3 className='label-title'>{data.type ?? ''}</h3>
            </div>
            <h3 className='label-percent'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}
