
/* eslint-disable react/prop-types */
import './Header.css'
const Header = ({claimBtn,coin}) => {

    return (
    <div >
        {/* navbar */}
        <div className="navbar md:w-4/5 md:mx-auto justify-between">
            <div >
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixtures</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Scheduels</a></li>
                </ul>
                </div>
                <img src="./logo.png"/>
            </div>
            <div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Fixtures</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Scheduels</a></li>
                    </ul>
                </div>
                <div className=" flex  gap-2 items-center border-2 border-[#FCD040] p-2 rounded-xl">
                    <h1 className=""><strong>{coin}</strong> Coin </h1>
                    <img src="./coin.png" alt="" />
                </div>
            </div>
            
        </div>
        {/* banner */}
        <div className="md:w-4/5 w-[95%] mx-auto banner bg-[#131313] flex flex-col py-16 gap-4 text-center items-center my-5 rounded-xl">
            <img src="./banner-main.png" alt="" />
            <h1 className='font-bold text-xl md:text-3xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className=' text-[#FFFFFFB3]'>Beyond Boundaries Beyond Limits</p>
            <div className='p-2 border-2 border-white rounded-2xl'>
            <button className='bg-gradient-to-r from-[#e607e6a9] to-[#ff9901c0] ... text-black font-medium  p-2 rounded-xl ' onClick={() => claimBtn()}>Claim Free Coins</button>
            
            </div>
        </div>
    </div>
        
    );
};

export default Header;