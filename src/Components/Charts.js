import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Chartt extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        series: [{
            name: 'series1',
            type: 'area',
            data: [31, 40, 28, 51, 42, 109, 100]
                }, {
            name: 'series2',
            type: 'line',
            data: [11, 32, 45, 32, 34, 52, 41]
            }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            colors: ["#424770", "#424770"],
            fill: {
                type: "gradient",
                colors: ["#6772E5"],
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.2,
                    stops: [0, 900, 100]
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: { 
                categories: ["1", "5", '10', "15", "20", "25", "30"]
            }, 
            tooltip: {
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    return (
                        '<div class="arrow_box">' +
                        "<span className='users'>Users</span>"+
                        "<span>" +
                        w.globals.labels[dataPointIndex] + "</span>" + "<span>"
                         + series[seriesIndex][dataPointIndex] + ' October' +
                        "</span>" +
                        "</div>"
                    );
                    }
                }
        },
    
    
    };
    }

render() {
return (
    <div className="app"> 
            <ReactApexChart options={this.state.options} series={this.state.series} type="area"  height={277} />
          
      </div>
    );
  }
}

export default Chartt;