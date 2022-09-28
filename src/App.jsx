import { useState } from 'react';
import Card from './components/CustomerCard';
import TradeIn from './components/TradeIn';
import Form from './components/Form';
import SideBarModal from './components/SideBarModal';
import Modal from 'react-modal/lib/components/Modal';
import Table from './components/Table';
import MobileInfo from './components/MobileInfo';


function App() {
  const content = [
    {
      rating: 4,
      title: "Title of post ",
      order: "1 week ago",
      message: "Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus adio consecteur aliquet et. Magna ullamcorper sencectus aenean suspendisse est.",
      customer: "Bilal Suljić",
      telefon: {
        phoneName: "iPhone 12",
        RAM: "64GB",
        color: "Blue"
      }
    },
    {
      rating: 5,
      title: "Title of post ",
      order: "2 week ago",
      message: "Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus adio consecteur aliquet et. Magna ullamcorper sencectus aenean suspendisse est.",
      customer: "Dejan Milić",
      telefon: {
        phoneName: "iPhone 14",
        RAM: "64GB",
        color: "Red"
      }
    },
    {
      rating: 2,
      title: "Title of post ",
      order: "3 week ago",
      message: "Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus adio consecteur aliquet et. Magna ullamcorper sencectus aenean suspendisse est.",
      customer: "Nail Sivro",
      telefon: {
        phoneName: "iPhone 11",
        RAM: "64GB",
        color: "Pink"
      }
    }
  ]
  return (
    <div className="bg-orange-100 fixed w-full h-full">
      <MobileInfo/>
    {/*  <Table data={content}/>*/}
     {/* <SideBarModal/>*/}
       {/*   <Form/> */}
    {/*  <TradeIn/> */}
    {/*   <div className='mt-[30px] ml-[120px] font-semibold'><h3>OUR CUSTOMER FEEDBACK</h3></div>
       <div className='flex ml-[120px] gap-[18px] mt-[25px]'>
        {content.map((values) => (
          <Card values={values} />
        ))}
      </div>
        */}
    </div>
  )
}
export default App;
