import Modal from "react-modal";
import { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import iPhone from './images/iphone_11_pink.jpg';
import { FaAngleLeft } from "react-icons/fa";
const customStyles = {
    content: {
        top: '0px',
        width: '325px',
        right: '0px',
        left: 'auto',
        background: '#f4f6f6'
    },
};
const Cart = () => {
    const [modalIsOpen, setIsOpen] = useState(true);
    let subtitle;
    const Back = () => {
        setCart(false)
        setInsurance(true)
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
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div>

                    <div className='relative flex rounded-none'>
                        <div className="mt-[3px]" onClick={Back}><FaAngleLeft /></div>
                        <div className='ml-[80px]'><h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-[#042550] text-center font-semibold ml-[25px] mr-[15px]'>CART</h2></div>
                        <div className=' ml-[95px] mt-[2px]'> <button onClick={closeModal}><RiCloseLine /></button></div>
                    </div>
                    <div className="flex mt-[30px] ml-[5px]">
                        <div className="mr-[25px] mt-[10px] ml-[5px]"><img src={iPhone} className="w-[50px] h-[75px]"></img></div>
                        <div>
                            <div><p className="font-semibold text-[13px]">iPhone 11 - 64GB - Black</p></div>
                            <div className="mt-[4px]"><p className="text-[11px]">1 x €000.00</p></div>
                            <div className="mt-[4px]"><p className="text-[11px]">Shipping cost - €00.00</p></div>
                            <div className="mt-[4px]"><p className="text-[11px]">Handling charges - €00.00</p></div>
                            <div className="mt-[4px]"><p className="text-[11px]">Insurance - €00.00</p></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="ml-[73px] font-semibold mt-[25px] mb-[15px]"><h4 className="text-[#042550]">SUBTOTAL - €000.00</h4></div>
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

            </Modal>

        </div>

    )
}
export default Cart;