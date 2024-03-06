import { Chart } from 'chart.js'
import React from 'react'
import {Line, Pie} from 'react-chartjs-2'


export const Graph = (props) => {
    console.log(props.data)
    
    var k = [];
    var value = [];


    const data = {
        labels: k,
        datasets: [{
            data: value,
            backgroundColor: ['#FCBF49', "#F77F00"]
        }],
        title: {
            display: true,
            text: 'Chart.js Pie Chart'
        }
    }

/*
    const data = {
        labels: k,
        datasets: [
            {
                label: 'adaptation',
                data: value 
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }*/

    const splitData = () => {
        const adaptation = props.data.betterForm;
      
        /* for(var x = 0; x < props.data.length(); x++){
            console.log(props.data[x]);
        } */
        
        if(adaptation){
            Object.keys(adaptation).forEach((key, i) => {
                k.push(key);
                value.push(adaptation[key])
        
                /* console.log(key, adaptation[key], i); */
            })

            console.log(k)
            console.log(data.labels)
        }
    }
    
    return (
        <div>
            {splitData()}
           {/* <Line data={data} options={options}/> */}
            <div style={{width: '400px', height: '400px'}}>
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
