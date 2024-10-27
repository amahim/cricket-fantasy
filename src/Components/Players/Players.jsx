/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";



import { useEffect, useState } from "react";

const Players = ({handleChoosePlayer,choosePlayer,showSelectedSection}) => {

    const [players,setPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
 

    return (
    <div className=" py-5 md:text-start text-center">
        {/* heading line btns */}
        <div className="sticky md:py-4 py-2 top-0 backdrop-blur-md bg-white/50 z-10">
            <div className=" w-4/5 mx-auto   flex md:flex-row flex-col gap-2 md:gap-0 md:justify-between">
                <h1 className="font-bold text-2xl">Available Players</h1>
                <div className="flex gap-2 justify-center md:justify-start">
                    <button className="rounded-xl text-white bg-success p-2 border-2">Available</button>
                    <button className="rounded-xl p-2 border-2" onClick={()=>showSelectedSection()}>Selected ({choosePlayer.length})</button>
                </div>
            </div>
        </div>
        {/* available pl */}
        <div className="w-4/5 mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 py-8">
            {
                players.map(player=>(
                    <div className="rounded-xl shadow-xl p-4" key={player.id}>
                        <figure>
                            <img src={player.img} className="rounded-xl" />
                        </figure>
                        {/* body card */}
                        <div className="flex flex-col gap-2">
                            {/* name */}
                            <div className="flex gap-2 items-center mt-2">
                                <FaUser className="text-2xl" />
                                <h3 className="font-medium text-2xl">{player.name}</h3>
                            </div>
                            {/* flags */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 ">
                                <FaFlag />
                                <p>{player.country}</p>
                                </div>
                                <div className="font-medium p-2 bg-[#1313130D] rounded-xl">
                                    <h1>{player.role}</h1>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-start">
                                <h1 className="font-bold text-black">Rating</h1>
                            </div>
                            <div  className="flex items-center justify-between">
                                <p>{player.bat_type}</p>
                                <p>{player.bowl_type}</p>
                            </div>
                            <div  className="flex items-center justify-between">
                                <p>Price : {player.price}$</p>
                                <button className="btn btn-sm btn-outline btn-success" 
                                    onClick={() => { handleChoosePlayer(player) }}
                                >Choose Player</button>
                                
                            </div>

                        </div>
                    </div>
                ))
            }
            
        </div>

    </div>
    );
};

export default Players;