import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { RiCloseLine } from "react-icons/ri";
import iPhone from './images/iphone_11_pink.jpg';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '1129px',
        height: '607px'
    },
};
const ImprovedMobileInfo = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState()
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#042550';
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal} className='bg-[#C02A1B] text-white mt-[10px] ml-[10px]'>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex'>
                    <div className='w-[300px] ml-[10px]'><p ref={(_subtitle) => (subtitle = _subtitle)} className='text-[#042550] text-[15px] font-semibold'>Select your device backcreen state</p></div>
                    <div className='ml-[800px]'><button onClick={closeModal}><RiCloseLine /></button></div>
                </div>
                <div className='flex'>
                    <div className='mt-[25px] ml-[13px]'><img src={iPhone} className="w-[277px] h-[513px]"></img></div>
                    <div className='mt-[70px] ml-[60px]'>
                        <div className='fixed'>
                        <div>
                            {visible !==1 && (
                                <div onClick={() => {setVisible(1)}}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>LIKE NEW</p></div>
                            ) }
                            {visible === 1 && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={() => {setVisible(!1)}} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold'>LIKE NEW</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            {visible !==2 && (
                                <div onClick={() => {setVisible(2)}}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>VERY GOOD</p></div>
                            )}
                            {visible === 2 && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={() => {setVisible(!2)}} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold'>VERY GOOD</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            {visible !==3 && (
                                <div onClick={() => {setVisible(3)}}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>GOOD</p></div>
                            )}
                            {visible === 3 && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={() => {setVisible(!3)}} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold text-[15px]'>GOOD</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            {visible !== 4 && (
                                <div onClick={() => {setVisible(4)}}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>USED</p></div>
                            )}
                            {visible === 4 && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={() => {setVisible(!4)}} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold text-[15px]'>USED</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                        {visible !== 5 && (
                                <div onClick={() => {setVisible(5)}}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>DEFECT</p></div>
                            )}
                            {visible === 5 && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={() => {setVisible(!5)}} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold text-[15px]'>DEFECT</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>
                       
                        </div>
                    </div>
                    <div><button className='bg-[#C02A1B] text-white w-[140px] h-[36px] ml-[550px] mt-[480px] text-[15px]'>NEXT</button></div>
                </div>
            </Modal >
        </div >
    )
}
export default ImprovedMobileInfo;