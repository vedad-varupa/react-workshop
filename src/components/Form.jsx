import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Form = () => {

  return (

    <div className='bg-white min-w-1/2 h-[700px] ml-[50px] mt-[29px] rounded-[1px] fixed '>
      <div className="ml-[20px] mt-[15px] text-[16px] text-black">Are you a new customer, fill-in your billing details below:</div>
      <div className="ml-[20px] mt-[20px]"><input type="text" placeholder="Company name" className="border-[2px] border-neutral-300 min-w-[640px] pl-[5px] text-[15px] h-[33px]"></input></div>
      <div className="flex ml-[20px] gap-[20px] mt-[25px] relative">
        <input type="text" placeholder="Firstname *" className="border-[2px] border-neutral-300 w-[310px] pl-[5px] text-[15px] h-[33px]" required></input>
        <input type="text" placeholder="Lastname *" className="border-[2px] border-neutral-300 w-[310px] pl-[5px] text-[15px] h-[33px]"></input>
      </div>
      <div className="ml-[20px] mt-[20px]"><input type="text" placeholder="Email address *" className="border-[2px] border-neutral-300 w-[640px] pl-[5px] text-[15px] h-[33px]"></input></div>
      <div className="ml-[20px] mt-[20px]"><input type="text" placeholder="Address *" className="border-[2px] border-neutral-300 w-[490px] pl-[5px] text-[15px] h-[33px]"></input></div>
      <div className="flex ml-[20px] gap-[20px] mt-[25px]">
        <input type="text" placeholder="City *" className="border-[2px] border-neutral-300 w-[310px] pl-[5px] text-[15px] h-[33px]"></input>
        <input type="text" placeholder="Zip code *" className="border-[2px] border-neutral-300 w-[310px] pl-[5px] text-[15px] h-[33px]"></input>
      </div>
      <div className="ml-[20px] mt-[20px] relative"><input type="dropdown" placeholder="Country *" className="border-[2px] border-neutral-300 w-[310px] pl-[5px] text-[15px] h-[33px]"></input><div className="absolute bottom-[9px] ml-[290px] "><FaAngleDown/></div></div>
      <div className="ml-[20px] mt-[20px]"><input type="text" placeholder="Telephone # *" className="border-[2px] border-neutral-300 w-[640px] pl-[5px] text-[15px] h-[33px]"></input></div>
      <div className="ml-[20px] mt-[20px] relative"><input type="password" placeholder="Password *" className="border-[2px] border-neutral-300 w-[640px] pl-[5px] text-[15px] h-[33px]"></input><div className="absolute bottom-[9px] ml-[617px] "><FaEyeSlash/></div></div>
      <div className="ml-[20px] mt-[25px] flex"><input type="checkbox" className="border-[2px] border-black"></input><div className="text-[16px] text-black ml-[17px] w-[630px]">Ship to a different address?</div></div>
    </div>

  )
}
export default Form;