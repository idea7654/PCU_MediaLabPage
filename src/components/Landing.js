import React from 'react';
import { useNavigate } from 'react-router-dom';
function Landing() {
    let navigate = useNavigate();
    return (
        <div className="App">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-1/3">
                        <h1 className="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">MultiMedia_Lab</h1>
                        <p className="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">
                            배재대학교 게임공학과 MultiMedia_Lab
                            <br />
                            <br />
                        </p>
                        <button
                            onClick={() => {
                                navigate('/About');
                            }}
                            role="button"
                            aria-label="view catalogue"
                            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-white flex items-center hover:underline"
                        >
                            About Us
                            <svg
                                className="ml-2 mt-1 dark:text-white"
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1.33325 4H10.6666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 6.66667L10.6667 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 1.33398L10.6667 4.00065" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="lg:w-7/12 lg:mt-0 mt-8">
                        <div className="w-full h-full bg-red-200">
                            <img
                                //src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png"
                                src={`${process.env.PUBLIC_URL}/Main_1.jpg`}
                                alt="apartment design"
                                className="w-full sm:block hidden"
                            />
                            <img
                                //src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png"
                                //src={`${process.env.PUBLIC_URL}/Main_1.jpg`}
                                alt="apartment design"
                                className="sm:hidden block w-full"
                            />
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                            <img
                                src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png"
                                src={`${process.env.PUBLIC_URL}/Main_2.jpg`}
                                className="w-full"
                                alt="kitchen"
                            />
                            <img
                                //src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png"
                                src={`${process.env.PUBLIC_URL}/Main_3.jpg`}
                                className="w-full"
                                alt="sitting room"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className="max-w-2xl mx-auto text-white py-8">
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; 배재대학교 게임공학과 오승묵, 2022. </p>
                        <div className="order-1 md:order-2">
                            <span
                                className="px-2"
                                onClick={() => {
                                    navigate('/About');
                                }}
                            >
                                About us
                            </span>
                            <span className="px-2 border-l">Contact us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
