import React from 'react'
import {Pie} from 'react-chartjs-2'

export const YesNoGraph = (props) => {
    const dataFGraph = props.data;
    const yes = props.yes;
    const no = props.no;

    var labelsValue = [];
    var dataValue = [];

    const data = {
        labels: labelsValue,
        datasets: [{
            data: dataValue,
            backgroundColor: [yes, no]
        }]
    }

    const splitData = () => {
        dataFGraph && Object.keys(dataFGraph).forEach(key => {
            labelsValue.push(key);
            dataValue.push(dataFGraph[key])
        })
    } 

    return (
        <div className="graphSection">
            {splitData()}
            <h2>{props.title}</h2>
            <div className="graph-container" style={{width: '400px', height: '400px'}}>
                <Pie
                    data={{
                        labels: data.labels,
                        datasets: data.datasets,
                    }}
                />
            </div>
        </div>
    )
}
