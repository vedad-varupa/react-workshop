import { FaSync } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
const TradeIn = () => {
  return (
    <div className="w-6/12 bg-white h-[134px] mt-[15px] ml-[50px] flex">
      <div>
        <div className="ml-[15px] mt-[20px]"><p className="text-[#042550] text-[20px] font-semibold">TRADE-IN</p></div>
        <div className="flex">
          <div className="mt-[20px] ml-[17px] w-[40px] h-[40px]"><FaSync className="w-[30px] h-[27px]" /></div>
          <div className="mt-[14px] ml-[10px]">
            <div><p className="text-[15px] font-semibold">Would you like to trade in</p></div>
            <div><p className="text-[15px] font-semibold">another device?</p></div>
          </div>
          <div className="ml-[40px] mt-[25px] w-[50px]"><button className="border-2 border-zinc-400 w-[110px] h-[31px]"><p className="text-[13px] font-bold">YES, I DO</p></button></div>
        </div>
      </div>
      <div className="ml-[100px] w-[1px] h-[60px] border-[0.5px] mt-[38px] "></div>
      <div className="flex">
        <div className="mt-[43px] ml-[20px]">
          <div className="ml-[18px]"><FaSync /></div>
          <div><p className="text-[15px] mt-[10px] font-semibold">Describe &</p></div>
          <div><p className="text-[15px] font-semibold">get offer</p></div>
        </div>
        <div className="ml-[20px] mt-[70px]"><FaLongArrowAltRight /></div>
        <div className="mt-[43px] ml-[15px]">
          <div className="ml-[18px]"><FaSync /></div>
          <div><p className="text-[15px] mt-[10px] font-semibold">send it in</p></div>
          <div><p className="text-[15px] font-semibold">we verify</p></div>
        </div>
        <div className="ml-[20px] mt-[70px]"><FaLongArrowAltRight /></div>
        <div className="mt-[43px] ml-[15px]">
        <div className="ml-[18px]"><FaSync /></div>
          
          <div><p className="text-[15px] mt-[20px] font-semibold">Get paid</p></div>
        </div>
      </div>
    </div>

  )
}
export default TradeIn;