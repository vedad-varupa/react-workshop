import ReactDOM from 'react-dom';
import React from 'react';
import Modal from "react-modal";
import { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import iPhone from './images/iphone_11_pink.jpg';
import { FaAngleLeft } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
const customStyles = {
  content: {
    top: '0px',
    width: '325px',
    right: '0px',
    left: 'auto',
    background: '#f4f6f6'
  },
};
const SideBarModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false)
  const [insurance, setInsurance] = useState(true)
  const Back = () => {
    setCart(false)
    setInsurance(true)
  }
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = 'black';
  }
  function closeModal() {
    setIsOpen(false);
  }
  const CartHandler = () => {
    setCart(true)
    setInsurance(false)
  }
  return (
    <div>
      <button onClick={openModal} className='bg-red-600 border-[1px] text-white pl-[7px] pr-[7px] w-[120px] text-[14px] h-[35px] mr-[12px] mt-[25%] ml-[45%] rounded-[3px]'>Open</button>
      <div className='w-[100px]'>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            {insurance && (
              <div>
                <div className='relative flex rounded-none'>
                  <div className='ml-[80px]'><h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-[#042550] font-semibold text-center'>INSURANCE</h2></div>
                  <div className=' ml-[88px] mt-[2px]'> <button onClick={closeModal}><RiCloseLine /></button></div>
                </div>
                <div className='mt-[50px]'>
                  <div className='w-[280px]'> <p className='text-[11px] font-bold text-blue-400'>WOULD YOU LIKE TO ADD THE REHYPE EXTENDED INSURANCE - €20 / YEAR</p></div>
                  <div className='mt-[25px]'><p className='text-green-400 font-bold text-[12px] flex'><div className='mr-[8px]'>MY</div> <div>BENEFITS</div></p></div>
                  <div className='mt-[20px] ml-[11px] mb-[35px]'>
                    <li className='text-[13px]'>Lorem ipsum sit amet, consectetur adipisc <div className='ml-[18px]'>lor sit amet, consectetur adipiscii</div></li>
                    <li className='mt-[10px] text-[13px]'>Lorem ipsum sit amet, consectetur adipisc <div className='ml-[18px]'>lor sit amet, consectetur adipiscii</div></li>
                    <li className='mt-[10px] text-[13px]'>Lorem ipsum sit amet, consectetur adipisc <div className='ml-[18px]'>lor sit amet, consectetur adipiscii</div></li>
                    <li className='mt-[10px] text-[13px]'>Lorem ipsum sit amet, consectetur adipisc <div className='ml-[18px]'>lor sit amet, consectetur adipiscii</div></li>
                  </div>
                </div>
                <div>
                  <div className='ml-[28px]'>
                    <button className='bg-red-600 border-[1px] text-white pl-[7px] pr-[7px] w-[100px] text-[9px] h-[30px] mr-[12px] ml-[16px]' onClick={CartHandler}>BUY INSUARANCE</button>
                    <button className='bg-white border-[2px] border-solid text-gray-400 pl-[7px] pr-[7px] w-[100px] text-[9px] h-[30px]'>NO, I DON'T</button>
                  </div>
                </div>
              </div>
            )}
            {cart && (
              <div>
                <div >
                  <div className='relative flex rounded-none'>
                    <div className="mt-[3px]" onClick={Back}><FaAngleLeft /></div>
                    <div className='ml-[80px]'><h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-[#042550] text-center font-semibold ml-[25px] mr-[15px]'>CART</h2></div>
                    <div className=' ml-[95px] mt-[2px]'> <button onClick={closeModal}><RiCloseLine /></button></div>
                  </div>
                  <div className="flex mt-[37px] ml-[5px]">
                    <div className="mr-[25px] mt-[10px] ml-[5px]"><img src={iPhone} className="w-[50px] h-[75px]"></img></div>
                    <div>
                      <div><p className="font-semibold text-[13px]">iPhone 11 - 64GB - Black</p></div>
                      <div className="mt-[5px]"><p className="text-[11px] font-semibold">1 x €000.00</p></div>
                      <div className="mt-[5px]"><p className="text-[11px] font-semibold">Shipping cost - €00.00</p></div>
                      <div className="mt-[5px]"><p className="text-[11px] font-semibold">Handling charges - €00.00</p></div>
                      <div className="mt-[5px]"><p className="text-[11px] font-semibold">Insurance - €00.00</p></div>
                    </div>
                    <div className='ml-[24px] mt-[8px]'><FaRegTimesCircle /></div>
                  </div>
                  <div className="ml-[73px] font-bold mt-[25px] mb-[17px]"><p className="text-[#042550] text-[14px]">SUBTOTAL - €000.00</p></div>
                  <hr></hr>
                  <div className="mt-[25px]">
                    <div className=' flex'>
                      <button className='bg-red-600 border-[1px] text-white pl-[7px] pr-[7px] w-[290px] text-[11px] h-[30px] mr-[16px]'>VIEW CART</button>
                      <button className='bg-red-600 border-[1px] text-white pl-[7px] pr-[7px] w-[290px] text-[11px] h-[30px] '>CHECKOUT</button>
                    </div>
                  </div>
                  <div className="flex mt-[15px]">
                    <div className="w-[92px] ml-[2px] mt-[9px]">
                      <hr></hr>
                    </div>
                    <div><p className="text-[11px] ml-[40px] mr-[40px] font-semibold">OR</p></div>
                    <div className="w-[92px] mt-[9px]">
                      <hr></hr>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <button className='bg-white border-[1px] text-red-600 font-bold pl-[7px] pr-[7px] w-[130px] text-[11px] h-[30px] ml-[80px] '>CONTINUE SHOPING</button>
                  </div>
                </div>
                <div>
                </div>
              </div>
            )
            }
          </div>
        </Modal>
      </div>
    </div>
  )
}
export default SideBarModal;