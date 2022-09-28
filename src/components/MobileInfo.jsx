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
const MobileInfo = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [likevisible, setLikeVisible] = useState(true)
    const [likeinvisible, setLikeInVisible] = useState(false)
    const [verygoodvisible, setVeryGoodVisible] = useState(true)
    const [verygoodinvisible, setVeryGoodInVisible] = useState(false)
    const [goodvisible, setGoodVisible] = useState(true)
    const [goodinvisible, setGoodInVisible] = useState(false)
    const [usedvisible, setUsedVisible] = useState(true)
    const [usedinvisible, setUsedInVisible] = useState(false)
    const [defectvisible, setDefectVisible] = useState(true)
    const [defectinvisible, setDefectInVisible] = useState(false)
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#042550';
    }
    function closeModal() {
        setIsOpen(false);
    }
    const LikeNewHandler = () => {
        setLikeVisible(!likevisible)
        setLikeInVisible(!likeinvisible)
    }
    const VeryGoodNewHandler = () => {
        setVeryGoodVisible(!verygoodvisible)
        setVeryGoodInVisible(!verygoodinvisible)
    }
    const GoodHandler = () => {
        setGoodVisible(!goodvisible)
        setGoodInVisible(!goodinvisible)
    }
    const UsedHandler = () => {
        setUsedVisible(!usedvisible)
        setUsedInVisible(!usedinvisible)
    }
    const DefectHandler = () => {
        setDefectVisible(!defectvisible)
        setDefectInVisible(!defectinvisible)
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
                            {likevisible && (
                                <div onClick={LikeNewHandler}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>LIKE NEW</p></div>
                            )}
                            {likeinvisible && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={LikeNewHandler} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold'>LIKE NEW</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div>
                            {verygoodvisible && (
                                <div onClick={VeryGoodNewHandler}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>VERY GOOD</p></div>
                            )}
                            {verygoodinvisible && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={VeryGoodNewHandler} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold'>VERY GOOD</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            {goodvisible && (
                                <div onClick={GoodHandler}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>GOOD</p></div>
                            )}
                            {goodinvisible && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={GoodHandler} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold text-[15px]'>GOOD</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div>
                            {usedvisible && (
                                <div onClick={UsedHandler}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>USED</p></div>
                            )}
                            {usedinvisible && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={UsedHandler} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold text-[15px]'>USED</p></div>
                                        <div className='mb-[15px] text-[15px] mt-[px]'><li className='ml-[15px]'>Normal signs of use with few scrathes<div className='ml-[22px]'>that are only visible when the device is</div><div className='ml-[22px]'>turned on.</div></li></div>
                                        <div><li className='ml-[15px]'>There are no breaks or damages and the <div className='ml-[22px]'>device is fully funtional.</div></li></div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div>
                            {defectvisible && (
                                <div onClick={DefectHandler}><p className='underline underline-offset-1 mb-[10px] font-semibold text-[15px]'>DEFECT</p></div>
                            )}
                            {defectinvisible && (
                                <div className=' bg-emerald-100 w-[325px] h-[172px] mb-[5px]'>
                                    <div className='fixed'>
                                        <div onClick={DefectHandler} className='mb-[11px] ml-[7px] mt-[5px]'><p className='text-red-500 text-[15px] font-semibold'>DEFECT</p></div>
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
export default MobileInfo;