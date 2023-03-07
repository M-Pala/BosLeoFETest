import React from 'react'
import { CloudDown, Dots } from '../icons'
import MoviePoster from '../../images/Movie_Image.png'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { SectionTitle } from '../common';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      
      title: {
        display: true,
        text: 'Month',
        font: {
          size: 12,
        },
      },
      grid: {
        drawBorder: false,
        display: false,
        lineWidth : 0
      },
    },
    y: {
      title: {
        display: true,
        text: 'Watch Time'
      },
      border : {
        color :' #fff'
      },
      beginAtZero: true,
      suggestedMax : 750000,
      grid: {
        display: true,        
      },

      
      ticks: {
        stepSize: 125000,
        backdropColor : '#fff',
        callback: function(value) {
          var ranges = [
             { divider: 1e6, suffix: 'M' },
             { divider: 1e3, suffix: 'k' }
          ];
          function formatNumber(n) {
             for (var i = 0; i < ranges.length; i++) {
                if (n >= ranges[i].divider) {
                   return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
             }
             return n;
          }
          return formatNumber(value);
       }
      }
    },
  },
  plugins: {
    legend: {
      display : false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [250000,260000,270000,240000,290000,300000,350000,410000,430000,400000,450000],
      backgroundColor: '#A6B3F04D',
      borderColor: "#4755A8",
      lineTension: 0.5,
      pointRadius: 1
    },
  ],
};

const MovieMainDetails = () => {
  return (
    <section className='w-full flex justify-center flex-wrap md:mt-16'>
      <div className='w-full flex  border-b border-b-mb-highlight-500 justify-center'>
        <div className='h-[72px] w-full max-w-[1184px] flex justify-between items-center md:px-2'>
          <h1 className='font-bold text-2xl md:max-w-[50%]'>Avengers Black Widow</h1>
          <button className='flex justify-center items-center gap-x-2 text-sm font-normal rounded-lg border p-2 border-mb-highlight-500 hover:bg-mb-highlight-100'>
            <CloudDown/> Export
          </button>
        </div>
      </div>
      
      <div className='w-full max-w-[1184px] mt-8 md:px-2'>
        
        <div className='grid grid-cols-3 gap-8 h-96 md:flex md:flex-col md:h-auto'>
          
          <div className='col-span-1 h-full border border-mb-highlight-500 rounded-lg'>
            <img src={MoviePoster} alt="movie-poster" className='w-full h-full object-cover rounded-lg' />
          </div>
          
          <div className='col-span-2 border border-mb-highlight-500 p-6 flex-grow rounded-lg md:p-2'>
            <div className='flex w-full justify-between'>
              <SectionTitle title='Average watch time' subtitle='This tracks the average watch by users every month'/>
              <div>
                <Dots/>
              </div>
            </div>
          
            <div className='w-auto mt-12 h-[240px]'>
              <Line options={options} data={data} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieMainDetails