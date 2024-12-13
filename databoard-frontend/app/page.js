'use client';

import React, {PureComponent} from 'react';

import Map from '../components/map';

import '../app/page.module.css';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Rectangle } from 'recharts';
import Link from 'next/link';

//import MockChart from '@/components/map/MockChart';

//import '../components/loginForm/page';

export default function Home() {

  function BarChartComponent (){
    const data = [
      { name: 'Jan', Sales: 3500 },
      { name: 'Feb', Sales: 3000 },
      { name: 'Mar', Sales: 2000 },
      { name: 'Apr', Sales: 2780 },
      { name: 'May', Sales: 1890 },
      { name: 'June', Sales: 2390 },
    ];
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };// BarChart

  function DoughnutChart (){
    const data = [
      { name: "Group A", value: 2400 },
      { name: "Group B", value: 4567 },
      { name: "Group C", value: 1398 },
      { name: "Group D", value: 9800 },
      { name: "Group E", value: 3908 },
      { name: "Group F", value: 4800 }
    ];

      return (
        <ResponsiveContainer width={300} height={300}>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={data}
            //cx={100}
            //cy={200}
            innerRadius={75}
            outerRadius={150}
            fill="#b195d2"
          />
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
      );
  };//Doughnut

  function MockChart(){
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    
      return (
          <ResponsiveContainer height={400} width={500}>
            <BarChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8"/>
              <Bar dataKey="uv" fill="#82ca9d" />
              <Bar dataKey='amt' fill='#12b5d1' />
            </BarChart>
          </ResponsiveContainer>
            
        );
    };//mockchart


    function StackedAreaChart(){
      const data = [
          {
            name: '2020',
            male: 3591232,
            female: 2578600,
          },
          {
            name: '2021',
            male: 424712,
            female: 45847,
          },
          {
            name: '2022',
            male: 8801218,
            female: 6347294,
          },
          {
            name: '2023',
            male: 16974572,
            female: 13540732,
          },
          {
            name: '2024',
            male: 13722775,
            female: 11847907,
          },
        ];
      
        return (
            <ResponsiveContainer height={400} width={500}>
              <BarChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="male" fill="#1306C2"/>
                <Bar dataKey="female" fill="#FB0366" />
              </BarChart>
            </ResponsiveContainer>
              
          );
      };//StackedAreaChart

  function TableOne(){

    return(
      <div>
      <table>
        <thead>
         <tr>
          <td>Date</td>
          <td>Total Arival</td>
          <td>Arrival Male</td>
          <td>Arrival Female</td>
        </tr> 
        </thead>
        
        <tbody>
        <tr>
          <td>1/1/2020</td>
          <td>1000</td>
          <td>500</td>
          <td>500</td>
        </tr>
        <tr>
          <td>1/2/2020</td>
          <td>14000</td>
          <td>8000</td>
          <td>6000</td>
        </tr>
        </tbody>
        
      </table>
      </div>

    );
  };

  return (
    <>
      <section className="flex justify-between bg-[#edf2f9] text-black sticky top-0 z-50 shadow-xl">
        <div className="flex gap-5 mt-2 mx-3">
          <img className="rounded-full overflow-hidden h-[40px] w-[40px]" src="/logo.png" alt="profile-picture"/>
          <h1 className ="font-sans font-bold text-3xl ite">MY Tropical</h1>
        </div>

        <nav>
          <Link href='/loginForm'>
          <button 
            className="px-4 mx-4 mt-3 pt-1 pb-1 bg-emerald-600 rounded-xl">Login</button>
          </Link>
        </nav>

      </section>
      
      <section className='ml-4 mr-4 flex relative z-0'>
        <div className='shadow-lg bg-emerald-50'>
          <div className='py-4 px-2 font-bold text-2xl text-slate-900'>
            <p>Malayisa Tourist Spots</p>
          </div>
          <div>
            <Map/>
          </div>
          <div className='h-5'/>
        </div>
        <div className="bg-emerald-50 px-4 pt-5 pb-8 shadow-xl ring-1 ring-gray-900/5 ml-4 w-[25rem] rounded-lg">
          <div>
            <p className='text-black font-bold text-2xl'>Tourist Arrival per Month</p>
          </div>
          <div className='items-center'>
            {/* <BarChartComponent/> */}
            <TableOne/>
          </div>
          
        </div>
      </section>

      <section className='flex flex-1 flex-col gap-4 p-4'>
        <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className=' aspect-square rounded-xl bg-emerald-50 shadow-xl text-center'>
              <p className='text-black font-bold text-2xl mb-3 pt-4'>Tourist Arrival in Malaysia</p>
              <StackedAreaChart/>
            </div>

            <div className=' aspect-square rounded-xl bg-emerald-50 shadow-xl text-center'>
            <p className='text-black font-bold text-2xl mb-3 pt-4'>PlaceHolder For Graph Title</p>
            <MockChart/>
            </div>

            <div className=' aspect-square rounded-xl bg-emerald-50 shadow-xl text-center'>
              <p className='text-black font-bold text-2xl mb-3 pt-4'>Placeholder Title For Graph 5</p>
              <div className='flex items-center justify-center py-10'>
                <DoughnutChart />
              </div>
            </div>
        </div>
      </section>

      <section className='flex flex-1 flex-col gap-4 p-4'>
        <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
          <div className=' aspect-square rounded-xl bg-slate-950' />
          <div className=' aspect-square rounded-xl bg-slate-950' />
          <div className=' aspect-square rounded-xl bg-slate-950' />
        </div>
      </section>
    </>
  );
}
