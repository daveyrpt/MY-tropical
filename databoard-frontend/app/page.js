'use client';

import React, {PureComponent} from 'react';

import Map from '../components/map';

import '../app/page.module.css';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
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

  function MockChart(){
    const data = [
        {
          name: 'Jan',
          WM: 4000,
          EM: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          WM: 3000,
          EM: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          WM: 2000,
          EM: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          WM: 2780,
          EM: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          WM: 1890,
          EM: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          WM: 2390,
          EM: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          WM: 3490,
          EM: 4300,
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
              <Bar dataKey="WM" fill="#8884d8"/>
              <Bar dataKey="EM" fill="#82ca9d" />
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

function TouristOrigin(){
  const data = [
    { name: 'Australia', value: 120000 },
    { name: 'Brunei', value: 300000 },
    { name: 'China', value: 220000 },
    { name: 'Indonesia', value: 90000 },
    { name: 'India', value: 40000 },
    { name: 'Philiphine', value: 50000 },
    { name: 'U.S.A', value: 100000 },
    { name: 'Brazil', value: 60000 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',
    '#6646ef', '#d2f663', '#fb0366', '#23343d'
  ];

    return (
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          innerRadius={75}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    );
};

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
              <p className='text-black font-bold text-2xl mb-3 pt-4'>Tourist Nationalities by Arival Jan - Oct 2024</p>
              <div className='flex items-center justify-center py-10'>
                <TouristOrigin />
              </div>
            </div>

            <div className=' aspect-square rounded-xl bg-emerald-50 shadow-xl text-center'>
              <p className='text-black font-bold text-2xl mb-2 pt-4'>Arrival to West Malaysia / East Malaysia</p>
              <div className='flex items-center justify-center py-3'>
                <MockChart />
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className='h-[2rem] w-auto bg-emerald-950 text-white text-center'>
        <p>For inquiries contact inquiries@example.com</p>
        </div>
      </section>
    </>
  );
}
