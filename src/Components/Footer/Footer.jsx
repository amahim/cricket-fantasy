
import './Footer.css'
const Footer = () => {
    return (
        <div className="relative md:mt-28 mt-72">
            {/* contact */}
            <div className=" absolute md:top-[-120px] top-[-300px] left-1/2 transform -translate-x-1/2 border-2 p-4 rounded-xl w-4/5 mx-auto">
                <div className="news flex flex-col items-center p-16 text-center gap-4 border-2 border-white rounded-xl bg-white">
                    <h3 className="text-black font-bold text-2xl ">Subscribe to our Newsletter</h3>
                    <p className="text-[#131313B3] ">Get the latest updates and news right in your inbox!</p>
                    <div className="flex md:flex-row flex-col gap-2">
                            <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item" />
                            <button className="btn btn-primary bg-gradient-to-r from-[#e607e6a9] to-[#ff9901c0] ... border-none join-item">Subscribe</button>
                        </div>
                </div>
            </div>
            {/* main footer */}
            <div className="bg-[#06091A] ">
                <div className="flex justify-center pb-5 pt-52">
                    <img src="./logo-footer.png" />
                </div>
                <footer className="flex md:flex-row flex-col gap-4 md:gap-0 justify-between pb-10 w-4/5 mx-auto">
                    <nav className="flex gap-2 flex-col text-start">
                        <h6 className="text-xl font-medium text-white">About Us</h6>
                        <p className="text-[#FFFFFF99] ">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </nav>
                    <nav className="flex gap-2 flex-col text-start">
                        <h6 className="text-xl font-medium text-white">Quick Links</h6>
                        <div className="flex gap-2 flex-col">
                            <a className="text-[#FFFFFF99]">Home</a>
                            <a className="text-[#FFFFFF99]">Service</a>
                            <a className="text-[#FFFFFF99]">Contact</a>
                            <a className="text-[#FFFFFF99]">About</a>
                        </div>
                    </nav>
                    <form className="text-start">
                        <h6 className="text-xl font-medium text-white">Subscribe</h6>
                        <fieldset className="form-control">
                        <p className="text-[#FFFFFF99] text-start">Subscribe to our newsletter for the <br /> latest updates</p>
                        <div className="join mt-2">
                            <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item" />
                            <button className="btn btn-primary bg-gradient-to-r from-[#e607e6a9] to-[#ff9901c0] ... border-none join-item">Subscribe</button>
                        </div>
                        </fieldset>
                    </form>
                </footer>
                <hr />
                <div className="py-5 text-center">
                    <h1 className="text-[#FFFFFF99] ">@2024 Your Company All Rights Reserved.</h1>
                </div>
            </div>
        </div>
       
    );
};

export default Footer;