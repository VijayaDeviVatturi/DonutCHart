import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  columnChart: Chart = new Chart;
  donutChart: Chart = new Chart;
 
  initDonut() {
    const donut = new Chart({
      chart: {
        // plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      
      },
      title: {
        text: '<strong>50%</strong>',
        align: 'center',
        verticalAlign: 'middle',
        y: 0
      },
      
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: -180,
          center: ['50%', '50%'],
          size: '90%',
          showInLegend: true
        },
        
      },
      series: [
        {
          name: 'Countries',
          data: [
            {
              name: 'USA',
              y: 30,
              color:'#F05573'
            },
            {
              name: 'UK',
              y: 12,
              color:'#7F07EC'
            },
            {
              name: 'SPAIN',
              y: 15,
              color:'#03A9F5'
            },
            {
              name: 'FRANCE',
              y: 20,
              color:'#5FC60B'
            },
            {
              name: 'CHINA',
              y: 10,
              color:'#EAAE0B'
            },
            {
              name: 'JAPAN',
              y: 13,
              color:'#E07E50'
            }
          ],
          

          type: 'pie',
          innerSize: '50%'
        }
      ],
      
    });
    this.donutChart = donut;
  }
  ngOnInit() {
   // this.initColumn();
    this.initDonut();
  }
}
