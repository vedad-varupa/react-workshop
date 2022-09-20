import Rate from "./Rate";

const Card = ({ values }) => {

    return (
        <div className="bg-slate-100 w-[430px] h-[305px] rounded-[3px]">
            <div className='ml-[9px] mt-[5px]'>
                <Rate
                    count={5}
                    size={27}
                    value={values.rating}
                    activeColor={'#fde047'}
                    inactiveColor={'#ddd'}
                />
            </div>
            <div className='flex mt-[15px]'>
                <div className='font-semibold mr-[3px] ml-[10px]'> {values.title} / </div>
                <div> {values.order}</div>
            </div>
            <div className='mt-[20px] w-[358px] ml-[10px]'>{values.message}</div>
            <div className='flex mt-[70px]'>
                <div className='mr-[10px] font-semibold ml-[10px]'>{values.customer}</div>
                <div className='flex'>
                    <div className='mr-[5px]' > {values.telefon.phoneName} | </div>
                    <div className='mr-[5px]'> {values.telefon.RAM} | </div>
                    <div>{values.telefon.color} </div>
                </div>
            </div>
        </div>

    )
}
export default Card;