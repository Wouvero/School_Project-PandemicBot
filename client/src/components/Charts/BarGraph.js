import React from 'react'
import { Bar } from "react-chartjs-2";

export const BarGraph = (props) => {
    var dataFGraph = props.data;
    var labelsValue = [];
    var dataValue = [];

    const chartData = {
        labels: labelsValue,
        datasets: [
          {
            label: "",
            data: dataValue,
            backgroundColor: [
              "rgb(38, 70, 83)",
              "rgb(42, 157, 143)",
              "rgb(233, 196, 106)",
              "rgb(244, 162, 97)",
              "rgb(231, 111, 81)",
            ],
          },
        ],
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
            <div className="graph-container" style={{width: '600px', height: '300px'}}>
                <Bar
                    data={chartData}
                    options={{
                            title: {
                            display: true,
                            text: "Largest Scale of Persons",
                            fontSize: 20,
                        },
                        legend: {
                        display: true,
                        position: "right",
                        },
                    }}
                />
            </div>
      </div>
    )
}
