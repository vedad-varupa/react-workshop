const Table = ({data}) => {
    return (
        <div className="m-[50px] flex flex-col items-center w-[1300px]">
        <table className="w-full m-[50px 0px] border-spacing-[15px] border-separate border border-slate-400">
            <tbody>
                <tr>
                    <th className="w-[50px] text-left text-[15px] border border-slate-300">Rating</th>
                    <th className="w-[50px] text-left text-[15px] border border-slate-300">Title</th>
                    <th className="w-[50px] text-left text-[15px] border border-slate-300">Order</th>
                    <th className="w-[50px] text-left text-[15px] border border-slate-300">Message</th>
                    <th className="w-[50px] text-left text-[15px] border border-slate-300">Customer</th>
                </tr>
               {data.map((item)=>
               <tr key={item.id} >
                   <td className="w-[50px] text-[15px] border border-slate-300">{item.rating}</td>
                   <td className="w-[50px] text-[15px] border border-slate-300">{item.title}</td>
                   <td className="w-[50px] text-[15px] border border-slate-300">{item.order}</td>
                   <td className="w-[50px] text-[15px] border border-slate-300">{item.message}</td>
                   <td className="w-[50px] text-[15px] border border-slate-300">{item.customer}</td>
               </tr>
               
               )}
            </tbody>
        </table>
            </div>
    )
}
export default Table;