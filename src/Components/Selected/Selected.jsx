/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

const Selected = ({choosePlayer,showPlayersSection,deletePlayerBtn}) => {
    return (
        <div className=" py-5 md:text-start text-center">
            {/* btns */}
            <div className="sticky md:py-4 py-2 top-0 backdrop-blur-md bg-white/50 z-10">
                <div className=" w-4/5 mx-auto   flex md:flex-row flex-col gap-2 md:gap-0 md:justify-between">
                    <h1 className="font-bold text-2xl">Selected Players ({choosePlayer.length}/6)</h1>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <button className="rounded-xl p-2 border-2" onClick={()=>showPlayersSection()}>Available</button>
                        <button className="rounded-xl bg-success text-white p-2 border-2">Selected ({choosePlayer.length})</button>
                    </div>
                </div>
            </div>
            {/* selected pl sec */}
            <div className="md:w-4/5 w-[90%] mx-auto grid grid-cols-2 gap-2 md:gap-4 py-10 ">
                {
                    choosePlayer.map((player) => (
                        <div className="p-2 rounded-xl shadow-xl mt-2" key={player.id}>
                            <div className="flex md:flex-row flex-col  md:justify-between items-center">
                                <div className="flex md:flex-row flex-col gap-2 items-center">
                                    <div>
                                        <img src={player.img} className="
                                        md:w-28 md:h-20 w-40 w-30 rounded-xl" />
                                    </div>
                                    <div className="flex flex-col gap-1 md:text-start text-center ">
                                        <h1 className="md:text-xl font-medium text-black">{player.name}</h1>
                                        <p className=" text-[#13131399] ">{player.role}</p>
                                        <p className=" text-[#13131399] ">{player.price}$</p>
                                    </div>
                                </div>
                                {/* dlt icon */}
                                <div >
                                    <button className="btn btn-error md:px-4  px-10 py-2" 
                                    onClick={()=>deletePlayerBtn(player.id ,player.name,player.price)}
                                    ><MdDeleteForever className="text-xl" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <div className="mt-2">
            <button className="rounded-xl bg-success text-white p-2 border-2" 
            onClick={()=>showPlayersSection()}>Add more players</button>
            </div> */}
        </div>
    );
};

export default Selected;